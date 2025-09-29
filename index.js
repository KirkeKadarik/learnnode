let array = ['apple', 'pear', 'cherry', 'mango'];

for(fruit of array) {
    console.log(fruit);
}

array.forEach(fruit => {
    console.log(fruit);
});

let obj = {
    name: 'kaspar',
    age: 32,
    colour: 'white',
}

for(key in obj) {
    console.log(key);
    console.log(obj[key]);
} 

let capital = array.map(fruit => {
    return fruit.toUpperCase();
});

console.log(capital);

let aFruits = array.filter(fruit => {
return fruit.includes('a');
});
console.log(aFruits);

let nums = [1, 2, 3, 4, 5, 6, 7];
let sum = nums.reduce((total, num) => {
    return total + num;
});
console.log(sum);

