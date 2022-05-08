//프로포타입

//getter/ setter

// let obj = {
//     name : ' ',
//     get fullName(){ return `${this.name} 1` },
//     set fullName(value){this.name = value}
// }
// console.log(obj.fullName);
// obj.fullName = 'kim';
// console.log(obj.fullName);

// let obj2 = {
//     __proto__: obj, 
// }
// console.log(obj2.fullName);
// obj2.fullName = 'kim mk';
// console.log(obj2.fullName);
// console.log(obj2);
// console.log(obj);

// Object.setPrototypeOf(obj2, obj);
// console.log(obj2.__proto__);
// console.log(Object.getPrototypeOf(obj2));


// 프로토타입 상속
// 자바스크립트의 객체는 [[Prototype]] 이라는 숨김 프로퍼티를 갖는다
// 이 숨김 프로퍼티 값은 null 이거나 다른 객체에 대한 참조가 되는데 
// 다른 객체를 참조하는 경우 참조 대상을 프로포타입(prototype) 이라고한다.

// object에서 프로퍼티를 읽으려고 하는데 해당 프로퍼티가 없으면 자바스크립트는 
// 자동으로 프로토타입에서 프로퍼티를 찾는다.
// 이러한 동작 방식을 프로포타입 상속 이라고 한다

// prototype은 __proto__ 를 사용해 값을 설정할 수 있다.

// let animal = {
//     eats : '먹다'
// };
// let rabbit = {
//     jumps : '점프하다'
// };

// rabbit.__proto__ = animal; // animal이 rabbit의 프로퍼티가 되도록 설정

// console.log(rabbit.eats);
// console.log(rabbit.jumps);


// let animal = {
//     eats : '먹다',
//     walk() {
//         console.log('동물의 걷는다');
//     }
// }

// let rabbit = {
//     jumps : true,
//     __proto__ : animal
// };

// rabbit.walk(); // 동물이 걷는다.

//프로토타입 체인

// let animal = {
//     eats : '먹는다',
//     walk() {
//         console.log('동물이 걷는다');
//     }
// };

// let rabbit = {
//     jumps : '점프한다',
//     __proto__ : animal
// };

// let longEar = {
//     earLength : 10,
//     __proto__ : rabbit
// };

// longEar.walk(); // 동물이 걷는다  
// console.log(longEar.jumps); // 점프한다

// 프로토타입 체이닝의 제약사항
// 1. 순환 참조는 허용되지 않는다.
// 2._proto 의 값은 객체나 null만 가능하다.
// 3.객체엔 오직 하나의 [[Prototype]]만 있을 수 있다.


//프로토타입은 읽기 전용이다.
//프로토타입은 프로퍼티를 읽을 때만 사용한다.
//프로퍼티를 추가, 수정하거나 지우는 연산은 객체에 직접 해야 한다.

// let animal = {
//     eats : '먹다',
//     walk() {

//     }
// }

// let rabbit = {
//     __proto__ : animal
// };

// rabbit.walk = function() {
//     console.log('걷는다');
// };

// rabbit.walk();

// rabbit.walk()를 호출하면 프로토타입에 있는 메서드가 실행되지 않고, 
// 객체 rabbit에 직접 추가한 메서드가 실행된다.


// 접근자 프로퍼티
// 접근자 프로퍼티는 setter 함수를 사용해 프로퍼티에 값을 할당하므로 
// 접근자 프로퍼티에 값을 할당하면 객체에 프로퍼티가 추가되는게 아니라 setter함수가 호출된다.


// let user = {
//     firstName : 'mk',
//     lastName : 'kim',

//     set fullName(value){
//         [this.firstName , this.lastName] = value.split(' ');
//     },

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// let admin = {
//     __proto__ : user,

// };

// console.log(admin.fullName); // mk kim(getter 함수 호출)

// admin.fullName = 'ds lee'; // setter 함수 호출

// console.log(admin);
// console.log(admin.fullName); // ds lee(getter 함수 호출)

// console.log(user);
// console.log(user.fullName); // mk kim(getter 함수 호출)

// this는 프로포타입에 영향을 받지 않는다
// 메서드를 객체에서 호출했든 프로토타입에서 호출했든 상관없이 this는 언제나 . 앞의 객체이다
// admin.fullName으로 setter함수를 호출할 때, this는 user가 아닌 admin이다