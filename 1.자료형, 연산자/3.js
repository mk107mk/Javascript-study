let value  = 1;
console.log(typeof value); // number
value = String(value);
console.log(typeof value); // value 

let a = Number("문자 123");

console.log(a); // NaN 형 변환 실패
console.log(typeof a); // string

console.log(Boolean("string")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true