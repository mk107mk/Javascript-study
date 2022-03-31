//클로저 (단골질문)

    function func(){
    let a = 0;

      return function(value){
        a = value + a;
       return a; 
    }
}
let test = func();
console.log(test);
console.log(test(1));
console.log(test(1));
console.log(test(2));
console.log(func()(1));


let test2;
let test3;

function func2(){
    let a = 0;

      test2 = function(value){
        a = value + a;
       return a; 
    }

    test3 = function(value){
        a = a-value;
        return a;
    }
}

func2();


console.log(test2(1));
console.log(test2(1));
console.log(test2(2));