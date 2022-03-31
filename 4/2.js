//this
function wrap(){
let user = {
    firstName: "보라",
    sayHi() {
        let arrow = () => console.log(this.firstName);


        function test(){
            console.log(this.firstName)
        }
        
        console.log(this);
        arrow();
        test();
    },
    sayBye : () => {
        console.log(this);
    }
};
user.sayBye();
}

wrap.call({a:1});

//user.sayHi();


// function test(func){
//     func();
// }

// test(user.sayHi);
// test(function(){
//     user.sayHi();
// })






