const array = prompt();
const index = prompt();
const newArray = array.split(", ");
const newIndex = index.split(", ");

for(let a = 0; a < newIndex.length; a++) {
    const indexElement = newIndex[a]

    if (!isNaN(indexElement)) {
        const numIndex = parseInt(indexElement) 
        console.log(newArray[numIndex])
    }
}
