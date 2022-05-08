// Callback Hell example
class UserStorage {
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            (id === 'abc' && password === '123') ||
            (id === 'def' && password === '456')
          ) {
            resolve(id);
          } else {
            reject(new Error('not found'));
          }
        }, 2000);
      });
    }
  
    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === 'abc') {
            resolve({ name: 'abc', role: 'admin' });
          } else {
            reject(new Error('no access'));
          }
        }, 1000);
      });
    }
  
    // Homework Answer 
    async getUserWithRole(user, password) {
      const id = await this.loginUser(user, password);
      const role = await this.getRoles(id);
      return role;
    }
  }
  
  // Original code from Youtube course
  const userStorage = new UserStorage();
  const id = 'abc';
  const password = '123';
  userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => console.log(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
  
  // Homework Answer 
  userStorage
    .getUserWithRole(id, password) //
    .catch(console.log)
    .then(console.log);