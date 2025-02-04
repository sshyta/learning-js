let S = +prompt()
let h = +prompt()
let choice = +prompt()

if (choice == "цилиндр") {
    let calculateCylinderVolume = (S, h) => (S * h)
} else if (choice == "конус") {
    let calculateConeVolume = (S, h) => ((1/3) * (S * h))
}

console.log(calculateConeVolume(S, h))
console.log(calculateConeVolume(S, h))


