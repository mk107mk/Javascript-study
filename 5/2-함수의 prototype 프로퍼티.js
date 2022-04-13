//함수의 prototype 프로퍼티

// 생성자 함수의(F)의 프로토타입을 의미하는 F.prototype에서
// 'prototype'은 F에 정의된 일반 프로퍼티이다

// let animal = {
//     eats: true
// };

// function Rabbit(name){
//     this.name = name;
// }

// Rabbit.prototype = animal;
// // new Rabbit을 호출해 만든 새로운 객체의 [[Prototype]]을 animal로 설정한다.
// let rabbit = new Rabbit('흰 토끼');
// console.log(rabbit.eats);

// F.prototype은 new F를 호출할 때만 사용된다.
// F.prototype 프로퍼티는 new F 를 호출할 때 만들어지는 
// 새로운 객체의 [[Prototype]]을 할당해준다
// new Rabbit 으로 만들어진 새로운 객체의 [[Prototype]]이
// animal이기 때문에 rabbit의 [[Prototype]]인 animal이
// Rabbit의 prototype에 할당된다.

// 개발자가 특별히 할당하지 않아도 모든 함수는 기본적으로 'prototype' 프로퍼티를 갖는다
// 디폴트 prototype은 constructor 프로퍼티 하나만 있는 객체를 가리킨다
// constructor 프로퍼티는 자기 자신을 가리킨다

// function Rabbit() {

// }

// console.log(Rabbit.prototype.constructor); //[Function: Rabbit]

// // new Rabbit을 실행해 만든 객체 모두에서 [[Prototype]]을 거쳐
// // constructor 프로퍼티를 사용할 수 있다.
// let rabbit = new Rabbit(); // {constructor : Rabbit}을 상속받음
// console.log(rabbit.constructor); //[Function: Rabbit]



// 함수에 기본적으로 설정되는 'prototype' 프로퍼티 값을 다른 객체로 바꾸는 경우 
// new 를 사용해 객체를 만들어도 객체에 constructor가 없을 수 있다

// function Rabbit() {}
//     Rabbit.prototype = {
//         jumps:true
//     };
    
//     let rabbit = new Rabbit;
//     console.log(rabbit.constructor === Rabbit); // false


// constructor의 기본 성질을 제대로 활용하기 위해 'prototype'에 
// 뭔가를 하고 싶을 때 'prototype' 전체를 덮어쓰지 말고
// 디폴트 'prototype' 에 원하는 프로퍼티를 추가, 제거 해야한다.

// function Rabbit() {}

// Rabbit.prototype.jumps = true;
// let rabbit = new Rabbit;
// console.log(rabbit.constructor === Rabbit); //  true

//또는 constructor 프로퍼티를 수동으로 만들어줘야한다

function Rabbit() {}
Rabbit.prototype = {
    jumps : true,
    constructor : Rabbit
};
let rabbit = new Rabbit;
console.log(rabbit.constructor === Rabbit); // true







///////////////////////////////////////////////

//프로포타입 연습

// function Parent1(){
//     this.test = 1;
// }
// let newParent = new Parent1();
// console.log(newParent.test);

// function Child(){
//     this.test2 = 2;
//     // this.__proto__ = newParent;
//      this.__proto__ = new Parent1();
// }

// // Child.prototype = newParent;

// let newChild = new Child();
// let newChild2 = new Child();
// console.log(newChild.test);
// console.log(newChild2.test);

// newParent.test = 2;

// console.log(newChild.test);
// newChild.test = 3;
// console.log(newChild.test);
// console.log(newChild2.test);
