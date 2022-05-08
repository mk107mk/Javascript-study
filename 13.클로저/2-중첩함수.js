// 중첩 함수 
// 함수 내부에서 선언한 함수

function name(firstName, lastName){

  function fullName(){
    return firstName + ' ' + lastName;
  }
  
  console.log('hello' + ' ' +  fullName());

}
name('mk', 'kim');  // 'hello mk kim'


// 중첩함수를 이용한 난수생성기

function randNum(){
  let number = 0;

  return function(){
    number = Math.round(Math.random() * 10);
    console.log(number);
  };
}
let getNum = randNum();
getNum();