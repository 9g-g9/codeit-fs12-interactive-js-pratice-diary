// AND: 첫 Falsy에서 멈춤
console.log(true && true && false && true);
// false (세 번째에서 멈춤)

// OR: 첫 Truthy에서 멈춤
console.log(false || false || true || false);
// true (세 번째에서 멈춤)
