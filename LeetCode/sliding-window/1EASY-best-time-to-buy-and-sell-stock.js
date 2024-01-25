// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

var maxProfit = function(prices) {
    let best = 0
    let lowest = prices[0]
    let highest = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i]
            highest = prices[i]
        } if (prices[i] > highest) {
            highest = prices[i]
            best = Math.max(highest - lowest, best)
        }
    }
    return best
};