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


// class
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    run(){
        console.log(`${this.name}(${this.age}살)이/가 달린다`);
    }
    sleep(){
        console.log(`${this.name}(${this.age}살)이/가 잔다`);
    }
}

class Dog extends Animal {
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    jump(){
        console.log(`${this.name}(${this.age}살, ${this.color})이/가 점프한다`);
    }
}

class Cat extends Animal{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    scratch(){
        console.log(`${this.name}(${this.age}살, ${this.color})이/가 긁는다`);
    }
}

class Husky extends Dog {
    
    constructor(name, age, color, size){
        super(name, age, color);
        this.size = size;
    }
    pullSled(){
        console.log(`${this.color}, ${this.age}살, ${this.color}, ${this.size})이/가 썰매를 끈다`);
    }
}

let mong = new Dog('뭉이', 15);
mong.run();
mong.sleep();
mong.jump();

let yumi = new Cat('유미',20,'흰색');
yumi.run();
yumi.sleep();
yumi.scratch();

let husky = new Husky('허스키', 20 , '회색', '대형견',);
husky.run();
husky.sleep();
husky.jump();
husky.pullSled();

