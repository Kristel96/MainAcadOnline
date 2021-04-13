let form = document.forms.loginForm;
form.onsubmit = function (){
   let currentemail =  form.elements.email.value;
   let allUsers = JSON.parse(localStorage.getItem('allusers'));
    allUsers.forEach(function (item,index){
        if (item.email ===currentemail){
            alert('User ' + item.name+' існує')
        }
    })
}
