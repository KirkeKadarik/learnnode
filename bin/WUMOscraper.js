import * as cheerio from 'cheerio';
import fs from 'fs';
import md5 from 'md5';

const sleep = ms => new Promise(r => setTimeout(r, ms));
let cacheDir = import.meta.dirname + '/../cache';

if(!fs.existsSync(cacheDir)){
    fs.mkdirSync(cacheDir);
}



const BASE_URL = 'https://wumo.com';
let url = BASE_URL + '/wumo';
for(let i = 0; i<10; i++){


    let body;
if(fs.existsSync(cacheDir + `/${md5(url)}.html`)){
    body = fs.readFileSync(cacheDir +  `/${md5(url)}.html`);
}else {
    await sleep(1000);
    let res = await fetch(url);
 body = await res.text();
fs.writeFileSync(cacheDir +  `/${md5(url)}.html`, body);
}

const $ = cheerio.load(body);
let img = $('.box-content>a>img');

console.log(BASE_URL + img.attr('src'));
console.log(img.attr('alt'));
let prev = $('a.prev');
url = BASE_URL + prev.attr('href');
}