/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const minPrefix = Array.from(prices.length).fill(0)
    let minsofar = prices[0]
    let maxProfit = -Infinity
    for (let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(prices[i] - minsofar, maxProfit)
        minsofar = Math.min(prices[i], minsofar)

    }
    return maxProfit === -Infinity ? 0 : maxProfit

};