//bind

let obj = {
    name: 'kim',
    test(a,b,c) {
        console.log(this, a,b,c);
    }
}

let test = obj.test.bind(obj,1,2);
test(3);