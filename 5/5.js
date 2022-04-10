//클래스 get set

class Test{
    _age = 0;
    constructor(a){
        // this._age = 0;
        this.age = a;
    }

    set age(value){
        if(value<0){
            console.log('음수');
        }
        this._age = value;
    }

    get age(){
        return this._age;
    }
}
let newTest = new Test(3);
newTest.age = 5;
console.log(newTest.age);
