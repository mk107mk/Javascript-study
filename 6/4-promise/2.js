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

// const first = () => 
//     new Promise((resolve,reject) => {
//         setTimeout(() => resolve('first'), 1000);
//     });

// const second = (value) => 
//     new Promise((resolve,reject) => {
//         setTimeout(() => resolve(`${value} => second`), 1000);
//     });

// const third = (value) => 
//     new Promise((resolve,reject) => {
//         setTimeout(() => resolve(`${value} => third`), 1000);
//     });

// first()
//     .then(value => second(value))
//     .then(value => third(value))
//     .then(value => console.log(value));


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

const func3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('test3');
        reject('error');
    },1000)
})

const func4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('test4');
       // reject('error');
    },1000)
})

// func1().then(console.log);
// func2().then(console.log);

func3.then(console.log, console.log).catch(() => 123).then(val => {
        console.log(val, '----');
    });

// func4.then(value => {
//     console.log(value);
// })
// func4.then(function(value){
//     console.log(value);
// })

