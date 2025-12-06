import inquirer from 'inquirer';

async function main() {
  console.log('Hi, welcome to  Feta Boba!');

  const answers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'delivery',
      message: 'Would you like this order delivered?',
      default: false,
    },
    {
      type: 'input',
      name: 'phone',
      message: "What's your phone number?",
      validate(value) {
        const digitsOnly = value.replace(/[^\d]/g, '');
        return /^\d{7,8}$/.test(digitsOnly) ||
               /^372\d{7,8}$/.test(digitsOnly) ||
               /^\+372\d{7,8}$/.test(digitsOnly)
          ? true
          : 'Please enter a valid Estonian phone number';
      },
      filter(value) {
        const digitsOnly = value.replace(/[^\d]/g, '');
        if (/^\d{7,8}$/.test(digitsOnly)) return `+372${digitsOnly}`;
        if (/^372\d{7,8}$/.test(digitsOnly)) return `+${digitsOnly}`;
        if (/^\+372\d{7,8}$/.test(digitsOnly)) return `+372${digitsOnly.slice(-8)}`;
        return value;
      },
    },
    {
      type: 'list',
      name: 'size',
      message: 'What size would you like?',
      choices: ['Large', 'Medium', 'Small'],
      filter(val) {
        return val.toLowerCase();
      },
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many cups do you want?',
      validate(value) {
        const valid = !Number.isNaN(Number.parseFloat(value));
        return valid || 'Please enter a number';
      },
      filter: Number,
    },
    {
      type: 'list',
      name: 'flavor',
      message: 'Choose your flavor',
      choices: [
        'Classic Milk Tea',
        'Taro',
        'Matcha',
        'Thai Tea',
        'Brown Sugar',
      ],
    },
    {
      type: 'checkbox',
      name: 'toppings',
      message: 'Select your toppings',
      choices: [
        { name: 'Boba Pearls', value: 'pearls' },
        { name: 'Pudding', value: 'pudding' },
        { name: 'Grass Jelly', value: 'grassJelly' },
        { name: 'Aloe Vera', value: 'aloe' },
        { name: 'Red Bean', value: 'redBean' },
      ],
    },
    {
      type: 'list',
      name: 'sweetness',
      message: 'Sweetness level?',
      choices: ['0%', '25%', '50%', '75%', '100%'],
    },
    {
      type: 'input',
      name: 'comments',
      message: 'Any comments about your order experience?',
      default: 'Everything was great!',
    },
    {
      type: 'list',
      name: 'freebie',
      message: 'Thanks for leaving a comment! Pick a freebie:',
      choices: ['Mini Mochi', 'Extra Pearls'],
      when(answers) {
        return answers.comments !== 'Everything was great!';
      },
    },
  ]);

  // Add emoji for delivery
  answers.deliverySymbol = answers.delivery ? '🛵' : '🏠';

  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
}

main();
