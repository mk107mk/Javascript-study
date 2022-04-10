// class Animal{
//     age = 0;
//     constructor(age){
//         this.age = age;
//     }
//     run(){
//         console.log('run');
//     }
//     printAge(){
//         console.log(age);
//     }
// }

// class Dog extends Animal{
//     name = '';
//     constructor(name, age){
//         super(age);
//         this.name = name;
//     }
//     jump(){
//         console.log('jump');
//     }
//     run(){
//         super.run();
//         console.log('run2');
//     }
// }

// let dog1 = new Dog('뭉이','10');
// dog1.run();





class Animal{
    age = 0;
    constructor(age){
        this.age = age;
    }
    run(){
        console.log('run');
    }
    printAge(){
        console.log(age);
    }
    setAge1(age){
        this.age = age;
        console.log(this);
    }
    setAge2 = (age) =>{
        this.age = age;
        console.log(this);
    }
}

class Dog extends Animal{
    name = '';
    constructor(name, age){
        super(age);
        this.name = name;
    }
    jump(){
        console.log('jump');
    }
    run(){
        super.run();
        console.log('run2');
    }
    getAge(){
        console.log(this.age);
    }
}

let dog1 = new Dog('뭉이','10');
// dog1.setAge1(7);
// dog1.setAge2(8);
// dog1.getAge();



const setAge1 = dog1.setAge1;
const setAge2 = dog1.setAge2;

// setAge1(10);
// dog1.getAge();
setAge2(20);
dog1.getAge();


