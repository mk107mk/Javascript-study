//Linkec list

let list = {
    value : 1, next:{
        value : 2, next:{
            value : 3, next:{
                value : 4, next: null
            }
        }
    }
}
console.log(list.next.next.value); // 3