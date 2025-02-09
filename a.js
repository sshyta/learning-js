let month = Number(prompt())
let temp = Number(prompt())

if (month === 12 || month === 1 || month === 2) {
    let season = "Зима" 
    
    if (temp == -25 || temp < -25) {
        console.log(season + " " + "(холодная зима)")
    }
    else { 
        (temp != -25 || temp > - 25) 
        console.log(season)
    }

} 
else if (month === 3 || month === 4 || month === 5) {
    let season = "Весна"

    if (temp < 15) {
        console.log (season + " " + "(прохладная весна)")
    }
    else {
        (temp > 15) 
        console.log(season)
    }

}
else if (month === 6 || month === 7 || month === 8) {
        let season = "Лето"

        if (temp >= 30) {
            console.log(season + " " + "(жаркое лето)")
        }
        else {
            console.log(season)
        }
}
else if (month === 9 || month === 10 || month === 11) {
        let season = "Осень"

        if (temp < 0) {
            console.log(season + " " + "(прохладная осень)")
        }
        else {
            console.log(season)
        }
}