
let test3 = function(){
    console.log("test3");
}
let test4 = test3;
test3(); // "test3"
test4(); // "test3"

const obj1 ={sayHi : function(){ console.log("hi")}}
obj1.sayHi();

const obj2 ={sayHi : ()=>{ console.log("hi")}}
obj2.sayHi();

const test = () => {console.log("test")};
const test2 = () => console.log("test2");
test();
test2();

let func1 = function(){
    console.log("expression");
}
func1();

let func2 = () => {
    console.log("expression");
}
func2();

let func3 = () => console.log("expression");
func3();


let add = (a,b) => a + b;
console.log(add(1,2));

// 인자가 한개일 경우 () 생략가능
let func = vlaue => console.log(value);
func(1); // 1