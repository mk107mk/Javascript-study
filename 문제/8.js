// callback vs promise vs async-await
// 아래와 같이 1초 뒤에 callback을 호출하는 execute 함수가 있다.
// execute를 3번 호출하되 각 작업은 순차적으로 진행되어야 한다(finish가 1초 단위로 출력되어야함)

function execute(callback: () => void) {
    console.log('execute');
    setTimeout(() => {
        console.log('finish');
        callback();
    },1000);
}