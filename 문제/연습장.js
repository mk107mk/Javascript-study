// let obj = [
//      1,
//     2
// ]



// let array = [1,2]
// let clone = [3]

// clone = Object.assign(clone, obj) 


// // console.log(typeof obj);
// // console.log(typeof array);

// obj[0] = 1212;

// console.log(obj);
// console.log(clone);


// const obj = [
//   1, {b:1,c:2}
// ];

//  const arr = [[1,2,3,4],[1,2,3],[1,[3,4,5]]];

// let value = 1;

const original = {
    a: 1,
    b: 'test',
    c: [1, 2, 3, 4],
    d: { a: 2, b: 3 },
    e: { arr: [4, 9, 16], obj: { a: 6, b: 7, c: 8 } },
    f: [{ k: 7 }, { j: 10 }, { f: 13 }]
}

function deepCopyObj(value){
    let cloneObj = {}
    cloneObj = {...cloneObj, ...value}
    return cloneObj;
}

function deepCopyArr(value){
    let cloneArr = []
    cloneArr = [...cloneArr , ...value];
    return cloneArr;

}

function deepCopyValue(value){

    let cloneValue;
    cloneValue = value;
    return cloneValue;
}


function deepCopy(value) {

    let result;

    if (typeof value !== 'object') {   // 값일때
        result = deepCopyValue(value);
        
    } else if (Array.isArray(value) == true) { // 배열일 때

        result = deepCopyArr(value);
        value.forEach((forValue,index) => {
                value[index] = deepCopy(forValue);
        })

    } else {                                    //객체일때
        
        result = deepCopyObj(value);
        for(let key in value){
            value[key] = deepCopy(value[key])
        }
        
    }

    return result;
}

const clonedList = deepCopy(original);

original.a = 1717;
original.b = 'test1717';
original.c[0] = 1717;
original.d.a = 1717;
original.e.arr[0] = 177;
original.f[0].k = 177;


console.log(original);
console.log(clonedList);





