function write(text) {
    process.stdout.write(text);
};

function write(text) {
    process.stdout.write(text);
};
 
write('Hello World!');
setTimeout(() => {
    write('\x1b[6D');
    write('MM24!');
}, 5000);



