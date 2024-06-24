const binarySearch = (arr, val, start, end) => {
    const mid = Math.floor((start+end) / 2);

    console.log(arr, start, mid, end)
    if(arr[mid]===val) return mid; // value found 
    if(start>=end) return -1; // value not found 
    if( val < arr[mid] ) {
        end = mid - 1 ;
    } else {
      start = mid + 1;  
    }
    return binarySearch(arr, val, start, end)
}

const binarySearchWithLoop = (arr, val) => {
    let start = 0, end = arr.length-1;
    while(start<=end) {
        const mid = Math.floor((start+end)/2);
        if(arr[mid]===val) return mid;
        if(val<arr[mid]) {
            end=mid-1;
        } else {
            start = mid+1;
        }
    }
    return -1;
}

const data = [1, 7, 9, 46, 51, 56, 60, 77]; // array should be sorted for binary search to work.  
console.log( binarySearch( data, 9, 0, data.length-1) );
console.log( binarySearchWithLoop( data, 9) );