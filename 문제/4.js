//주어진 원본 객체를 딥카피하는 함수를 작성
//입력되는 객체의 프로퍼티와, 형태는 달라질 수 있다.
//힌트) 재귀호출, typeof

const original = {
    a: 1,
    b: 'test',
    c: [1, 2, 3, 4],
    d: { a: 2, b: 3 },
    e: { arr: [4, 9, 16], obj: { a: 6, b: 7, c: 8 } },
    f: [{ k: 7 }, { j: 10 }, { f: 13 }]
};

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




function deepCopy(obj) {
    let cloneList = {}
    let arr = []

    for (let key in obj) {

        if (typeof obj[key] !== 'object') {

            cloneList = { ...cloneList, [key]: obj[key] }
            continue;

        }
        if (Array.isArray(obj[key]) == true) {
            
            cloneList = {...cloneList, [key] : [...obj[key]] }

        } else {

            cloneList = { ...cloneList }

        }
        cloneList[key] = deepCopy(obj[key])

    }
    return cloneList
}

deepCopy(original);

const cloned = deepCopy(original);
original.a = 1717;
original.b = 'test1717';
original.c[0] = 1717;
original.d.a = 1717;
original.e.arr[0] = 1717;
original.f[0].k = 1717;


console.log(original);

// console.log(origianl.e.arr);
// console.log(origianl.f[0]);

console.log(cloned);

// console.log(cloned.e.arr);
// console.log(cloned.f[0]); 
