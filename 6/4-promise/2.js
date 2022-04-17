//////////////////////////////////////////////////////////////////

// Producer
// const promise = new Promise((resolve, reject) => {
//     console.log('doing something...');
//     setTimeout(() => {
//         // resolve('kim');
//         reject('error');
//     },2000)
// })

// 프로미스를 만드는 순간 전달한 executor 라는 함수가 바로 실행된다.

// Consummers: then, catch, finally

// promise.then((value) => {
//     console.log(value);
// })
// .catch(error => {
//     console.log(error);
// })
// .finally(() => {
//     console.log('finally');
// });
// value : resolve, reject에 전달된 값

// const fetchNumber = new Promise((resolve,reject) => {
//     setTimeout(() => resolve(1), 1000)
// });

// fetchNumber
//     .then(num => num * 2)
//     .then(num => num * 3)
//     .then(num => {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => resolve(num - 1), 1000);
//         })
//     })
//     .then(num => console.log(num));

// const getHen = () => 
//     new Promise((resolve,reject) => {
//         setTimeout(() => resolve('닭'), 1000);
//     });



// const getEgg = (hen) => 
//     new Promise((resolve,reject) => {
//         setTimeout(() => resolve(`${hen} => 달걀`), 1000);
//     });



// const cook = (egg) => 
//     new Promise((resolve,reject) => {
//         setTimeout(() => resolve(`${egg} => 프라이`), 1000);
//     });




// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));

const func1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('test1');
        },1000);
    });
};

const func2 = () => 
     new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('test2');
        },1000);
    });



func1().then(console.log);
func2().then(console.log);
