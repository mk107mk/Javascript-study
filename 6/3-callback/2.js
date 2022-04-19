// JavaScript 는 synchronous 하다 (동기적이다)
// 코드가 hoisting이 된 이후부터 작성 순서에 맞춰 동기적으로 실행된다
// hoisting: var, function 

// console.log('1');
// setTimeout(() => console.log('2'), 1000);
// console.log('3');

// // Synchronous callback
// function printImmediately(print) {
//   print();
// }
// printImmediately(() => console.log('hello'));

// // Asynchronous callback
// function printWithDelay(print, timeout) {
//   setTimeout(print, timeout);
// }
// printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'abc' && password === '123') ||
        (id === 'def' && password === '456')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'abc') {
        onSuccess({ name: 'abc', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = 'abc';
const password = '123';
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        console.log(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);

