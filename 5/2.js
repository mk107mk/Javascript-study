//프로포타입 연습

function Parent1(){
    this.test = 1;
}
let newParent = new Parent1();
console.log(newParent.test);

function Child(){
    this.test2 = 2;
    // this.__proto__ = newParent;
     this.__proto__ = new Parent1();
}

// Child.prototype = newParent;

let newChild = new Child();
let newChild2 = new Child();
console.log(newChild.test);
console.log(newChild2.test);

newParent.test = 2;

console.log(newChild.test);
newChild.test = 3;
console.log(newChild.test);
console.log(newChild2.test);
