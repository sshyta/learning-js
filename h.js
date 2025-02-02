function calculate (num1, num2, operation) {

    num1 = Number(prompt())
    num2 = Number(prompt())
    operation = prompt()

    if (operation == '-') {
        console.log(num1 - num2)
    } else if (operation == '+') {
        console.log(num1 + num2)
    } else if (operation == '*') {
        console.log(num1 * num2)
    } else if (operation == '/') {
        console.log(num1 / num2)
    } else if (operation == '=') {
        console.log("Неверный оператор")
    } 
}

calculate();