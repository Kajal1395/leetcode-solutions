/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    let pairs = []
    let n = potions.length
    potions.sort((a, b) => a - b)
    for (let i = 0; i < spells.length; i++) {
        let low = 0
        let high = potions.length - 1
        let count = 0
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (spells[i] * potions[mid] >= success) {
                count = n - mid
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        pairs.push(count)

    }
    return pairs

};