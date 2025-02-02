let num1 = Number(prompt())
let num2 = Number(prompt())

for (let i = num1; i >= num2; i--) {
    if (num1 > num2 && i % 3 === 0 && i != 0) {
        console.log(i)
    }
}

for (let i = 0; i <= num2; i++) {
    if (num1 < num2 && i % 3 === 0 && i != 0) {
        console.log(i)
    }
}