//bind

// let obj = {
//     name: 'kim',
//     test(a,b,c) {
//         console.log(this, a,b,c);
//     }
// }

// let test = obj.test.bind(obj,1,2);
// test(3);

//setTimeOut에 객체에서 분리된 함수인 user.sayHi가 전달되기 때문에 
//undefined가 출력된다
//setTimeOut 메서드는 인수로 전달받은 함수를 호출할 때 this에 Window 를 할당

let obj = {
    name: 'kim',
    func: function(){
        console.log(`my name is ${this.name}`);
    }
}



let func2 = obj.func;


let func3 = function(){
    return obj.func();
}

let func4 = obj.func.bind(obj);


// obj.func();
// func2();
// func3();
// obj.name = 'lee';
// func4();

// setTimeout(obj.func,1000);
// setTimeout(func3,1000);
// setTimeout(func4,1000);

setTimeout(function(){obj.func()},1000);

let bindFunc = obj.func.bind(obj);
setTimeout(bindFunc,1000);

obj.func = function(){console.log('this 변화')};