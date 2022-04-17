// callback vs promise vs async-await
// 아래와 같이 1초 뒤에 callback을 호출하는 execute 함수가 있다.
// execute를 3번 호출하되 각 작업은 순차적으로 진행되어야 한다(finish가 1초 단위로 출력되어야함)

//callback

// function execute(callback) {
//     console.log('execute');
//     setTimeout(() => {
//         console.log('finish');
//         callback();
//     },1000);
// }

// execute(function(){
//     console.log('first callback!!');
//     execute(function(){
//         console.log('second callback!!');
//         execute(function(){
//             console.log('third callback!!');
//         })
//     })
// }) 

//promise

// function execute(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('finish');
//             resolve();
//         },1000)
//     })
// }
// execute()
// .then(function(){
//     execute()
//     .then(function(){
//         execute()
//     })
// })


//async await



