//캐싱 데코레이터

// function test(x , y , z){
//     console.log(x ,y, z);
// }
// test(1,2,1);
// test(1,2,13);
// test(1,2,16);
// test(1,2,12);
// test(1,2,11);
// test(1,2,9);
// test(1,2,3);
// test(1,2,12);
// test(1,2,10);
// test(1,2,2);

// function testwrapper(){

//     return function(value){
//         test(1,2,value);
//     }
// }

// let wrappedtest = testwrapper();

// function slow(x){
//     console.log(`slow(${x})을/를 호출함`);
//     return x;
// }

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x);
//         }

//         let result = func(x);

//         cache.set(x, result);
//         return result;
//     };

   
// }

// slow = cachingDecorator(slow);

// console.log(slow(1));
// console.log('다시 호출: ' + slow(1));

// console.log(slow(2));
// console.log('다시 호출' + slow(2));

// 인수로 받은 함수의 행동을 변경시켜주는 함수를 데코레이터 라고 한다

// cachingDecorator를 재사용 할 수 있다, 원하는 함수 어디에든 cachingDecorator를 적용할 수 있다.
// 캐싱 로직이 분리되어 slow 자체의 복잡성이 증가하지 않는다.
// 필요하다면 여러개의 데코레이터를 조합해서 사용할 수 도 있다.

//func.call을 사용해 컨텍스트 지정하기

//캐싱 데코레이터는 객체 메서드에 사용하기엔 적합하지 않다

// let worker = {
//     someMethod(){
//         return 1;
//     },

//     slow(x) {
//         console.log(`slow(${x})을/를 호출함`);
//         return x * this.someMethod();
//     }
// };

// function cachingDecorator(func){
//     let cache = new Map();
//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x);
//         }
//         let result  = func(x);
//         cache.set(x,result);
//         return result;
//     };
// }

// console.log(worker.slow(1));
// worker.slow = cachingDecorator(worker.slow);
// console.log(worker.slow(2));


// func.call(context, arg1, arg2, ...)


// function sayHi(){
//     console.log(this.name);
// }

// let user = {name: 'john'};
// let admin = {name : 'Admin'};

// sayHi.call(user);
// sayHi.call(admin);

// function say(phrase){
//     console.log(this.name + ':' + phrase);
// }

// let user = {name: 'john'};

// say.call(user, 'hello');

// let worker = {
//     someMethod(){
//         return 1;
//     },

//     slow(x) {

//         console.log(`slow(${[x]}을/를 호출함)`);
//         return x * this.someMethod();
//     }
// };

// function cachingDecorator(func){
//     let cache = new Map();
//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x);
//         }
//         let result = func.call(this, x);
//         cache.set(x, result);
//         return result;
//     };
// }

// worker.slow= cachingDecorator(worker.slow);

// console.log(worker.slow(2));
// console.log(worker.slow(1));



//야러 인수 전달하기

let worker = {
    slow(min,max){
        return min + max;
    }
};

worker.slow = cachingDecorator(worker.slow);