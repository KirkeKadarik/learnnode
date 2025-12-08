import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import md5 from 'md5';
import { fileURLToPath } from 'url';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cacheDir = path.join(__dirname, '..', 'cache');
if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

const BASE_URL = 'https://www.smbc-comics.com';
let url = BASE_URL;

(async () => {
  for (let i = 0; i < 10; i++) {
    let body;
    const cacheFile = path.join(cacheDir, `${md5(url)}.html`);

    if (fs.existsSync(cacheFile)) {
      body = fs.readFileSync(cacheFile, 'utf-8');
    } else {
      await sleep(1000);
      const res = await fetch(url);
      body = await res.text();
      fs.writeFileSync(cacheFile, body);
    }

    const $ = cheerio.load(body);
    const img = $('#cc-comic');
    if (!img || img.length === 0) {
      console.log('Could not find comic image on', url);
      break;
    }

    const imgUrl = img.attr('src');
    const altText = img.attr('title');

    console.log('Comic URL:', url);
    console.log('Image URL:', imgUrl);
    console.log('Alt text:', altText);
    console.log('---');

    const prev = $('a[rel="prev"]');
    const prevHref = prev.attr('href');
    if (!prevHref) break;

    url = prevHref.startsWith('http') ? prevHref : BASE_URL + prevHref;
  }
})();
