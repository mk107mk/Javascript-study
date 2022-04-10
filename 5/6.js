//

function Button(value){
    this.value = value;
    this.click = () => {
        console.log(this.value);
    }
    this.click2 = function(){
        console.log(this.value);
    }
}
let newButton = new Button(2);
// let click = newButton.click2;
// click();

let click = newButton.click;
click();