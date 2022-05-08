
재귀함수 

function func(a){

    if(a==0){
        return 0;
    }
   return a + func(a - 1);
   
}
console.log(func(7));


function sum(value){
  return (value == 0) ? 0 :  value += sum(value - 1);
}

console.log(sum(10)); // 55


function pow(x , n){
    if(n == 1){
        return x;
    }else{
        return x * pow(x, n - 1);
    }

}
console.log(pow(2,3)); // 8



