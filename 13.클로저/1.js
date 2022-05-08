// 자바스크립트는 함수 지향 언어이다
// 함수를 동적으로 생성할 수 있고, 생성한 함수를 다른 함수에 인수로 넘길 수 있고,
// 생성된 곳이 아닌 곳에서 함수를 호출할 수도 있다

// 코드 블록 안에서 선언한 변수는 블록 안에서만 사용할 수 있다

{
  let message = 'test';

  console.log(message);
}
console.log(message);

// if, for , while 등에서도 마찬가지로 코드블록 안에서 선언한 변수는 
// 오직 블록 안에서만 접근 가능하다

if(true){
  let value = 'test';

  console.log(value); // test
}
 console.log(value); // error

for(let i = 0; i < 2; i++ ){
  console.log(i); // 0 1
}
 console.log(i); // error

i = 0;
while(i != 1){
  let j = 'test'
  console.log(j); // test
  i = 1;
}
console.log(j); // error
