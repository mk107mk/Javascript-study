// 나머지 매개변수
// 함수의 정의 방법과 상관없이 함수에 넘겨주는 인수의 개수엔 제약이 없다

function sumAll(...args){
    let sum = 0;

    for(let arg of args){
        sum += arg;
    }

    return sum;
}

console.log(sumAll(1,2,3,4,5)); // 15

function showInfo(firstName, lastName, ...address){
    console.log(firstName + ' ' + lastName);

    console.log(address[0]);
    console.log(address[1]);
}

showInfo('mk','kim','20','123');
//mk kim
//20
//1

// function showInfo(firstName, ...address, lastName){
    
// } // error