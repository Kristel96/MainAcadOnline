async function getUsersList(){
    let url = "https://reqres.in/api/users?page=1"
    const response = await fetch(url);
    return response.json();
}

async function getUserEmail(id){
    let userUrl = 'https://reqres.in/api/users/'+id
    const response = await fetch(userUrl);
    return response.json();
}

async function createUserList(){
    let allUsers = await getUsersList();
    for(let i=0; i< allUsers.data.length; i++){
        await buildList(allUsers.data[i]);
    }
}

async function buildList(item){
    let mainContainer = document.getElementById('mainContainer');
    let userContainer = document.createElement("div");
    let userImage = document.createElement("img");
    userImage.src = item.avatar;
    userContainer.append(userImage);
    let fullName = document.createElement('p');
    fullName.innerHTML = item.first_name +" "+item.last_name;
    userContainer.append(fullName);

    let email = document.createElement('p');
    let emailData = await getUserEmail(item.id);
    email.innerHTML = emailData.data.email;

    userContainer.append(email);
    mainContainer.append(userContainer);
}

createUserList();

//
// function f1(){
//     let url = "https://reqres.in/api/users?page=1"
//     fetch(url)
//         .then(response => response.json())
//         .then(response => console.log(response + "1"))
//
// }
// function f2(){
//     let url = "https://reqres.in/api/users?page=1"
//     fetch(url)
//         .then(response => response.json())
//         .then(response => console.log(response + "2"))
//
// }
// function f3(){
//     let url = "https://reqres.in/api/users?page=1"
//     fetch(url)
//         .then(response => response.json())
//         .then(response => console.log(response + "3"))
//
// }
// f1();
// f2();
// f3();
