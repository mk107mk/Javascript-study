//클래스
//클래스에 정의된 메서드는 for in으로 안나온다

class Test{
    constructor(a){
    this.a = a;
    this.b = 1;
    }
    sayHi() {
        console.log(this.a);
    }
}
let newTest = new Test();
for(let value in newTest){
    console.log(value);
}

function Test2(){
    this.a = 1;
    this.sayHi = function(){
        console.log(this.a);
    }
}

let newTest2 = new Test2();
for(let value in newTest2){
    console.log(value);
}