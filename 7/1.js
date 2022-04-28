// event roop - 면접중요
// 이벤트 버블링, 캡쳐링 - 면접중요
console.log('fisrt');
setTimeout(function cb(){
    console.log('second')
},0);
wait3Second();
console.log('third');

function wait3Second(){
    let start =  Date.now(), now = start;
    while(now - start < 3 * 1000){
        now = Date.now();
    }
}