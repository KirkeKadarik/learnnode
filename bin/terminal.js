function write(text) {
    process.stdout.write(text);
};
 
import readline from 'readline';
 
const blank = '\n'.repeat(process.stdout.rows)
console.log(blank)
readline.cursorTo(process.stdout, 0, 0)
readline.clearScreenDown(process.stdout)
 
write('@');
 
import keypress from "keypress";
 
keypress(process.stdin);
 
process.stdin.on('keypress', (ch, key) => {
    // console.log(ch, key);
    if(key && key.name == 'c' && key.ctrl) {
        process.exit();
    }
    if(key.name === 'd'){
        write('\x1b[1D');
        write(' ');
        write('@');
    }
    if(key.name === 'a'){
        write('\x1b[2D');
        write('@');
        write(' ');
        write('\x1b[1D');
    }
    if(key.name === 's'){
        write('\x1b[1D');
        write(' ');
        write('\x1b[1D');
        write('\x1b[1B');
        write('@');
    }
    if(key.name === 'w'){
        write('\x1b[1D');
        write(' ');
        write('\x1b[1D');
        write('\x1b[1A');
        write('@');
    }
});
 
process.stdin.setRawMode(true);


