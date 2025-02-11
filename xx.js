const array = prompt();
const index = prompt();
const newArray = array.split(", ");
const newIndex = index.split(", ");
const emptyArray = [];


for(let a = 0; a < newIndex.length; a++) {
    const indexElement = newIndex[a]

    if (!isNaN(indexElement)) {
        numIndex = parseInt(indexElement) // index => number()
        
        const result = newArray[numIndex] // newArray[index]
        emptyArray.push(result)
        
    }
}
console.log(emptyArray.join(' '))