const insertAt = (arr, position, val) => {
    for(let i=arr.length-1; i>=position; i--) {
        arr[i+1] = arr[i];
    }
    arr[position] = val;
    return arr;
}

const deleteAt = (arr, position) => {
    for(let i=position; i<arr.length-1; i++) {
        arr[i] = arr[i+1]
    }
    arr.length=arr.length-1;
    return arr
}

const mergeArrays = (arr1, arr2) => {
    const new_arr = [];
    for(let i=0; i<arr1.length; i++) {
        new_arr[i] = arr1[i];
    }
    for(let i=0; i<arr2.length; i++) {
        new_arr[arr1.length+i] = arr2[i];
    }
    return new_arr;
}


const arr = [1, 2, 3, 5, 6, 7, 8, 20, 36];
const arr2 = [10,11,12,18,19,25];

console.log( 'Original Array: ', arr )
console.log( 'After Inserting number 4 at position 3: ', insertAt(arr, 3, 4) )
console.log( 'After deleting number at positoin 2:', deleteAt(arr, 2) )
console.log( 'After merging both array: ', mergeArrays(arr, arr2) )