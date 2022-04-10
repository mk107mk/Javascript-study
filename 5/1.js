//프로포타입
//getter/ setter

let obj = {
    name : ' ',
    get fullName(){ return `${this.name} 1` },
    set fullName(value){this.name = value}
}
// console.log(obj.fullName);
// obj.fullName = 'kim';
// console.log(obj.fullName);

let obj2 = {
    __proto__: obj, 
}
console.log(obj2.fullName);
obj2.fullName = 'kim mk';
console.log(obj2.fullName);
console.log(obj2);
console.log(obj);

Object.setPrototypeOf(obj2, obj);
console.log(obj2.__proto__);
console.log(Object.getPrototypeOf(obj2));