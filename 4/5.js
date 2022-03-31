//옵셔널 체이닝

let obj = {
    address : {
        street : 'str'
    }
}

let obj2 = {

}

let obj3 = {
    address : {

    }
}

let obj4 = null

let obj5 = {
    'address a' : {

    }
}

let obj6 = [1, {street : 'str'}]

console.log(obj2.address?.street);
console.log(obj3.address.street);
console.log(obj4?.address.street);
console.log(obj5?.['address a']?.street);
console.log(obj6[0],obj6[1]?.street);
