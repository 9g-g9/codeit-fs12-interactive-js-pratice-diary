// 무거운 함수
function heavyCalculation() {
  console.log("무거운 계산 실행!");
  return 100;
}

let isEnabled = false;

// AND: isEnabled가 false면 함수 실행 안 됨
let result = isEnabled && heavyCalculation();
console.log(result); // false (함수 실행 안 됨)

isEnabled = true;
result = isEnabled && heavyCalculation();
// 무거운 계산 실행!
console.log(result); // 100
