//자바스크립트에서 함수는 값으로 취급된다.
//함수의 자료형은 객체이다.
//함수를 호출할 수 있을 뿐 아니라 객체처럼 함수에 프로퍼티를 추가, 제거하거나
//참조를 통해 전달 할 수 있다.


//name 프로퍼티

function test(){
    console.log('test');

}
console.log(test.name); // test

let test2 = function(){
    console.log('test');
}
console.log(test2.name); // test2

function f(test3 = function() {}){
    console.log(test3.name);
}
f(); // test3


//객체의 메서드 이름도 name 프로퍼티를 이용해 가져올 수 있다.

let user = {
    sayHi(){
        console.log('hi');
    },
    sayBye : function(){
        console.log('bye');
    }
}

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye


//객체 메서드 이름은 함수처럼 자동 할당이 되지 않는다.

let arr = [function() {
    console.log('test');
}]
console.log(arr[0].name); // 빈 문자열 


//length 프로퍼티 - 함수 매개변수의 개수를 나타낸다.

function func1(a) {}
function func2(a,b) {}
function func3(a,b,...rest) {}

console.log(func1.length); // 1
console.log(func2.length); // 2
console.log(func3.length); // 2


//커스텀 프로퍼티

function func() {
    console.log('hi');

    func.count++;
}
func.count = 0;

func();
func();
func();

console.log(`호출 횟수: ${func.count}회`); // 호출 횟수: 3회



//클로저는 함수 프로퍼티로 대체 할 수 있다.

function makeCounter() {

    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let runCounter = makeCounter();
console.log( runCounter() ); // 0
console.log( runCounter() ); // 1
console.log( runCounter() ); // 2



//함수 프로퍼티와 클로저의 차이

//클로저를 사용한 경우 외부 코드에서 count에 접근할 수 없다. 오직 중첩함수 내에서만 수정가능

function makeCounter1() {
    
    let count = 0;

    function counter() {
        return count;
    };
    
    return counter;
}
let runCounter1 = makeCounter1();

    count = 10;
    console.log(runCounter1()); // 0

//함수 프로퍼티를 사용한 경우 count를 함수에 바인딩시킨 경우엔 외부에서 값을 수정할 수 있다.

function makeCounter2() {

    function counter(){
        return counter.count++;
    }
    counter.count = 0;

    return counter;
}
    let runCounter2 = makeCounter2();

    runCounter2.count = 10;

    console.log(runCounter2()); // 10



//기명 함수 표현식 

let test = function test(value){
    console.log(value);
};

//함수 표현식에 이름을 붙인 형태 

//1. 이름을 사용해 함수 표현식 내부에서 자기 자신을 참조할 수 있다.
//2. 기명 함수 표현식 외부에선 그 이름을 사용할 수 없다.

let test = function func(value){
    if(value){
        console.log(value);
    }else{
        func('not value');
    }
};

test(1); // 1
test(); // not value;
// func(1); //error



//중첩함수를 호출할 때 기명함수 표현식을 사용하는 이유
// 일반적인 중첩함수는 외부 코드에 의해 함수가 변경될 수 있다는 문제가 있다

let test = function(value){
    if(value){
        console.log(value);
    }else{
        test('not value');
    }
};

newTest = test;
test = null;
// newTest(); // error

// test를 자신의 외부 렉시컬 환경에서 가지고 오기 때문에 발생한다. 
// 지역 렉시컬 환경엔 test가 없기 때문에 외부 렉시컬 환경에서 
// test를 찾는데 , 함수 호출 시점에 회부 렉시컬 환경의 test엔 null이
// 저장되어 있기 때문에 에러가 발생한다

let test = function func(value){
    if(value){
        console.log(value);
    }else{
        func('not value');
    }
};

let newTest = test;
test = null;

newTest(); // not value

//기명 함수 표현식을 이용하면 외부 변수의 변경과 관계없이 func이라는 내부 함수 이름을
//사용해 언제든 함수표현식 내부에서 자기 자신을 호출할 수 있다
