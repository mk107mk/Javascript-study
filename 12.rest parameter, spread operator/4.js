
//spread operator를 사용한 객체 복사

let obj1 = { a: 1, b: 2, c: 3 };
let objCopy1 = obj1;

console.log(obj1 === objCopy1); // true(참조가 같음)

obj1.a = 4;
console.log(obj1); // {a:4,b:2,c:3}
console.log(objCopy1); // {a:4,b:2,c:3}

let obj2 = { a: 1, b: 2, c: 3 }
let objCopy2 = { ...obj2 };

console.log(obj2 === objCopy2); // false(참조가 다름)

obj2.a = 4;

console.log(obj2); // {a:4,b:2,c:3}
console.log(objCopy2); // {a:1,b:2,c:3}