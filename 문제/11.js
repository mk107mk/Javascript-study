// callback vs promise vs async-await
// 아래와 같이 1초 뒤에 onSuccess 또는 onError를 호출하는 execute함수가 있다
// execute를 3번 호출하되 각 작업은 순차적으로 진행되어야 한다
// (success 혹은 error가 1초 단위로 출력되어야 함)
// onError가 발생하더라도 남은 작업은 원활하게 진행되어야 한다
// 위 요구사항에 맞춰 callback, promise, async-await 를 사용하여 구현
// 힌트) catch, try-catch


// callback

// function execute(onSuccess, onError) {
// 	console.log('execute');
// 	setTimeout(() => {
//         const randNum = Math.floor(Math.random() * 100);
// 		// 랜덤 값이 짝수일 경우
// 		if(randNum % 2 === 0) {
// 			console.log(`${randNum} success`);
// 			onSuccess();
// 		}else {
// 			console.log(`${randNum} error`);
// 			onError();
// 		}
// 	}, 1000);
// }

// execute(function(){
//     execute(function(){
//         execute(function(){

//         }, function(){

//         })
//     }, function(){
//         execute(function(){

//         }, function(){

//         })
//     })
// }, function(){
//     execute(function(){
//         execute(function(){

//         }, function(){

//         })
//     }, function(){
//         execute(function(){

//         }, function(){

//         })
//     })
// })


// promise

// function execute() {
//     return new Promise(function (onSuccess, onError) {
//         console.log('execute');
//         setTimeout(() => {
//             const randNum = Math.floor(Math.random() * 100);
//             // 랜덤 값이 짝수일 경우
//             if (randNum % 2 === 0) {
//                 console.log(`${randNum} success`);
//                 onSuccess();
//             } else {
//                 console.log(`${randNum} error`);
//                 onError();
//             }
//         }, 1000);
//     });
// }

// execute()
// .catch(function(){
//     console.log('에러잡힘');
// })
//     .then(function () {
//         return execute()
//         .catch(function(){
//             console.log('에러잡힘');
//         });
//     })
//     .then(function () {
//         return execute();
//     })
//     .then(function () {

//     })
//     .catch(function () {

//     })


//      execute()
//     .catch(function(){
//         console.log('에러잡힘');
//     }).then(function () {
//         return execute();
//     })

// async-await

function execute() {
    return new Promise(function (onSuccess, onError) {
        console.log('execute');
        setTimeout(() => {
            const randNum = Math.floor(Math.random() * 100);
            // 랜덤 값이 짝수일 경우
            if (randNum % 2 === 0) {
                console.log(`${randNum} success`);
                onSuccess();
            } else {
                onError(`${randNum} error`);
            }
        }, 1000);
    });
}


async function aa() {
    try {
        await execute();
    } catch (e) {
        console.log(e);
    }

    try {
        await execute();
    } catch (e) {
        console.log(e);
    }

    try {
        await execute();
    } catch (e) {
        console.log(e);
    }

}
aa();

