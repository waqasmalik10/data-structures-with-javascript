const map = new Map([
    [true, 'yes'],
    ['false', 'no'],
    [true, 'yesyes']
]);

const obj = {me:'me'};
map.set(obj, 'This is me')
console.log( map.get(obj) , map.get(true) );

for(m of map) {
    console.log(m[0], m[1]);
}

map.forEach((value, key)=> {
    console.log(value, key);
})