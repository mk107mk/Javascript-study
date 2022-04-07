//나머지 매개변수
//함수의 정의 방법과 상관없이 함수에 넘겨주는 인수의 개수엔 제약이 없다

// function sumAll(...args){
//     let sum = 0;

//     for(let arg of args){
//         sum += arg;
//     }

//     return sum;
// }

// console.log(sumAll(1,2,3,4,5)); // 15

// function showInfo(firstName, lastName, ...address){
//     console.log(firstName + ' ' + lastName);

//     console.log(address[0]);
//     console.log(address[1]);
// }

// showInfo('mk','kim','20','123');
// //mk kim
// //20
// //1

// function showInfo(firstName, ...address, lastName){
    
// } // error


//spread operator
// let arr = [1, 2, 3];

// console.log(Math.max(...arr)); // 3

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// console.log(Math.max(...arr1, ...arr2)); // 8
// console.log(Math.max(30, ...arr1, ...arr2)); // 30


// let obj = {
//     '0': 'kim',
//     '1' : 20,
//     length : 2
// }

// let str = 'hello'
// console.log([...str]) // ['h', 'e', 'l', 'l', 'o']
// console.log(Array.from(str)); // ['h', 'e', 'l', 'l', 'o']

// console.log([...obj]); // error
// console.log(Array.from(obj)); // ['kim',20]


//spread operator를 사용한 배열 복사
// let arr1 = [1, 2, 3];
// let arrCopy1 = arr1;

// arrCopy1[0] = 4;
// console.log(arr1 === arrCopy1); //  true
// console.log(arr1); // [4, 2, 3]
// console.log(arrCopy1); // [4, 2, 3]


// let arr2 = [1, 2, 3]; 
// let arrCopy2 = [...arr2];

// arrCopy2[0] = 4;


// console.log(arr2 === arrCopy2); // false
// console.log(arr2); // [1, 2, 3]
// console.log(arrCopy2); // [4, 2 ,3]



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