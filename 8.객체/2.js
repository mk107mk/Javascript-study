function test(name , age){
    return{
        name : name,
        age : age 
    }
}

function test2(name , age){
    return {
        name,
        age,
    }
}

console.log(test('kim', 20)); // {name : 'kim, age: 20}
console.log(test2('kim', 20)); // {name : 'kim, age: 20 }
