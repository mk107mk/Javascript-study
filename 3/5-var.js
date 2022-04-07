//var
//블록스코프를 무시한다
//중복선언이된다
//호이스팅이된다

// if(true){
//     var test = true;
// }
// console.log(test); // true

// for(var i = 0; i < 10; i++){

// }
// console.log(i); // 10


//코드 블록이 함수 안에 있다면, var은 함수 레벨 변수가 된다.
// function test(){
//     if(true){
//         var value = 1;
//     }
//     console.log(value);
// }

// test(); // 1
// console.log(value); //error


// var은 중복 선언이 가능한다
// var value = 1;
// var value = 2;
// console.log(value);


//호이스팅이 된다
//변수 선언은 호이스팅 되지만 할당은 안된다.
// value = 1;

// var value;

// console.log(value);

//선언 호이스팅
// value = 1;
// if(false){
//     var value;
// }


// console.log(value); // 1


//변수 할당
if(false){
    value = 1;
}
var value;

console.log(value);