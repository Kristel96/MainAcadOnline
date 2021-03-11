//Потрібно знайти периметр чотирикутника,площу та периметр прямокутника та квадрата



class Quadrangle {          //Чотирикутник

    constructor(sides){
        this.sides = sides
    }
    perimeter(){
       let p = 0;
       for (let i =0; i<this.sides.length; i++){
           p += this.sides[i]
       }
       return p;
    }
}
// let pro = prompt();// ДЗ зробити ввід даних через prompt, сформувати масив,  створити екземпляр класу чотирикутник з попередньосформованим масивом

let quadrangleSides = [4,2,4,5];
let quad1 = new Quadrangle(quadrangleSides);
// console.dir(quad1.perimeter());



class Rectangle extends Quadrangle{                      //Прямокутник

    constructor(sides){
      super (sides)
    }
    square() {
        if(this.sides.length<2){
            return this.sides[0] * this.sides[1] ///Погана практика такого запису, немає перевірки на кількість елементів
        }else{
            //figure this out!
        }

    }
    perimeter(){
        return 2 * super.perimeter()
    }
}

let rectangleSides = [12,23];
let b= new Rectangle(rectangleSides);
// console.dir(b.square());




class Square extends Rectangle{                            //Квадрат
    constructor(side) {
        super();
        this.side = side;
    }
    square() {
        return  Math.pow(this.side, 2)
    }
    perimeter() {
        return 4 * this.side;
    }

}
let squareSide = 3;
let s = new Square(squareSide);
console.log(s.perimeter());
console.log(s.square());
