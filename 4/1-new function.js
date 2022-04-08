// new function 문법
// 함수를 선언하는 방법
// 함수 선언문, 함수 표현식, new function 문법

//let func = new Function([arg1, arg2, ...argN], functionBody);

// let sum = new Function('a' , 'b' , 'return a + b');
// console.log(sum(1 , 2)); // 3

// let test = new Function('console.log("test")');
// test(); // test

// new function은 런타임에 받은 무자열을 사용해 함수를 만들 수 있다.

// let str = 'return a + b';
// let sum = new Function('a' , 'b' , str);
// console.log(sum(1 , 2)); // 3


// new function을 이용해 만든 함수는 외부 변수에 접근할 수 없고, 오직 전역 변수에만 접근할 수 있다.

// function getFunc() {
//     let value = 'test';

//     let func = function(){
//         console.log(value);

//     }
//     return func;
// }
// let newFunc = getFunc();
// newFunc(); // test


// new function을 이용해 만든 함수의 경우 함수의 프로퍼티가 현재 렉시컬 환경이 아닌
// 전역 렉시컬 환경을 참조하게 된다.

function getFunc() {
    let value = 'test';

    let func = new Function('console.log(value)');

    return func;
}

let newFunc = getFunc();
newFunc(); // error