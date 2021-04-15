let a = document.forms.registerForm;
let newUser = {}
let allUsers = [];



a.onsubmit = function (){
    let storedUsers = JSON.parse(localStorage.getItem('allusers'));
    if (storedUsers){
        allUsers =  storedUsers
    }
    let inputName = a.elements.name.value;
   if( checkName(inputName)){
       newUser.name = inputName;
   }else alert("Name is to short");

   let inputLastName = a.elements.lastName.value;

    if(checkName(inputLastName)){
        newUser.lastName =inputLastName;
    } else alert("Last name is to short");
    let inputEmail =  a.elements.email.value;

    if(checkEmail(inputEmail)){
        newUser.email =  inputEmail;
    } else alert("Email validation failed");

    newUser.psw = a.elements.psw.value; ///ДЗ додати валідацію на пароль.

    allUsers.push(newUser);
    localStorage.setItem('allusers', JSON.stringify(allUsers));
}
function checkName(userName){
    let regexp = /\w{3,}/;
    return regexp.test(userName);
}
function checkEmail(userEmail){
    let pswRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pswRegexp.test(userEmail);
 }
















