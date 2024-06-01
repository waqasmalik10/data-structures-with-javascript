const bubbleSort = arr => {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j]>arr[j+1]) {
                const tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

const selectionSort = arr => {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i]>arr[j]) {
                const tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return arr;
}

const insertionSort = arr => {
    for(let i=1; i<arr.length; i++) {
        for(let j=i; j>0; j--) {
            if(arr[j]<arr[j-1]) {
                const tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;
            }
        }
    }
    return arr;
}

const data = [2, 4, 5, 3, 6, 1, 9, 8, 0, 7];
console.log('Original Array: ', data);
console.log( 'After Bubble Sort: ', bubbleSort( [...data]) );
console.log( 'After Selection Sort: ', selectionSort( [...data]) );
console.log( 'After Insertion Sort: ', insertionSort( [...data]) )