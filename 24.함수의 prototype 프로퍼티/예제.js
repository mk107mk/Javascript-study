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
        console.log(`${this.name}(${this.age}) 이 달린다.`);
    }
    this.sleep = function(){
        console.log(`${this.name}(${this.age}) 이 잔다.`);
    }
    
}

function Dog(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;
    this.jump = function(){
        console.log(`${this.name}(${this.age},${this.color}) 이 점프한다.`);
    }
    
}

function Cat(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;
    this.scratch = function(){
        console.log(`${this.name}(${this.age},${this.color}) 이 긁는다.`);
    }

}

function Husky(name,age,color,size){
    this.name= name;
    this.age = age;
    this.color = color;
    this.size = size;
    this.fullSled = function(){
        console.log(`${this.name}(${this.age},${this.color},${this.size}) 이 썰매를끈다.`);
    }

}
let newAnimal = new Animal;
Dog.prototype = newAnimal;
Cat.prototype = new Animal;

let newDog = new Dog;
Husky.prototype = newDog;

let mong = new Dog('뭉',20,'갈색');
let yumi = new Cat('유미',30,'흰색');
let husky = new Husky('허스키',40,'회색','대형견');

mong.jump();
yumi.scratch();
husky.jump();
husky.fullSled();