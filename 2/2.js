// var a = 1;
// let b = 1;
// {
//    var a = 2;
//    let b = 2;
// }
// console.log(a);
// console.log(b);

// function test(){
//     var a = 3;
// }
// test();
// console.log(a);

// function test(){
//     let value = 3;
//     console.log(value);
// }
// test(); // 3
// console.log(value); // error

let str = "hi";

function test2(){
    str += " hello";

}
test2();
console.log(str);