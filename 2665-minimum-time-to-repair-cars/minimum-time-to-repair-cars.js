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
        let carsDone = 0
        for (let i = 0; i < ranks.length; i++) {
            carsDone += Math.floor(Math.sqrt(mid / ranks[i]))
        }
        console.log(carsDone, mid)
        if (carsDone >= cars) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
};