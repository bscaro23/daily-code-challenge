const sayHello = () => {
    return 'Hello!';
}
const addOne = (num) => {
    return num ++;
}
const addTwoNumbers = (a, b) => { 
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'Input must be a number';
    }
    return a + b;
} 
const sumNumbers = (array) => {
    if (array.length === 0) {
        return 0;
    }
    let sumTotal = 0;
    for (let i = 0; i < array.length; i++){
        sumTotal += array[i]; 
    }
    return sumTotal;
}
console.log(sumNumbers[10, 5, 9]);