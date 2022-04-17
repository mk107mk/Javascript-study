//promise

// let promise = function(value){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(value){
//                 resolve('해결 완료');
//             }else{
//                 reject('실패');
//             }
//         },1000);
//     });
// };

// promise(true)
// .then(function(text){
//     //성공시
//     console.log(text);
// }, function(error){
//     //실패시
//     console.log(error);
// })

// promise(true)
// .then(JSON.parse)
// .catch(function(){
//     console.log('체이닝 중간에 에러가!');
// })
// .then(function(text){
//     console.log(text);
// }, function(error){
//     console.log(error);
// })



///////////////////////////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//     //resolve('ok');
//     setTimeout(() => {
//         reject('error');
//     },1000);
// })

// console.log('시작');
// promise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log('끝');
// })

//콜백 함수

// const f1 = (callback) => {
//     setTimeout(function() {
//         console.log('1번 주문 완료');
//         callback();
//     }, 2000);
// };


// const f2 = (callback) => {
//     setTimeout(function() {
//         console.log('2번 주문 완료');
//         callback();
//     }, 2000);
// };


// const f3 = (callback) => {
//     setTimeout(function() {
//         console.log('3번 주문 완료');
//         callback();
//     }, 2000);
// };

// console.log('시작');
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log("끝");
//         })
//     })
// })


//promise 

// const f1 = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('1번 주문 완료');
//         }, 1000);
//     });
// };

// const f2 = (message) => {
//     console.log(message);
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             // resolve('2번 주문 완료');
//             reject('2번 주문 실패');
//         }, 1000)
//     })
// }

// const f3 = (message) => {
//     console.log(message);
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('3번 주문 완료');
//         }, 1000)
//     })
// }

// console.log('시작');
// f1()
// .then((resolve) => f2(resolve))
// .then((resolve) => f3(resolve))
// .then((resolve) => console.log(resolve))
// .catch(console.log)
// .finally(() => {
//     console.log('끝');
// });

//promise를 사용해 setTimeout과 동일 기능을 하는 함수 만들기

// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// delay(3000).then(() => console.log('3초후 실행'));

//////////////////////////////////////////////////////////////////

// Producer
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        // resolve('kim');
        reject('error');
    },2000)
})

// 프로미스를 만드는 순간 전달한 executor 라는 함수가 바로 실행된다.

// Consummers: then, catch, finally

promise.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});
// value : resolve, reject에 전달된 값