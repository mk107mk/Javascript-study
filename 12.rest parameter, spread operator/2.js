
spread operator
let arr = [1, 2, 3];

console.log(Math.max(...arr)); // 3

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

console.log(Math.max(...arr1, ...arr2)); // 8
console.log(Math.max(30, ...arr1, ...arr2)); // 30


let obj = {
    '0': 'kim',
    '1' : 20,
    length : 2
}

let str = 'hello'
console.log([...str]) // ['h', 'e', 'l', 'l', 'o']
console.log(Array.from(str)); // ['h', 'e', 'l', 'l', 'o']

console.log([...obj]); // error
console.log(Array.from(obj)); // ['kim',20]

