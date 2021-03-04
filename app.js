// Создайте массив с названиями дней недели. Вывести сегодняшний день недели словами.

let weekDays =["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"];
let today = new Date();
 // getDay();
let dayNumber = today.getDay();
console.log(dayNumber);
console.log(weekDays[dayNumber]);


//JSON methods

let user = {
 name: "John",
 lastName: "Gold",
 phone: 12121212,
 emails:["qwqw@gmail.com",
 "jfjfj@gmail.com"]
}


let jsonObj = JSON.stringify(user);
console.log(jsonObj);
console.log(jsonObj.lastName)

let standartObject = JSON.parse(jsonObj);
console.log(standartObject);

console.log(standartObject.name);



///FUNCTIONS


//Standart function view
main();

function main(){
 console.log("Hello")
}

//Anonymous function
let a = function(){
 console.log("Hello")
}
a();

//Arrow function
let b =()=>{
 console.log("Hello")
}
b();


