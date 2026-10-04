/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length
    let start = 0
    let set = new Set()
    let maxLength = -Infinity
    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])) {
            set.delete(s[start])
            start++
        }
        set.add(s[end])
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength

};