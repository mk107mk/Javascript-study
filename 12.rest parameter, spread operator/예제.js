// Rest Parameter

// 값을 여러개 입력받는 함수를 작성
// 입력되는 파라미터의 수는 제한이 없으며, 모두 숫자
// 해당 값들을 모두 더해서 반환

function sum(...rest){
    let result = 0;
    rest.map(value => {
        result += value;
    })

    return result;
}

console.log(sum(1,2,3,4,5));