// && AND연산자 (shift + 7)
// || OR연산자 (shift + \)

console.log(0 && 100);
console.log("" && "hello");
console.log(null && true);

console.log("------------");

// Truthy && 무엇
console.log(1 && 100); // 100
console.log("hello" && "world"); // 'world'
console.log(true && "yes"); // 'yes'
