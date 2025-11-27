

function write(text) {
    process.stdout.write(text);
};
 
let date = new Date().toISOString().slice(11, 19);
 
write(date);
setInterval(() => {
    date = new Date().toISOString().slice(11, 19);
    write('\x1b[8D');
    write(date);
}, 1000);


