class Animal{ 
    _name = '';
    constructor(name = '동물'){
    
        this.name = name;
    }
    set name(value){
        this._name = value;
    }
    get name() {
        return this._name;
        }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }
}

let mong = new Dog('강아지');
console.log(mong.name);


let yumi = new Cat();
console.log(yumi.name);
yumi.name = '고양이';
console.log(yumi.name);


// function Animal(name){
//     this.name = '동물';
//     console.log(this);
//     this.setName = function(value) {
//         this.name = value;
//         return this.name;
//     }

//     this.getName = function(){
//         console.log(this.name);
//         console.log(this);
//     }
// };

// function Dog(name){
//     this.name = name;
// }

// let newAni = new Animal();
// Dog.prototype = newAni;

// let newDog = new Dog();
// newDog.setName('강아지');
// newDog.getName();


