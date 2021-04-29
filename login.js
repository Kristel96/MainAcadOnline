import {getRequestToken, validateWithLogin, getAccess} from './dataservice.js';

let submit = document.getElementById('login');
submit.onclick = function (){
   let username =  document.getElementById('username').value;
   let psw = document.getElementById('pasw').value;
    getRequestToken(username, psw, validateWithLogin);

   // let allUsers = JSON.parse(localStorage.getItem('allusers'));
   //  allUsers.forEach(function (item,index){
   //      if (item.email ===currentemail){
   //          alert('User ' + item.name+' існує')
   //      }
   //  })
};

// getAccess();

