
setInterval(function (){
    console.log("hello there")

},1000 );// не менше ніж через




let user = {
    name: "Tom",
    email:"qwerty@gmail.com",
    display: function (){
      console.log(user.name) ;
      console.log(user.email) ;
    },
    sayHI:()=>{
        alert("Hello");
    },
    changeName(){
        user.name = "John";
        console.log( user.name);
    },
    education:{
        school:"State Schol 11",
        university: "Technical",
        degree: "master of Computer Sciemce"
    },
    children:[
            { name: "Daisy", age:10 },
            { name: "Lola", age:5 },
            { name: "Max", age:13 }
    ]
};


let hasNameProp = user.hasOwnProperty('email');
let hasNameProp2 = user.hasOwnProperty('lastName');


console.log(hasNameProp);
console.log(hasNameProp2);


let user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){

    console.log(user.name);
    console.log(user.age);
};
for(let key in user) {
    console.log(key + " : " + user[key]);
}


function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
        },
        driveCar: function(car){
            document.write(this.name + " ведет машину " + car + "<br/>");
        }
    };
};

function createCar(mName, mYear){
    return{
        name: mName,
        year: mYear
    };
}
let tom = createUser("Том", 26);
tom.displayInfo();


// let bently = createCar("Бентли", 2004);
tom.driveCar("Opel");

 let tom = new Object();




function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
        document.write(this.name + " ведет машину " + car.name + "<br/>");
    };
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
}

////Інкапсуляція
function User (name) {
    this.name = name;
    let _age = 1;
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + _age);
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}

let tom = new User("Том");
console.log(tom._age); // undefined - _age - локальная переменная
console.log(tom.getAge()); // 1
tom.setAge(32);
console.log(tom.getAge()); // 32
tom.setAge("54"); // Недопустимое значение
tom.setAge(123); // Недопустимое значение

function Hello(){

}
///
