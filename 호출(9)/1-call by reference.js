call by reference

let obj = {};

let func = (value) => {
    value.name = 'kim';
}
func(obj);
console.log(obj); // {name : 'kim'}
console.log(obj.name); // kim
