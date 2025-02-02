let x = Number(prompt()) 
let even = Number()
let odd = Number()
let sum_even = Number()
let sum_odd = Number()

for (let even = 1; even <= x; even++) {
    
    if (even % 2 === 0) {
        sum_even++
    } 
}

for (let odd = 1; odd <= x; odd++) {
    if (odd % 2 != 0) {
        sum_odd++
    }
}

console.log("Количество четных чисел: " + sum_even)
console.log("Количество нечетных чисел: " + sum_odd)
