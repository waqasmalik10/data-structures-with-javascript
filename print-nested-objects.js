const printNestedObject = (obj, indent = 0) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            console.log(`${'_'.repeat(indent)}${key}:`);
            printNestedObject(obj[key], indent + 4);
        } else {
            console.log(`${'-'.repeat(indent)}${key}: ${obj[key]}`);
        }
    }
}

module.exports = printNestedObject;