function write(text) {
    process.stdout.write(text);
};

import chalk from "chalk";

write(chalk.blue.bgWhite.strikethrough('hello'));
write(chalk.bgAnsi256(67)('color'));
write(chalk.bgRgb(255, 28, 98)('RGB'));