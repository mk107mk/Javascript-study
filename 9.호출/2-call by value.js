//call by value

let a = 1;
let func = (value) => { //callee
    value=value+1;
}
func(a); //caller
console.log(a);