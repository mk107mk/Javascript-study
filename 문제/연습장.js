let arr = [1,2,3,4,5];
arr.map((value, index) => {
    console.log(value);
    console.log(index);
});

let obj = {a:1 ,b:2,c:3};

for(let key in obj){
    console.log(obj[key]);
    console.log(key)
}
