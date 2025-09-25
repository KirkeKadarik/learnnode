let sum = 0;

for(let i=0; i<1_000_00; i++) {
//console.log(i);
sum += i;
}
 console.log(sum);

 for(let i = 10; i>0; i--) {
    console.log(i);
 }
  for(let i=1; i<1_000_000; i*=2) {
    console.log(i);
 }

let time = Date.now();
let num = 0;
 while(Date.now() < time+1000) {
num++;
 }
 console.log(num);
 
 num = 10;
 while(num < 10) {
    console.log('while');
 }

 do {
    console.log('do');
   
 }  while(num < 10);