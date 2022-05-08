//주어진 원본 객체를 딥카피하는 함수를 작성
//입력되는 객체의 프로퍼티와, 형태는 달라질 수 있다.
//힌트) 재귀호출, typeof


// function deepCopy(obj) {
//     return {
//         ...obj,
//         c: [...obj.c],
//         d: { ...obj.d },
//         e: { arr: [...obj.e.arr], obj: { ...obj.e.obj } },
//         f: [{ k: obj.f[0].k }, { j: obj.f[1].j }, { f: obj.f[2].f }]
//     }
// }


/***************************************************************************** */

const original = {
    a: 1,
    b: 'test',
    c: [1, 2, 3, 4],
    d: { a: 2, b: 3 },
    e: { arr: [4, 9, 16], obj: { a: 6, b: 7, c: 8 } },
    f: [{ k: 7 }, { j: 10 }, { f: 13 }]
}

function deepCopyValue(value) {
    let cloneValue;
    cloneValue = value;

    return cloneValue;
}

function deepCopyObj(value) {
    let cloneObj = {};
    cloneObj = {...cloneObj, ...value};
    return cloneObj;
 
}

function deepCopyArr(value) {
    let cloneArray = [];
    cloneArray = [...cloneArray, ...value];
    return cloneArray;
}


function deepCopy(value) {
    let result;
    if(typeof value != 'object'){
        result = deepCopyValue(value);

    }else if(Array.isArray(value)){
        result = deepCopyArr(value);
        value.map((arrValue, arrIndex) => {
            value[arrIndex] = deepCopy(arrValue);
        })

    }else{
        result = deepCopyObj(value);
       for(let key in value){
           value[key] = deepCopy(value[key]);
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