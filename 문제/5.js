//prototype, class
// 아래 스펙에 맞게 prototype, class로 작성해보세요

// Animal
//  - name (프로퍼티)
//  - age  (프로퍼티)
//  - run() (함수)
//  - sleep() (함수)

// Dog extends Animal
//  - color (프로퍼티)
//  - jump() (함수)

// Cat extends Animal
//  - color (프로퍼티)
//  - scratch() (함수)

// Husky extends Dog
//  - size (프로퍼티)
//  - pullSled() (함수)

// prototype
function Animal(name, age){
    this.name = name;
    this.age = age;

    this.run = function(){
        console.log(`${this.name}(${this.age}살)이/가 달린다`);
    };
    this.sleep = function(){
        console.log(`${this.name}(${this.age}살)이/가 잔다`);
    }
}

function Dog(name, age, color) {
    this.color = color;
    this.name = name;
    this.age = age;

    this.jump = function() {
        console.log(`${this.name}(${this.age}살, ${this.color})이/가 점프한다`);
    }
}

function Cat(name, age, color) {
    this.color = color;
    this.name = name;
    this.age = age;

    this.scratch = function() {
        console.log(`${this.name}(${this.age}살, ${this.color})이/가 긁는다`);
    }
}

function Husky(name, age, color, size){
    this.name = name;
    this.age = age;
    this.color = color;
    this.size = size;

    this.pullSled = function() {
        console.log(`${this.color}, ${this.age}살, ${this.color}, ${this.size})이/가 썰매를 끈다`);
    }
}
let newAnimal = new Animal;
Dog.prototype = newAnimal;
Cat.prototype = newAnimal;
let malti = new Dog('뭉', 20, '흰색');
let yumi = new Cat('유미', 15, '갈색');

malti.run();
malti.jump();

yumi.run();
yumi.scratch();

let husky = new Dog;
Husky.prototype = husky;

let maru = new Husky('허스키', 30, '회색', '대형견');

maru.run();
maru.jump();
maru.pullSled();
