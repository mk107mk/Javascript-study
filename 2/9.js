//Call by value , Call by refernce

//cal by value

// let a = 1;
// let func = (value) => { //callee
//     value=value+1;
// }
// func(a); //caller
// console.log(a);

let obj = {};

let func = (value) => {
    value.name = 'kim';
}
func(obj);
console.log(obj.name); // kim
console.log(obj);
