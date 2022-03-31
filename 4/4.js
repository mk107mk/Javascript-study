function User() {
    console.log(new.target);
}

let obj = User();

let newobj = new User();

console.log(obj);
console.log(newobj);
console.log(newobj.__proto__);
console.log({}.__proto__);