// async와 await

// async 함수
function func(){
    return new Promise(function(resolve,reject){
        resolve('해결완료');
    })
}
// function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환한다
// 프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스로 값을 감싸
// 이행된 프라미스가 반환되도록 한다.
func().then(function(value){
    console.log(value);
})
func().then(console.log);

async function asyncFunc() {
    return '해결완료';
}

asyncFunc().then(function(value){
    console.log(value);
});

asyncFunc().then(console.log);

async function asyncResolve() {
    return Promise.resolve('해결 완료');
}

asyncResolve().then(function(value){
    console.log(value);
});

asyncResolve().then(console.log);