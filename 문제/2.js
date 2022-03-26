// Rest Parameter

// 값을 여러개 입력받는 함수를 작성해주세요.
// 입력되는 파라미터의 수는 제한이 없으며, 모두 숫자입니다.
// 해당 값들을 모두 더해서 반환해주면 됩니다.

function sum(...rest){
    let result = 0;
    for(let value of rest){
        result += value;
    }

    return result;
}

console.log(sum(1,2,3,4,5));
console.log(sum(3,3,3));
