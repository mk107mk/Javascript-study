// 객체지향 프로그래밍
// callAndSearch 함수는 모든 휴대폰의 call, search를 호출하는 작업을 수행한다.
// 새로운 종류의 휴대폰이 추가되더라도 callAndSearch 함수가 수정될 필요가 없도록 리펙토링 하기
// 힌트) 다형성, 추상화

// class IPhone {
//     callWithIphone() {
//         console.log('전화하기');
//     }

//     searchWithIphone() {
//         console.log('검색');
//     }
// }

// class Galaxy {
//     callWithGalaxy() {
//         console.log('전화하기');
//     }

//     searchWithGalaxy() {
//         console.log('검색');
//     }
// }

// function callAndSearch() {
//     const iphone = new IPhone();
//     const galaxy = new Galaxy();
//     iphone.callWithIphone();
//     iphone.searchWithIphone();
//     galaxy.callWithGalaxy();
//     galaxy.searchWithGalaxy();
// }

//수정


class SmartPhone {
    constructor(name){
        this.name = name;
    }
    callWithPhone() {
        console.log(`${this.name} 전화하기`);
    }

    searchWithPhone() {
        console.log(`${this.name} 검색`);
    }
}

class IPhone extends SmartPhone {}

class Galaxy extends SmartPhone {}


const iPhone = new IPhone('아이폰');
const galaxy = new Galaxy('갤럭시');
    
iPhone.callWithPhone();
iPhone.searchWithPhone();
galaxy.callWithPhone();
galaxy.searchWithPhone();


