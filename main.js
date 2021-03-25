//Потрібно знайти периметр чотирикутника,площу та периметр прямокутника та квадрата

let sidesArray=[2,3]
// Rectangle Square Quadrangle

function perimeter(sides, type){
    let p;
    switch (type){
        case "Quadrangle":
            p = sum(sides);
            return p;
        case "Square":
            if(!Array.isArray(sides)){
                p = sides*4;///лише якщо на вхід передамо одне число без масива
                return p;
            }
            break;
        case "Rectangle":
            if (sides.length===2){
                p = sum(sides);
                return 2*p; ///якщо на вхід прийде два елементи
            }
            break;
        default:
            p = sum(sides);
            return p;
    }

}
function sum(array){
    let total= 0;
    for (let j=0; j<array.length; j++){
        total+=array[j];
    }
    return total;
}

console.log(perimeter(sidesArray, "Rectangle"));

///д.З додати функції для знаходження площі
