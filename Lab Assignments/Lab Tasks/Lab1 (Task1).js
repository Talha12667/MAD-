function add(a, b) {
    if (a === undefined || b === undefined) {
        return "Error: One or more arguments are missing!";
    }
    return a + b;
}

function subtract(a = 0, b = 0) {
    return a - b;
}

function multiply(...numbers) {
    let result = 1;
    for (let num of numbers) {
        result *= num;
    }
    return result;
}

function divide() {
    if (arguments.length < 2) {
        return "Error: Need at least two numbers to divide.";
    }
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === 0) {
            return "Error: Division by zero is not allowed.";
        }
        result /= arguments[i];
    }
    return result;
}

console.log("Add:", add(10, 5));            
console.log("Add (missing arg):", add(10)); 

console.log("Subtract:", subtract(10, 5));  
console.log("Subtract (1 arg):", subtract(10)); 

console.log("Multiply:", multiply(2, 3, 4));    
console.log("Multiply (single arg):", multiply(5)); 

console.log("Divide:", divide(100, 2, 5)); 
console.log("Divide (by zero):", divide(10, 0)); 
