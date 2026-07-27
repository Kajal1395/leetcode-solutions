/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    let low = 1
    let high = Math.max(...ranks) * cars * cars
    let ans = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let actualCars = 0
        for (let i = 0; i < ranks.length; i++) {
            actualCars += Math.floor(Math.sqrt(mid/ranks[i]))
        }
        if (actualCars >= cars) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }

    }
    return ans
};