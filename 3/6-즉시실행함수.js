//즉시 실행 함수 표현식 (IIFE)

// 함수를 괄호로 둘러싸는 방식
(function(){
    console.log(1);
})();

// 전체를 괄호로 둘러싸는 방식
(function() {
  console.log(1);
}());

//표현식 앞에 NOT 비트 연산자 붙이기
!function(){
  console.log(1);
}();

//표현식 앞에 단항 덧셈 연산자 붙이기
+function(){
  console.log(1);
}();

//arrow function 이용하기
(() => {
    console.log(1);
})();


let value = 2;
(() => {
  console.log(value);
})(value);

//실행 context를 분리해서 메모리 누수를 방지