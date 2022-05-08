call by sharing

var obj = {};
var func = (value) => {
 
    value = 1;
}
func(obj);
console.log(obj);

let a = {};
let func = function(b) {
    // a = {}  b = {} =1
    b = (b.a=1);
    //b.a =1 , a.a = 1;
    //b = 1 , a.a = 1;
    b.b = 2;
    //b = 1 , b.b = 2 ????
    console.log(b);
   
  }
  func(a);
  console.log(a); // {a : 1}
