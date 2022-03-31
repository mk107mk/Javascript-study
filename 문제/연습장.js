let obj = [
     1,
    2
]



let array = [1,2]
let clone = [3]

clone = Object.assign(clone, obj) 


// console.log(typeof obj);
// console.log(typeof array);

obj[0] = 1212;

console.log(obj);
console.log(clone);