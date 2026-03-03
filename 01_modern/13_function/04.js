// 숫자 배열을 input으로 받아서 모든 요소의 합을 반환하는 함수 getSum을 작성하세요.
// 단, 입력된 숫자가 100을 넘어가는 것이 있다면, 그 즉시 종료해주세요.

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      return;
    }
    sum += arr[i];
  }
  return sum;
}

const result = getSum([1, 2]);
console.log(result);
