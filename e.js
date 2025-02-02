function calculateAverageOneCoup (num_1, num_2) {
    num_1 = +prompt
    num_2 = +prompt
    return ((num_1 + num_2)/2)
}

function calculateAverageThoCpou (num_3, num_4) {
    num_3 = +prompt
    num_4 = +prompt
    return ((num_3 + num_4)/2)
}

function compareAverages (calculateAverageOneCoup, calculateAverageThoCpou) {
    if (resultPartOne < resultPartTho) {
        console.log("Среднее значение второго набора больше")
    } 
    else if (resultPartOne === resultPartTho) {
        console.log("Средние значения наборов равны")
    } 
    else {
        console.log("Среднее значение первого набора больше")
    }
}

calculateAverage();
compareAverages();