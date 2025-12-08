
import inquirer from 'inquirer';

console.log('Hi, welcome to Node Boba!');

const answers = await inquirer.prompt([
  {
    type: 'confirm',
    name: 'delivery',
    message: 'Would you like this order delivered?',
    default: false,
    transformer: (answer) => (answer ? '🛵' : '🏠'),
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate(value) {
      const pass = value.match(
        /^([01])?[\s.-]?\(?(\d{3})\)?[\s.-]?(\d{3})[\s.-]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?)(?:\d+)?)?$/i
      );
      return pass || 'Please enter a valid phone number';
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

console.log('\nOrder receipt:');
console.log(JSON.stringify(answers, null, '  '));
