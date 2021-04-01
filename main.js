let myForm = document.forms.register;
 let userEmail = myForm.elements.email;
 let userPsw = myForm.elements.psw;
let readyToSubmitEmail = false;
let readyToSubmitPsw = false;

userEmail.oninput = function(){
    let emailValue = userEmail.value;
    if(emailValue.length<=3){
        userEmail.style.border = "1px solid red";
        readyToSubmitEmail = false;
    }else{
        userEmail.style.border = "1px solid black";
        readyToSubmitEmail = true;
    }
}
userPsw.oninput = function(){
    let emailValue = userPsw.value;
    if(emailValue.length<=6){
        userPsw.style.border = "1px solid red";
        readyToSubmitPsw = false;
    }else{
        userPsw.style.border = "1px solid black";
        readyToSubmitPsw = true;
    }
}
myForm.onsubmit = function (){
    if (readyToSubmitEmail && readyToSubmitPsw){
        let userInfo = {};
        userInfo.email = userEmail.value;
        userInfo.pasword = userPsw.value;
        alert(userInfo.email +" and "+ userInfo.pasword);
    }
    else{
        alert("email or password are incorrecrt");
    }
}
