function nullish(result) {

    result ??= 'null or undefined';
    console.log(result);
}

function orFunc(result){
    result ||= 'null or undefined';
    console.log(result);
}

nullish(undefined);
nullish(null);
nullish(0);
nullish(10);
nullish('hi');

orFunc(undefined);
orFunc(null);
orFunc(0);
orFunc(10);
orFunc('hi');