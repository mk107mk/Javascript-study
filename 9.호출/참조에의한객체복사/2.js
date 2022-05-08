//기존에 있던 객체와 똑같으면서 독립전인 객체를 만드는 방법
//1.기존 객체의 프로퍼티들을 순회해 원시 수준까지 프로퍼티를 복사

let user = {
  name : 'kim',
  age : 20
}

let clone = {};

for(let key in user){
  clone[key] = user[key];
}

clone.name = 'lee';

console.log(user.name); // kim
console.log(clone.name); // lee
