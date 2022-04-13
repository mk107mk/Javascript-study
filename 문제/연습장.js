class Car {
    constructor(color){
        this.color = color;
        this.wheels =  4;
    }
    drive() {
        console.log(`drive... ${this.color}`);
    }
}

class Bmw extends Car {
    constructor(color) {
        super();
        this.color = color;
        this.navigation = 1;
    }
    park(){
        console.log('park...');
    }
    drive() {
        super.drive();
        console.log('asda');
    }
}

const z4 = new Bmw('blue');
z4.drive();
console.log(z4.color);


