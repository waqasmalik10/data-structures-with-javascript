const factorial = num => {
    if(num===0) return 1;
    return factorial(num-1) * num;
}

console.log( factorial(5) )