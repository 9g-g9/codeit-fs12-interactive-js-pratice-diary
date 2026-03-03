function calculateTotal(price, quantity) {
  // 0개도 유효한 입력
  quantity = quantity ?? 1;
  return price * quantity;
}

console.log(calculateTotal(1000, 0)); // 0 ✅
console.log(calculateTotal(1000)); // 1000

// || 사용하면
// calculateTotal(1000, 0) → 1000 ❌
