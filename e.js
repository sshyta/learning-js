let num_1 = Number(prompt())
let num_2 = Number(prompt())
let num_3 = Number(prompt())
let num_4 = Number(prompt())

function calculateAverage (num_1, num_2) {
    return ((num_1 + num_2)/2)
}

let resultPartOne = calculateAverage(num_1, num_2);
let resultPartTho = calculateAverage(num_3, num_4);

function compareAverages (resultPartOne, resultPartTho) {
    if (resultPartOne > resultPartTho) {
        console.log ("Среднее значение первого набора больше");
    } 
    else if (resultPartTho > resultPartOne) {
        console.log ("Среднее значение второго набора больше")
    }
    else 
        console.log ("Средние значения наборов равны")
}

compareAverages(resultPartOne, resultPartTho);
