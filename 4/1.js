//캐싱 데코레이터

function test(x , y , z){
    console.log(x ,y, z);
}
test(1,2,1);
test(1,2,13);
test(1,2,16);
test(1,2,12);
test(1,2,11);
test(1,2,9);
test(1,2,3);
test(1,2,12);
test(1,2,10);
test(1,2,2);

function testwrapper(){

    return function(value){
        test(1,2,value);
    }
}

let wrappedtest = testwrapper();

