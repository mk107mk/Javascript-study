//링크드 리스트 

//각 노드는 자신이 가지고 있는 데이터와, 다음 노드를 가리켜야 한다.
//링크드리스트는 각각 1, 3, 2, 5 를 담고 있는 4개의 노드로 구성됩니다.
//가장 마지막 노드는 가리키고 있는 노드가 업습니다.

let linkedList = {
    data: 1,
    next: {
        data: 3,
        next: {
            data: 2,
            next: {
                data: 5,
                next: {
                    data: null
                }
            }
        }
    }
}

//링크드리스트를 탐색하는 함수 
//탐색 조건은 노드가 가지고 있는 값이다
//탐색 결과는 노드의 index를 반환한다.



function search(value) {

    let index = 0;
    let list = linkedList;

    while (list.data != null) {
        if (list.data == value) {
            return index;
        }
        list = list.next;
        index++;
    }
}

console.log(search(1)); 
console.log(search(3));
console.log(search(2));
console.log(search(5));