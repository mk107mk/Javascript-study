
// 자바스크립트는 함수 지향 언어이다
// 함수를 동적으로 생성할 수 있고, 생성한 함수를 다른 함수에 인수로 넘길 수 있고,
// 생성된 곳이 아닌 곳에서 함수를 호출할 수도 있다

//코드 블록 안에서 선언한 변수는 블록 안에서만 사용할 수 있다

// {
//   let message = 'test';

//   console.log(message);
// }
// console.log(message);

// if, for , while 등에서도 마찬가지로 코드블록 안에서 선언한 변수는 
// 오직 블록 안에서만 접근 가능하다

// if(true){
//   let value = 'test';

//   console.log(value); // test
// }
//  console.log(value); // error

// for(let i = 0; i < 2; i++ ){
//   console.log(i); // 0 1
// }
//  console.log(i); // error

// i = 0;
// while(i != 1){
//   let j = 'test'
//   console.log(j); // test
//   i = 1;
// }
// console.log(j); // error


// 중첩 함수 
// 함수 내부에서 선언한 함수

// function name(firstName, lastName){

//   function fullName(){
//     return firstName + ' ' + lastName;
//   }
  
//   console.log('hello' + ' ' +  fullName());

// }
// name('mk', 'kim');  // 'hello mk kim'


// 중첩함수를 이용한 난수생성기

// function randNum(){
//   let number = 0;

//   return function(){
//     number = Math.round(Math.random() * 10);
//     console.log(number);
//   };
// }
// let getNum = randNum();
// getNum();


// 자바 스크립트에선 실행 중인 함수, 코드 블록, 스크립트 전체는 
// 렉시컬 환경이라는 내부 숨김 연관 객체를 갖는다
// 렉시컬 환경은 두 부분으로 구성된다.
// 1. 환경레코드 - 모든 지역 변수를 프로퍼티로 저장하고 있는 객체
// 2. 외부 렉시컬환경 - 외부 코드와 연관되어있다, 
//    현재 렉시컬 환경의 부모 렉시컬 환경,
//    환경레코드가 외부렉시컬 환경을 참조한다.

// 렉시컬 환경이 하나만 존재하는 경우

// let phrase = 'hello';
// console.log(phrase);

// 스크립트 전체와 관련된 렉시컬 환경은 전역 레시컬 환경이라고 한다

//phrase : 'hello' 변수가 저장되는 환경 레코드 
// 외부 렉시컬 환경을 참조한다
// 외부 렉시컬 환경 : 전역 레시컬환경 = null


// 내부와 외부 레시컬 환경


// 함수를 호춣에 실행하면 새로운 렉시컬 환경이 만들어진다
// 이 렉시컬 환경엔 함수 호출시 넘겨받은 매개변수와 함수의 지역변수가 저장된다

// 함수가 호출 중인 동안엔 호출 중인 함수를 위한 내부 렉시컬 환경과 
// 내부 렉시컬 환경이 가리키는 외부 렉시컬 환경을 갖는다
// 내부 렉시컬 환경은 외부 렉시컬 환경에 대한 참조를 갖는다.
// 코드에서 변수에 접근할 때, 먼저 내부 렉시컬 환경을 검색 범위로 잡는다
// 내부 렉시컬 환경에서 원하는 변수를 찾지 못하면 검색 범위를 내부 렉시컬 환경이 
// 참조하는 외부 렉시컬 환경으로 확장한다
// 전역 렉시컬 환경에 도달할 때까지 변수를 찾지 모하면 엄격 모드에선 에러가 발생

// let phrase = 'hello';

// function func(name){
//   console.log(`${phrase} , ${name}`);
// }

// func('kim'); // hello , kim

//렉시컬 환경  : name: 'kim' -> func : function , phrase : 'hello' -> null

// func('kim) 을 호출하면 새로운 렉시컬 환경이 만들어진다
// 함수 func 내부의 console.log 에서 변수 name에 접근할 때, 
// 먼저 내부 렉시컬 환경을 살펴본다.
// 내부 렉시컬 환경에 name을 찾을 수 있다.
// console.log에서 변수 phrase에 접근하려는데, phrase 에 상응하는 
// 프로퍼티가 내부 렉시컬 환경에 없기 때문에 검색 범위가 외부 렉시컬 환경으로 확장된다

// 외부 렉시컬 환경애서 phrase를 찾을 수 있다.



// 함수를 반환하는 함수 

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// console.log(counter()); // 0 
// console.log(counter()); // 1
// console.log(counter()); // 2

// 변수값 갱신은 변수가 저장된 렉시컬 환경에서 이루어진다



//클로저


//     function func(){
//     let a = 0;

//       return function(value){
//         a = value + a;
//        return a; 
//     }
// }
// let test = func();
// console.log(test(1)); // 1
// console.log(test(1)); // 2
// console.log(test(2)); // 4
// console.log(func()(1)); // 1



// let add;
// let sub;

// function func2(){
//     let a = 0;

//       add = function(value){
//         a = value + a;
//        return a; 
//     }

//     sub = function(value){
//         a = a-value;
//         return a;
//     }
// }

// func2();


// console.log(add(1)); // 1
// console.log(add(1)); // 2
// console.log(add(2)); // 4
// console.log(sub(1)); // 3



// 가비지 컬렉션
// 함수 호출이 끝나면 함수에 대응하는 렉시컬 환경이 메모리에서 제거되고 
// 함수와 관련된 변수들은 이 때 모두 사라진다
// 따라서 함수 호출이 끝나면 관련 변수를 참조 할 수 없다
// 자바스크립트에서 모든 객체는 도달 가능한 상태일 때만 메모리에 유지된다

// 함수 호출이 끝나도 렉시컬 환경이 메모리에서 유지되는 이유:
// 호출이 끝난 후에도 여전히 도닳 가능한 중첩 함수가 있을 수 있는데 
// 이 충접함수의 [[Envirionment]]프로퍼티에 외부 렉시컬 환경에 대한
// 정보가 저장된다. - 도달 가능한 상태 

// function f() {
//   let value = 123;

//   return function() {
//     console.log(vlaue);
//   }
// }

// let g = f();

//g.[[Envirionment]]에 f() 호출 시 만들어지는 
// 렉시컬 환경 정보가 저장된다.

// f())를 여러번 호출하고 그 결과를 어딘가에 저장하는 경우, 호출 시 만들어지는
// 각 렉시컬 환경 모두가 메모리에 유지된다. 

// function f() {
//   let value  =Math.random();

//   return function() {
//     console.log(value);
//   }
// }
// let arr = [f(), f(), f()];

//실행하면 3개의 렉시컬 환경이 만들어지는데, 각 렉시컬 환경은 메모리에서 삭제되지 않는다
//렉시컬 환경 객체는 도달할 수 없을 때 메모리에서 삭제된다

// function f() {
//   let value = 123;

//   return function() {
//     console.log(value);
//   }
// }

// let g = f(); // g가 살아있는 동안엔 연관 렉시컬 환경도 메모리에 살아있다.
// g = null; // 도달 할 수 없는 상태가 되었으므로 메모리에서 삭제된다.

//중첩 함수가 메모리에서 삭제되고 난 후에야, 이를 감싸는 렉시컬환경과
// 그 안의 변수인 value 도 메모리에서 제거가 된다.
