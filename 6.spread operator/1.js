//Spread Operator

function test(a,b,...rest){
    console.log(a,b);
    console.log(rest);
    console.log(rest[5]);
}
test(1,2,3,4,5,6,7,8);

let arr1 = [1,2,3];
let arr2 = [3, ...arr1 ,4,5];
console.log(arr2);

let arr3 = [1,2,3];
let arr4 = [...arr3];
console.log(arr4);

let arr5 = [{name:"kim" , age: 20}];
let arr6 = [...arr5];

arr5[0].name = "Lee";

console.log(arr5); // [{name: "Lee", age: 20}]
console.log(arr6); // [{name: "Lee", age: 20}]

function func(...rest){
    console.log(rest);
}
func(1,2);
func(1,2,3);

function func(name, ...rest){
    console.log(`${name} : ${rest}`);
}

func('arr1', 1,2,3,4); // 1,2,3,4
func('arr2', 3,4,5,6,7,8); //3,4,5,5,6,7,8

let obj = {name: 'kim', age: 20};
obj = {...obj, gender:'남자'}; 

console.log(obj); // {name: 'kim', age: 20, gender: '남자'}

obj = {...obj, name: 'Lee', age: 30};

console.log(obj); // {name: 'Lee', age: 30, gender: '남자'}
