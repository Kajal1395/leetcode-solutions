/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    let low = 1
    let high = Math.max(...candies)
    let ans = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let count = 0
        for (let i = 0; i < candies.length; i++) {
            count += Math.floor(candies[i] / mid)
        }
        if (count >= k) {
            ans = mid
            low = mid + 1

        } else {
            high = mid - 1
        }

    }
    return ans
};