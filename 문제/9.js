// 함수형 프로그래밍
// 아래 코드의 문제점을 확인하고 함수형 프로그래밍 규칙에 맞게 수정하기

// let value = {a : 1};

// function test() {
//     value.a = 23;
// }
// test();
// console.log(value);

// 수정

let value = {a : 1};

function Test() {
    let cloneValue = {...value, a : 23};
    return cloneValue;
}

console.log(Test());