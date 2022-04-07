//Call by value , Call by refernce

//cal by value

// let a = 1;
// let func = (value) => { //callee
//     value=value+1;
// }
// func(a); //caller
// console.log(a);


//call by reference

// let obj = {};

// let func = (value) => {
//     value.name = 'kim';
// }
// func(obj);
// console.log(obj); // {name : 'kim'}
// console.log(obj.name); // kim


//call by sharing

// var obj = {};
// var func = (value) => {
 
//     value = 1;
// }
// func(obj);
// console.log(obj);

// let a = {};
// let func = function(b) {
//     // a = {}  b = {} =1
//     b = (b.a=1);
//     //b.a =1 , a.a = 1;
//     //b = 1 , a.a = 1;
//     b.b = 2;
//     //b = 1 , b.b = 2 ????
//     console.log(b);
   
//   }
//   func(a);
//   console.log(a); // {a : 1}


//참조에 의한 객체 복사

// let message = 'hello';
// let phrase = message;

// console.log(message); // 'hello'
// console.log(phrase); // 'hello'

// let user = {
//   name  : 'kim'
// };

// let admin = user; 

// admin.name = 'lee';
// console.log(user.name);

// let a = {};
// let b = a;

// console.log(a == b); // true
// console.log(a === b); // ture

// let a = {};
// let b = {};

// console.log(a == b); // false
// console.log(a === b); // false


//기존에 있던 객체와 똑같으면서 독립전인 객체를 만드는 방법
//1.기존 객체의 프로퍼티들을 순회해 원시 수준까지 프로퍼티를 복사

// let user = {
//   name : 'kim',
//   age : 20
// }

// let clone = {};

// for(let key in user){
//   clone[key] = user[key];
// }

// clone.name = 'lee';

// console.log(user.name); // kim
// console.log(clone.name); // lee


let user = {
  name : 'kim',
  age : 30
};

let user2  = {
  address : 123
}

let user3 = {
  age : 20
}

Object.assign(user, user2, user3);

console.log(user); // {name : 'kim', address: 123, age: 20}
