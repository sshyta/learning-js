const capitals = prompt();
const capitalArray = capitals.split(" ");
const element = capitalArray.includes("Андорра-Ла-Велла")

if (element == true) {
    const resultArrayA = capitalArray.filter((capitalArray) => {
        return capitalArray[capitalArray.length - 1] === "а";
    })
    console.log(resultArrayA)
} else if (element == false) {
    const resultArrayN = capitalArray.filter((capitalArray) => {
        return capitalArray[capitalArray.length - 1] === "н"
    })
    console.log(resultArrayN)
}