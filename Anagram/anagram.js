const isAnagram = (str1, str2) => {
    const obj = {};
    for(s of str1) {
        obj[s] = (obj[s] || 0) + 1;
    }
    console.log(obj);
    for(s of str2) {
        if(!obj[s]) {
            return false;
        } else {
            obj[s]--;
        } 
    }
    return true;
}

console.log( isAnagram("abcfed", "baecfd") );