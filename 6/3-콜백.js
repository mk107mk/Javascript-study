// 파라미터로 함수를 전달하는 함수

// 콜백 함수 원칙

// 1. 익명 함수 사용

// let number = [1, 2, 3, 4, 5];

// number.forEach(function(value){
//     console.log(value * 2);
// }) // 2 4 6 8 10

// // 2. 함수의 이름 넘기기

// function Name(name, callback){
//     console.log('name:' + name);
//     callback();
// }

// function finishFunc() {
//     console.log('finish function');
// }

// Name('kim',finishFunc);

// 전역변수, 지역변수가 콜백함수의 파라미터로 전달 가능하다

// let globalVal = 'global'; // 전역변수

// function callbackFunc(callback){
//     let localVal= 'local'; //  지역변수
//     callback(localVal);
// } 
// function func2(value){
//     console.log(`global: ${globalVal}, local: ${value}`);
// }
// callbackFunc(func2);


//this를 사용한 콜백함수

// let userData = {
//     id : '123',
//     name : 'no set',
//     setName: function(firstName, lastName){
//         this.name = firstName + ' ' + lastName;
//     }
// }

// function getUserName(firstName, lastName, callback){
//     callback(firstName, lastName);
// }

// getUserName('kim', 'mk', userData.setName);
// console.log(`1: ${userData.name}`);
// console.log(`2: ${globalThis.name}`);

// setName() 함수가 실행되기 전의 name 값이 나온다.
// getUserName()이 전역 함수이기 때문

// setName()에서 사용된 this 객체가 window, global 객체를 가리킨다


//call apply를 사용하여 this를 보호

// let userData = {
//     id : '123',
//     name : 'no set',
//     setName: function(firstName, lastName){
//         this.name = firstName + ' ' + lastName;
//     }
// }

// function getUserName(obj,firstName, lastName, callback){
//     callback.call(obj, firstName, lastName);
// }

// getUserName(userData,'kim', 'mk', userData.setName);
// console.log(`1: ${userData.name}`);
// console.log(`2: ${globalThis.name}`);


//콜백 지옥(Callback Hell)

// function add(value, callback){
//     let sum = value + value;
//     console.log(sum);
//     callback(sum);
// }

// add(2, function(result){
//     add(result, function(result){
//         add(result, function(result){
//             console.log('finish');
//         })
//     })
// })

// 비동기 호출이 자주 일어나는 프로그램의 경우 '콜백 지옥'이 발생한다
// 함수의 매개변수로 넘겨지는 콜백 함수가 반복되어 코드의 들여쓰기 수준이
// 감당하기 힘들어질 정도로 깊어지는 현상
// promise를 사용하여 콜백지옥을 해결할 수 있다

