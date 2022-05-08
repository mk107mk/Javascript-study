//객체 지향 프로그래밍 
// 1.단일 책임의 원칙: SRP

class UserManager{
    create(){

    }
    read(){

    }
    update(){

    }
    delete(){

    }
}

class UserRegister{
    
    create(){

    }
}

class UserUpdater{
    update(){

    }
}
//응집도 : 관련된 로직은 최대한 한 곳에 몰아넣는다
//결합도 : 객체 간에 의존하는 인터페이스 수, 결합을 나타낸다

// 2.개방 폐쇄의 원칙: OCP

// interface Cafe{
//     makeCoffee : () => String
// }

// class SimpleCafe implements Cafe {
//     constructor(name){
//         this.name = name;
//     }
//     makeCoffee(){
//         return name + 'coffee';
//     }
// }

// class RandomCafe implements Cafe{
//     makeCoffee(){
//         return '랜덤커피';
//     }
// }

// let arr =[new SimpleCafe('아메리카노'), new SimpleCafe('녹차'), new RandomCafe()];

// arr.forEach(function(cafe){
//     cafe.makeCoffee();
// })


// 3.리스코프 지환 원칙 , 다형성, 치환성

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

function runAndsleep(animal){
    animal.run();
    animal.sleep();
}

let newAnimal = new Animal('이름',20);
runAndsleep(newAnimal);

let newDog = new Dog('강아지', 10, '흰색');
runAndsleep(newDog);

// 4.인터페이스 분리의 원칙 ISP
// 필요없는 인터페이스는 의존하지 않는다

class UserManager{
    create(){

    }
    read(){

    }
    update(){

    }
    delete(){

    }
}


// 5.의존성 역전 원칙


// 다형성 : 부모를 상속받은 자식은 부모를 치환할 수 있다