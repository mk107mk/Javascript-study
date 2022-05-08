//옵셔널 체이닝

// let obj = {
//     address : {
//         street : 'str'
//     }
// }

// let obj2 = {

// }

// let obj3 = {
//     address : {

//     }
// }

// let obj4 = null

// let obj5 = {
//     'address a' : {

//     }
// }

// let obj6 = [1, {street : 'str'}]

// console.log(obj2.address?.street);
// console.log(obj3.address.street);
// console.log(obj4?.address.street);
// console.log(obj5?.['address a']?.street);
// console.log(obj6[0],obj6[1]?.street);



// let user = {};
// console.log(user?.address?.street); // undefined
// //?. 앞의 평가 대상이 undefined나 null 이면 평가를 멈추고 undefined를 반환

// let user = null;

// console.log(user?.address); // undefined
// console.log(user?.address.street); // undefined

// let user = {};
// console.log(user?.address.street); // error

// let user = {
//     address : {}
// }

// console.log(user?.address.street); // undefined


//?.는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘다. 
//이런 평가 방법을 단락 평가 라고 부른다.
//그렇기 때문에 함수 호출을 비롯한 ?. 오른쪽에 있는 부가 동작은 ?. 의 평가가 멈췄을 때 더는 일어나지 않는다.

// let user1 = null;
// let x = 0;
// user1?.sayHi(x++);

// let user2 = {sayHi(z){z++}}
// let y = 0;
// user2?.sayHi(y++);

// let user3 = {};
// let z = 0; 
// user3?.sayHi(z++);


// console.log(x); // 0
// console.log(y); // 1
// console.log(z); // error


// let user1 = {
//     admin(){
//         console.log('관리자 계정입니다.')
//     }
// }

// let user2 = {};

// user1.admin?.(); // 관리자 계정입니다.
// user2.admin?.();

// let user1 = {
//     firstName : 'kim'
// };

// let user2 = null;

// let key = 'firstName';

// console.log(user1?.[key]); // 'kim'
// console.log(user2?.[key]); // undefined
// console.log(user2[key]); // error


// let user = {
//     firstName : 'kim'
// }
// console.log(user?.firstName); // 'kim'
// delete user?.firstName;
// console.log(user?.firstName); // undefined

// user?.name = 'Lee'; // error