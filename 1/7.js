let value1 = ' '; //true 
let value2 = 1; //true
let value3 = 0; // false

console.log(value1 || value2 || value3); // ' ' 

console.log('' || 1 || 0); // 1
console.log('' || false || 0); // 0
//or true 가 나올 때 까지 검사

console.log(value1 && value2 && value3);
console.log(' ' && true && 1);

console.log(!!null);
console.log(!!undefined);