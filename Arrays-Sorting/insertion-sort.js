const insertionSort = arr => {
    for(let i=1; i<arr.length; i++) {
        for(let j=i; j>=0; j--) {
            if(arr[j]<arr[j-1]) {
                const tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;
            }
        }
    }
    return arr;
}

const arr = [1,6,5,77,99,876,13,45];
console.log( insertionSort(arr) );
