import * as cheerio from 'cheerio';
import fs from 'fs';

const sleep = ms => new Promise(r => setTimeout(r, ms));
let cacheDir = import.meta.dirname + '/../cache';

if(!fs.existsSync(cacheDir)){
    fs.mkdirSync(cacheDir);
}



for(let i = 3173; i>3163; i--){
    let body;
if(fs.existsSync(cacheDir + `/${i}.html`)){
    body = fs.readFileSync(cacheDir +  `/${i}.html`);
}else {
    await sleep(1000);
    let res = await fetch(`https://xkcd.com/${i}/`);
 body = await res.text();
fs.writeFileSync(cacheDir +  `/${i}.html`, body);
}

const $ = cheerio.load(body);
let img = $('#comic>img');
console.log(img.attr('src'));
console.log(img.attr('alt'));
console.log(img.attr('title'));
}