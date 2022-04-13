// 메모리 누수 관리
// 가비지 컬렉터는 더 이상 시용되지 않는 변수는 메모리에서 제거합니다.
// 아래 코드에서 valueA를 메모리에서 제거해보세요.

let valueA = {test : 1};
let valueB = {b : 2, a : valueA};

console.log(valueA);
console.log(valueB);

delete valueB.a;
console.log(valueB.a); // undefined
