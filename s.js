let S = +prompt()
let h = +prompt()
let choice = prompt()
let calculateCylinderVolume = (S, h) => (S * h)
let calculateConeVolume = (S, h) => ((1/3) * (S * h))
if (choice === "цилиндр") {
    console.log ("Объем цилиндра: " + calculateCylinderVolume(S, h))
} else if (choice === "конус") {
    console.log("Объем конуса: " + calculateConeVolume(S, h))
}