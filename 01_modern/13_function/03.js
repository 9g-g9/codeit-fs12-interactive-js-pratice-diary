// 2개의 숫자와, 연산종류. 총 3개의 인풋을 입력받아서
// 연산하는 함수 작성

function calculate(num1, num2, operator) {
  // 연산종류 : 1(덧셈), 2(뺄셈), 3(곱셈), 4(나눗셈)
  switch (operator) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      if (num2 === 0) {
        return "0으로 나눌 수 없습니다!!!!";
      }
      return num1 / num2;
    default:
      return "1~4 사이의 숫자를 연산종류로 입력해주세요!";
  }
}

function calculateByIf(num1, num2, operator) {
  // 연산종류 : 1(덧셈), 2(뺄셈), 3(곱셈), 4(나눗셈)
  if (operator === 1) {
    // 덧셈
    return num1 + num2;
  } else if (operator === 2) {
    return num1 - num2;
  } else {
    return "1~4 사이의 숫자를 연산종류로 입력해주세요!";
  }
}

//

// 결과
// console.log(calculate(10, 3, 1)); // 13
// console.log(calculate(10, 3, 2)); // 7
// console.log(calculate(10, 3, 3)); // 30
// console.log(calculate(10, 3, 4)); // 3.333...
// console.log(calculate(3, 0, 4)); // 0으로 나눌 수 없습니다
// console.log(calculate(3, 2, 7)); // 1~4 사이의 연산종류를 입력해주세요
