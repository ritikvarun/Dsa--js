var maxProfit = function (prices) {
  let buy = 0;
  let sell = 0;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[sell] < prices[buy]) {
      buy = sell;
    } else {
      let profit = prices[sell] - prices[buy];
      max = Math.max(profit, max);
    }
    sell++;
  }
  return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
