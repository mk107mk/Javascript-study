let user = {
    name : 'kim',
    age : 30
  };
  
  let user2  = {
    address : 123
  }
  
  let user3 = {
    age : 20
  }
  
  Object.assign(user, user2, user3);
  
  console.log(user); // {name : 'kim', address: 123, age: 20}
  