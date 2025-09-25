let bool = true;
console.log(bool);
bool = false;
console.log(bool);
bool = true && false; //AND
console.log(bool);
bool = true || false; //OR
bool = false || true; //OR
bool = false || false; //OR
bool = true || true; //OR

console.log(bool);
bool = !true; //NOT
console.log(bool);
bool = !false; //NOT
console.log(bool);
bool = (true && false || true) && !(false || true && false);
console.log(bool);
bool = 10 > 5;
bool = 10 < 5;
bool = 10 > 10;
bool = 10 < 10;
bool = 10 == 10;
bool = '10' == 10;
bool = '10' === 10; //non strict will convert back
bool = 10 >= 10;
bool = 10 <= 10;
bool = 10 != 10;
bool = '10' != 10;
bool = '10' !== 10;
bool = [] == '';
bool = [1, 2, 3] == 1;

console.log(bool);
