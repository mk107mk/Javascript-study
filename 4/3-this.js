
//메서드와 this

//메서드 - 객체에 프로퍼티에 할당된 함수


// let user = {
//     name: 'John',
//     age: 30
// };

// user.sayHi = function(){
//     console.log('안녕하세요!');
// };

// user.sayHi(); // 안녕하세요

// user = {
//     sayHi: function(){
//         console.log('hi');
//     }
// };

// user2 = {
//     sayHi() {
//         console.log('hi2');
//     }
// };
// user.sayHi();
// user2.sayHi();

// let user = {
//     name: 'john',
//     age : 20,

//     sayHi() {
//         console.log(user.name);
//     }
// };



// let admin = user;
// user = null;

// admin.sayHi();


//this 값은 런타임에 결정된다. 컨텍스트에 따라 달라진다.
//동일한 함수라도 다른 객체에서 호출했다면 this가 참조하는 값이 달라진다

// let user = {name: 'kim'};
// let admin = {name : 'Lee'};

// function sayHi(){
//     console.log(this.name);
// }

// user.func = sayHi;
// user.func();


// 객체 없이 호출

// function test(){
//     console.log(this);
// }

// user.func();
//이런 코드를 엄격모드에서 실행하면, this엔 undefined가 할당된다 
//this.name 으로 name 에 접근하려고 하면 에러가 발생한다

//엄격 모드가 아닐 때는 this 가 전역 객채를 참조한다

//화살표 함수는 일반 함수와는 달리 고유한 this를 가지지 않는다 
//화살표 함수에서 this를 참조하면 , 화살표 함수가 아닌 평범한 외부 함수에서 this 값을 가져온다.

let user = {
    firstName: 'use this',
    sayHi() {
        function func(){ console.log(this.firstName)};
        func();
    }
};

user.sayHi(); // undefined

let user2 = {
    firstName: 'use this',
    sayHi() {
        a = 1;
        function func(){ console.log(this.a)};
        func();
    }
};

user2.sayHi(); // 1

let user3 = {
    firstName: 'use user',
    sayHi(){
        function func(){ console.log(user3.firstName)};
        func();
    }
}

user3.sayHi(); // use user

let user4 = {
    firstName : 'use arrow',
    sayHi(){
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user4.sayHi(); // use arrow


function test(){
    this.a = 1;
}

let test1 = new test();

console.log(test1.a);