
// 함수를 반환하는 함수 

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter()); // 0 
console.log(counter()); // 1
console.log(counter()); // 2

// 변수값 갱신은 변수가 저장된 렉시컬 환경에서 이루어진다



//클로저


    function func(){
    let a = 0;

      return function(value){
        a = value + a;
       return a; 
    }
}
let test = func();
console.log(test(1)); // 1
console.log(test(1)); // 2
console.log(test(2)); // 4
console.log(func()(1)); // 1



let add;
let sub;

function func2(){
    let a = 0;

      add = function(value){
        a = value + a;
       return a; 
    }

    sub = function(value){
        a = a-value;
        return a;
    }
}

func2();


console.log(add(1)); // 1
console.log(add(1)); // 2
console.log(add(2)); // 4
console.log(sub(1)); // 3



// 가비지 컬렉션
// 함수 호출이 끝나면 함수에 대응하는 렉시컬 환경이 메모리에서 제거되고 
// 함수와 관련된 변수들은 이 때 모두 사라진다
// 따라서 함수 호출이 끝나면 관련 변수를 참조 할 수 없다
// 자바스크립트에서 모든 객체는 도달 가능한 상태일 때만 메모리에 유지된다

// 함수 호출이 끝나도 렉시컬 환경이 메모리에서 유지되는 이유:
// 호출이 끝난 후에도 여전히 도닳 가능한 중첩 함수가 있을 수 있는데 
// 이 충접함수의 [[Envirionment]]프로퍼티에 외부 렉시컬 환경에 대한
// 정보가 저장된다. - 도달 가능한 상태 

function f1() {
  let value = 123;

  return function() {
    console.log(vlaue);
  }
}

let g = f1();

//g.[[Envirionment]]에 f() 호출 시 만들어지는 
// 렉시컬 환경 정보가 저장된다.

// f())를 여러번 호출하고 그 결과를 어딘가에 저장하는 경우, 호출 시 만들어지는
// 각 렉시컬 환경 모두가 메모리에 유지된다. 

function f2() {
  let value  =Math.random();

  return function() {
    console.log(value);
  }
}
let arr = [f(), f(), f()];

//실행하면 3개의 렉시컬 환경이 만들어지는데, 각 렉시컬 환경은 메모리에서 삭제되지 않는다
//렉시컬 환경 객체는 도달할 수 없을 때 메모리에서 삭제된다

function f3() {
  let value = 123;

  return function() {
    console.log(value);
  }
}

// let g = f(); // g가 살아있는 동안엔 연관 렉시컬 환경도 메모리에 살아있다.
// g = null; // 도달 할 수 없는 상태가 되었으므로 메모리에서 삭제된다.

//중첩 함수가 메모리에서 삭제되고 난 후에야, 이를 감싸는 렉시컬환경과
// 그 안의 변수인 value 도 메모리에서 제거가 된다.
