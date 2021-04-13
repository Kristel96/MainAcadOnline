let a = document.forms.registerForm;
let newUser = {}
let allUsers = [];
a.onsubmit = function (){
    let storedUsers = JSON.parse(localStorage.getItem('allusers'));
    if (storedUsers){
        allUsers =  storedUsers
    }
    newUser.name = a.elements.name.value;
    newUser.lastName = a.elements.lastName.value;
    newUser.email = a.elements.email.value;
    newUser.psw = a.elements.psw.value;

    allUsers.push(newUser);
    localStorage.setItem('allusers', JSON.stringify(allUsers));
}
