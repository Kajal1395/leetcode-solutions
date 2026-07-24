/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
    let low = 1
    let high = Math.max(...quantities)
    let ans = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let stores = 0
        for (let i = 0; i < quantities.length; i++) {
            stores += Math.ceil(quantities[i] / mid)
        }
        if (stores <= n) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans

};