// spread operator를 사용한 배열 복사
let arr1 = [1, 2, 3];
let arrCopy1 = arr1;

arrCopy1[0] = 4;
console.log(arr1 === arrCopy1); //  true
console.log(arr1); // [4, 2, 3]
console.log(arrCopy1); // [4, 2, 3]


let arr2 = [1, 2, 3]; 
let arrCopy2 = [...arr2];

arrCopy2[0] = 4;


console.log(arr2 === arrCopy2); // false
console.log(arr2); // [1, 2, 3]
console.log(arrCopy2); // [4, 2 ,3]


