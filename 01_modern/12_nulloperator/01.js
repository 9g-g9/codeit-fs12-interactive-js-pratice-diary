// null병합연산자 : ES2020
// null과 undefined만 체크하는 연산자

let count = 0;
let displayCount = count || 10;
console.log(displayCount); // 10 (0이 무시됨!)

let message = "";
let displayMessage = message || "내용 없음";
console.log(displayMessage); // 내용 없음 (빈 문자열 무시!)
