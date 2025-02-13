const citiesInput = prompt();
const citiesArray = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];

if (citiesArray.includes(citiesInput)) {
    const resultCitiesArray = citiesArray.filter((citiesArray) => {
        return citiesArray[0] === citiesInput[0]
    })
    console.log(`Города, начинающиеся с буквы "${citiesInput[0]}": ${resultCitiesArray.join(", ")} `);
} 

else {
    console.log(`Такого города нет в списке`)
}
