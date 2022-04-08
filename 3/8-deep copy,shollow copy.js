//객체 복사 shallow clone , deep clone

// 얕은 복사는 참조(주소) 값의 복사를 나탄낸다

// let obj = { value : 1 }
// let newObj = obj;

// newObj.value = 2;

// console.log(obj.value); // 2
// console.log(obj === newObj); // true

//obj 객체를 newObj객체에 할당하였고 이를 참조 할당이라 부른다
//객체의 주소값이 복사되었기 때문에 newObj의 value 값을 변경했을 때
// obj의 value 값도 변경된다.

// let obj = {
//     a : 1,
//     b : true,
//     c : [1,2,3],
//     d : {e : 2}
// }

// // let obj2 = obj;
// let obj2 = {...obj}

// console.log(obj);
// console.log(obj2);
// obj2.d.e = 7;
// obj2.a = 4;

// console.log(obj.d.e);
// console.log(obj.a);

// //deep copy

// let obj3 = {...obj , c : [...obj.c] , d : {...obj.d}};



//깊은 복사는 값 자체의 복사를 나타낸다

let obj = { a: 1, b: 2 }
let newObj = {...obj};

console.log(obj);
console.log(newObj);

newObj.a = 7;
console.log(obj.a); // 1
console.log(newObj.a); // 7
