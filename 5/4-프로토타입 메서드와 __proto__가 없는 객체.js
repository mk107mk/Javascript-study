//프로토타입 메서드와 __proto__ 가 없는 객체

let animal = {
    eats: true
  };
  
  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });
  
  console.log(Object.getPrototypeOf(rabbit));