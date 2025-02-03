let side_1 = Number(prompt())
let side_2 = Number(prompt())
let side_3 = Number(prompt())

function checkTriangleExistense (side_1, side_2, side_3) {

    if ((side_1 + side_2) > side_3 && (side_2 + side_3) > side_1 && (side_1 + side_3) > side_2) {
        return ("Треугольник существует");
    } 
    else {
        return ("Треугольник не существует");
    }

}

console.log(checkTriangleExistense(side_1, side_2, side_3));