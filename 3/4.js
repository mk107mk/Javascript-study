//즉시 실행 함수

(function(){
    console.log(1);
})();

(() => {
    console.log(1);
})();


let value1 = 2;
((value) => {
  console.log(value);
})(value1);

//실행 context를 분리해서 메모리 누수를 방지