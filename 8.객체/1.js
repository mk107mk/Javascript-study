let obj ={
    name : 'kim',
    age : 20
}
obj.name = 'Lee';
console.log(`${obj.name} : ${obj.age}` );
kim : 20

let key = 'name';
console.log(obj.key);
console.log(obj[key]);

delete obj.name;
console.log(obj); //{age : 20}

key = 'name';
let obj = {
    [key] : 'kim',
}
console.log(obj.name);
console.log(obj.age);

let obj2 ={}

console.log(key in obj);
console.log(key in obj2);
