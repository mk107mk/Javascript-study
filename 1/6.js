let a = 1;
let b = 2;
let c = 0;

function test1(value){
    if(value%2 == 0){
        console.log("짝수");
    }else{
        console.log("홀수");
    }

}

test1(b);

function test2(value){
   console.log(value%2 == 0 ? "짝수":"홀수");
}

test2(a);

function test3(value){
    console.log(value == 0?"0이다":(value % 2 == 0 ?"짝수":"홀수"));
}

test3(a);
test3(b);
test3(c);

if("0"){
    console.log("실행된다");
}