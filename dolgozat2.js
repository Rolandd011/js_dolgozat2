function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));      
console.log(maskify("1"));                
console.log(maskify(""));                 
console.log(maskify("Skippy"));      


function isTriangle(a,b,c){
    return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 2, 2)); 
console.log(isTriangle(7, 10, 5)); 
console.log(isTriangle(1, 2, 3)); 
console.log(isTriangle(0, 1, 1));  
console.log(isTriangle(-1, 2, 3)); 



function timeConvert(num) {
    if (num <= 0) {
        return "00:00";
    }
    
    let hours = Math.floor(num / 60); 
    let mins = num % 60;                
    
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}



function createArrayOfTiers(num) {
  const numStr = '' + num; 
  
    const result = [];

    for (let i = 1; i <= numStr.length; i++) {
        result.push(numStr.slice(0, i)); 
    }

  return result.sort();
  return(num)
}
console.log(createArrayOfTiers(420));    
console.log(createArrayOfTiers(2017));  
