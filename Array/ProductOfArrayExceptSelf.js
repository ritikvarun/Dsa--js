function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);
  // step1 : left product
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }
  // step2 : right product
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return result;
}
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
