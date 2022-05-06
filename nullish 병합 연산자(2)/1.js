//nullish 병합 연산자

let b = "null or undefined";

function test1(value){
    console.log(value !== null && value !== undefined ? value : b);
}

test1(null);
test1(undefined);
test1(1);

function test2(value){
console.log(null??undefined??value??b);
}

test1(null);
test1(undefined);
test1(1);

let value = 0;
console.log(value || 10); // 10
console.log(value ?? 10); // 0

function test3(value){
return value = value ?? "default";
}
console.log(test3(null)); // default
console.log(test3(undefined)); // default
console.log(test3(100)); // 100