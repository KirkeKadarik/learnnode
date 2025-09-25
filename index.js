let obj = {
    name: 'kirke',
    age: 21,
    sexuality: 'straight',
    fruits: ['mango', 'apple', 'cherry'],
    dog: {
        age: 3,
        name: 'Feta',
        gender: 'female'
    },
    parentName: 'Ardi',
    asd: 'asd',
    //parent-name: 'asd', not allowed bcs-
    //2asd: 'asd', not allowed to start with number
    
    'parent-name': 'Name',
    '2asd': 'asd',
    'some thing': 'asd2',

}; 
console.log(obj);
console.log(obj.name);
console.log(obj.fruits[1]);
console.log(obj.dog.name);
console.log(obj['parent-name']);
console.log(Object.keys(obj));
