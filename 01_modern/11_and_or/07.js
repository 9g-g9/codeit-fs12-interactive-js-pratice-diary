// AND와 OR 섞어 쓰기
let age = 20;
let hasLicense = true;

let canDrive = age >= 18 && hasLicense;
console.log(canDrive); // true

// 복잡한 조건
let isWeekend = true;
let hasWork = false;

let canRest = isWeekend || !hasWork;
console.log(canRest); // true

// 우선순위: && > ||
console.log(true || (false && false));
// true || (false && false)
// true || false
// true

// 괄호로 명확하게
console.log((true || false) && false);
// true && false
// false
