const maxOccureance = str => {
    const obj = {};
    let maxChar = '';
    for(s of str) {
        obj[s] = (obj[s] || 0) + 1;
        maxChar = maxChar==='' || obj[maxChar]<obj[s] ? s : maxChar;
    }
    return maxChar;
}

console.log( maxOccureance("hello weeeeorld") );