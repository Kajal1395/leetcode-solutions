/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
    let low = 0
    let high = removable.length - 1
    let ans = -1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let set = new Set()
        for (let i = 0; i <= mid; i++) {
            set.add(removable[i])
        }
        let q = 0
        let r = 0
        while (q < s.length && r < p.length) {
            if (set.has(q)) {
                q++
                continue
            }
            else if (s[q] === p[r]) {
                q++
                r++
            } else if (s[q] !== p[r]) {
                q++
            }
        }
        if (r !== p.length) {
            high = mid - 1

        } else {
            ans = mid
            low = mid + 1
        }
    }
    return ans + 1
};