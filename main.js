//1

// let btn = document.getElementById("mainBtn");
// btn.onclick = function (){
//     alert("Hello everybody, how you doing?")
// }

//2
// let btn = document.getElementById("mainBtn");
// btn.onmouseenter = function (){   //onmouseover
//     alert("Hello everybody, how you doing?")
// }


//3
// let btn = document.getElementById("mainBtn");
// btn.ondblclick = function (){   //onmouseover
//     alert("Hello everybody, it is double click?")
// }

//4
// let square = document.getElementById("mainDiv");
//
// square.onmouseleave = function (){   //onmouseout
//     alert("You left the square");
// }
// square.onmouseenter = function (){   //onmouseover
//     alert("You join the square");
// }

//5
// let btn = document.getElementById("mainBtn");
// btn.onclick = function(){
//     let userInput = document.getElementById("mainInpt").value;
//     alert(userInput);
// }

//6

// let btn = document.getElementById("mainBtn");
// btn.onclick = function(){
//     let oops = "Oops, I did it again!";
//     document.getElementById("mainInpt").value = oops;
// }

//7

// let cat = "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80";
// let deer ="https://images.unsplash.com/photo-1453805622064-de9796753c22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
//
// let img = document.getElementById("mainImg");
// img.src = cat;
// let btn = document.getElementById("mainBtn");
// btn.onclick = function(){
//     img.src = deer;
// }

//8
// let input = document.getElementById("mainInpt");
// input.onclick = function (){
//     let a = this.value;
//     alert(a);
// }
//


//9
// let input = document.getElementById("mainInpt");
// input.onclick = function (){
//     let oops = "Oops, I did it again!";
//     this.value = oops;
// }

//10
// let input = document.getElementById("mainInpt");
// input.onclick = function (){
//     let oops = "Oops, I did it again!";
//     this.value = oops;
// }
// input.onblur = function (){
//     let oopsAgain = "Oops!Oops!Oops!"
//     this.value = oopsAgain;
// }

//11
// let input = document.getElementById("mainInpt");
// input.onclick = function (){
//     this.value = "KYKY"
// }

//11
// let input = document.getElementById("mainInpt");
// input.onclick = function (){
//     this.value = "You can not push this button ever again!"
//     this.disabled = true;
// }

//12
let cat = "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80";
let deer ="https://images.unsplash.com/photo-1453805622064-de9796753c22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

let img = document.getElementById("mainImg");
img.src = cat;
img.onmouseenter = function(){
    img.src = deer;
}
img.onmouseleave = function (){
    img.src = cat;
}






















