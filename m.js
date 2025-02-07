const text = "Истина парадоксальна"; 
let vowelCount = 0; 
for (let i = 0; i < text.length; i++) { 
  let char = text[i].toLowerCase()   
  if (char === "а" || char === "е" || char === "и" || char === "о" || char === "у" || char === "э" 
|| char === "ю" || char === "я") {     
    vowelCount++;   
   } 
} 

console.log(vowelCount);