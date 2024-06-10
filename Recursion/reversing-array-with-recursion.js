const reverse = (arr, start, end) => {
    if(end<=start) return arr;
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    return reverse( arr, start+1, end-1 );
}

const arr = [3,4,6,4,2,4];
console.log( reverse( arr, 0, arr.length-1) )
