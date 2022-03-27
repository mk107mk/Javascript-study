
//재귀함수 

function func(a){

    if(a==0){
        return 0;
    }
   return a + func(a - 1);
   
}
console.log(func(7));


