import boxen from 'boxen';

console.log(boxen('unicorn', {padding: 1}));

console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));

console.log(boxen('unicorns love rainbows', {title: 'magical', titleAligment: 'center'}));