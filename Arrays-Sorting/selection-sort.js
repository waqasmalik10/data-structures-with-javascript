const selectionSort =arr => {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j]<arr[i]) {
                const tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

const data = [5,2,8,99,8,76,54,23,1];
console.log(selectionSort(data));