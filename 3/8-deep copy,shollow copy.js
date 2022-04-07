//객체 복사 shallow clone , deep clone
let obj = {
    a : 1,
    b : true,
    c : [1,2,3],
    d : {e : 2}
}

// let obj2 = obj;
let obj2 = {...obj}

console.log(obj2);
obj2.d.e = 1;
obj2.a = 2;

console.log(obj.d.e);
console.log(obj.a);

//deep copy

let obj3 = {...obj , c : [...obj.c] , d : {...obj.d}};
