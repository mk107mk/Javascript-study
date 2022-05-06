let message = 'hello';
let phrase = message;

console.log(message); // 'hello'
console.log(phrase); // 'hello'

let user = {
  name  : 'kim'
};

let admin = user; 

admin.name = 'lee';
console.log(user.name);

let a1= {};
let b1 = a1;

console.log(a1 == b1); // true
console.log(a1 === b1); // ture

let a2 = {};
let b2 = {};

console.log(a2 == b2); // false
console.log(a2 === b2); // false