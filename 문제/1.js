// 함수 / nullish
// 세 개의 값을 입력받아서 모두 더해주는 함수를 작성하세요.
// 입력되는 3개의 인자에는 null, undefined가 포함될 수 있습니다.
// 이 경우 에러, NaN을 반환하지 않고 null, undefined를 0 으로 
// 대체해서 계산을 진행합니다.

// function sum()

function sum(num1,num2,num3){
    num1 = num1??0;
    num2 = num2??0;
    num3 = num3??0;

    return num1 + num2 + num3;
}
console.log(sum(1,2,3));
console.log(sum(4, null));
console.log(sum(2,5));