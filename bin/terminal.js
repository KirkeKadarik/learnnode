function write(text) {
    process.stdout.write(text);
}

write('Hello terminal\n');
write('Hello terminal\t');

//text color (foreground color)
write('\x1B[31mHello terminal\n');
write('\x1B[32m');
write('Hello terminal\n');
write('\x1B[33m');
write('Hello terminal\n');
write('\x1B[34m');
write('Hello terminal\n');
write('\x1B[35m');
write('Hello terminal\n');
write('\x1B[36m');
write('Hello terminal\n');
write('\x1B[37m');
write('Hello terminal\n');
//background color
write('\x1B[41mHello terminal\n');
write('\x1B[42m');
write('Hello terminal\n');
write('\x1B[43m');
write('Hello terminal\n');
write('\x1B[44m');
write('Hello terminal\n');
write('\x1B[45m');
write('Hello terminal\n');
write('\x1B[46m');
write('Hello terminal\n');
write('\x1B[47m');
write('Hello terminal\n');
write('\x1B[0m');
write('\n');
//dim colour
write('\x1B[90m');
write('Hello terminal\n');
write('\x1B[91mHello terminal\n');
write('\x1B[92m');
write('Hello terminal\n');
write('\x1B[93m');
write('Hello terminal\n');
write('\x1B[94m');
write('Hello terminal\n');
write('\x1B[95m');
write('Hello terminal\n');
write('\x1B[96m');
write('Hello terminal\n');
write('\x1B[97m');
write('Hello terminal\n');
write('\x1B[0m');
write('\n');

//bright color
write('\x1B[100m');
write('Hello terminal\n');
write('\x1B[101mHello terminal\n');
write('\x1B[102m');
write('Hello terminal\n');
write('\x1B[103m');
write('Hello terminal\n');
write('\x1B[104m');
write('Hello terminal\n');
write('\x1B[105m');
write('Hello terminal\n');
write('\x1B[106m');
write('Hello terminal\n');
write('\x1B[107m');
write('Hello terminal\n');
write('\x1B[0m');
write('\n');

for(let i = 0; i<256; i++) {
    write(`\x1B[38;5;${i}m`);
    write('#');
}
write('\x1B[0m');

write(`\x1B[48;2;255;0;0m`);
write('Hello terminal\n');
write('\x1B[0m');

for(let i = 0; i<256; i++) {
    write(`\x1B[48;2;${i};${i};${i}m`);
    write(' ');
}