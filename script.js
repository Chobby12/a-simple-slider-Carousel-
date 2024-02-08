
//the buttons

const forwardButton = document.querySelector(".forward");
const backwardButton = document.querySelector(".backward");
const myContainer = document.querySelector(".container");
const myMover = document.querySelector(".uno");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const thrid = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const arr = [one,two,thrid,four,five,six,seven];
const colors = ["red","orange","green","pink"];
let num=0;
let a = 0;
let moveForward = () =>{
    num++;
    if (num >= arr.length) {
        num = 0;
    }
    myMover.append(arr[num]);
    console.log(arr[num]);
}
let moveBackward = () =>{
    num--;
    if (num < 0) {
        num = arr.length - 1;
    }
    // a++;
    // if(a>=colors.length){
    //     a=0;
    // }
    console.log(arr[num]);
    myMover.append(arr[num]);
    // myContainer.style.backgro
}
forwardButton.addEventListener('click',moveForward)
backwardButton.addEventListener('click',moveBackward)
setInterval(moveForward,5000);

// myMover.addEventListener('')

//more qwork still needed to bje done here