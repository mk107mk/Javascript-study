// forEach, for in, for of

//forEach

// let arr = [1,2,3,4,5];
// arr.forEach((value,index,array)=>{
//     console.log(`${index} 번째 값 : ${value}`);
// })

// 0 번째 값 : 1
// 1 번째 값 : 2
// 2 번째 값 : 3
// 3 번째 값 : 4
// 4 번째 값 : 5


//for in

// let obj ={
//     name : 'kim',
//     age : 20,
//     gender : '남자'
// }

// for(let keys in obj){
//     console.log(keys);
// }


//for of

let arr = ['a','b','c','d'];

for(let value of arr){
    console.log(value);
}
//a
//b
//c
//d
