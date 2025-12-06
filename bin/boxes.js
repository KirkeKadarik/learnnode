import boxen from 'boxen';
import chalk from 'chalk';










console.log(
  boxen(
    chalk.bgRed('P') + chalk.bgYellow('E') + chalk.bgGreen('R') + chalk.bgCyan('R') + chalk.bgMagenta('Y'),
    { padding: 1, borderStyle: 'round', title:('⋆.𐙚 ̊KATY˚୨୧⋆.˚'), titleAlignment: 'center' }
  )
);



console.log(
  boxen(
    chalk.red('🔥 Hot') + ' then youre' + chalk.blue('❄️ Cold'),
    { padding: 1, borderStyle: 'classic', margin: 1, title: 'Cause youre', titleAlignment: 'center' }
  )
);

console.log(
  boxen(
    chalk.gray('youre') + chalk.magenta.bold(' yes'), { padding: 1, borderStyle: 'double' })
);

console.log(
  boxen('then youre' + ' ' + chalk.cyan('NO'), { padding: 1, borderStyle: 'round' })
);

console.log(
  boxen('youre in', { padding: 0, borderStyle: 'classic' })
);
console.log(
  boxen(
    chalk.white.bgMagentaBright.bold('then youre'),
    { padding: 2, borderStyle: 'round', title: chalk.yellow('✨ OUT ✨'), titleAlignment: 'center' }
  )
);
