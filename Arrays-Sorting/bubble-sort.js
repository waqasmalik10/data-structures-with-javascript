const bubbleSort = arr => {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if(arr[j]>arr[j+1]) {
                const tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

const data = [5,4,6,11,53,1,3,5,99,24];
console.log( bubbleSort(data) );