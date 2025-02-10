const array = prompt(); 
const newArray = array.split(", ")
const result = [];

for (let i = 0; i < newArray.length; i++) {
    const element = newArray[i]

    if (!isNaN(element)) {
        result.push(parseInt(element));

    } else if (isNaN(element)) {
        result.push(element);
    }
}

console.log(result)