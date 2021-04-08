
getUsersList(createUserList);

function getUsersList(callbackCreateHtml){
    let url = "https://reqres.in/api/users?page=1"
    fetch(url)
        .then(response => response.json())
        .then(response => callbackCreateHtml(response.data))
        .catch(error=>alert(error))
}
function createUserList(usersArray){
          usersArray.forEach((item,index)=>{
              let mainContainer = document.getElementById('mainContainer');
              let userContainer = document.createElement("div");
              let userImage = document.createElement("img");
              userImage.src = item.avatar;
              userContainer.append(userImage);
              let fullName = document.createElement('p');
              fullName.innerHTML = item.first_name +" "+item.last_name;
              userContainer.append(fullName);

              let email = document.createElement('p');


              let userUrl = 'https://reqres.in/api/users/'+item.id
              fetch(userUrl)
                  .then(response => response.json())
                  .then(response => email.innerHTML = response.data.email)
              userContainer.append(email);
              mainContainer.append(userContainer);

          })

}

