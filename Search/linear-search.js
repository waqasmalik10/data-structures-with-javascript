const linearSearch = (arr, val) => {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]===val) return i;
    }
    return -1;
}

const data = [1,3,6,32,63,12,4,16];
console.log( linearSearch(data, 12) )