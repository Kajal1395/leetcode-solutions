/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let memo = new Map()

    function count(start, end) {
        if (start > end) return 1
        let key = `${start}${end}`
        if (memo.has(key)) {
            return memo.get(key)
        }
        let countVal = 0
        for (let i = start; i <= end; i++) {
            let left = count(start, i - 1)
            let right = count(i + 1, end)
            countVal += (left * right)
        }
        memo.set(key, countVal)
        return countVal
    }
    return count(1, n)


};