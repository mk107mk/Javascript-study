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
    phoneName = '';
    constructor(phoneName){
        this.phoneName = phoneName;
    }
    callWithPhone() {
        console.log(` ${this.phoneName} 전화하기`);
    }

    searchWithPhone() {
        console.log(` ${this.phoneName} 검색`);
    }
}

class IPhone extends SmartPhone{
  constructor(phoneName = '아이폰'){
      super(phoneName);
  }
}

class Galaxy extends SmartPhone{
    constructor(phoneName = '갤럭시'){
        super(phoneName);
    }
}


function callAndSearch(...value) {
    let arr = [...value];
    arr.forEach(value => {
         phone.callWithPhone.call(value);
         phone.searchWithPhone.call(value);
    })
}

const phone = new SmartPhone;

const iphone = new IPhone();
const galaxy = new Galaxy();

callAndSearch(iphone,galaxy);



class Lg extends SmartPhone{
    constructor(phoneName = '엘지'){
        super(phoneName);
    }
}

const lg = new Lg();

callAndSearch(iphone,galaxy,lg);



