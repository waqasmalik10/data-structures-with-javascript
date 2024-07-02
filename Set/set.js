const set = new Set(["hi", "hello", "world", "hi"]);
set.add("Hello World")

console.log(set, set.size, set.keys())
console.log(set.has("hello"))
set.delete("hello");
set.delete("hello hello");

console.log(set);

for(s of set) {
    console.log(s)
}

console.log(set.keys(), set.values(), set.entries())