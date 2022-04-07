//call stack

let arr =[1,2,3,4];

function sum(...rest){
    console.log(rest);
    let result = 0 ;
        for(let value of rest){
            result += value;
        }
        return result;
}
console.log(sum(arr));
console.log(sum(...arr));


