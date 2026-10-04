/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return s
    let ans = ''
    let maxLen = -Infinity
    function expand(left, right) {
        while (left >= 0 && right < s.length) {
            if (s[left] === s[right]) {
                right++
                left--
            } else {
                break
            }
            len = right - left - 1
            if (len > maxLen) {
                ans = s.slice(left + 1, right)
                maxLen = len
            }
        }
    }
    for (let k = 0; k < s.length; k++) {
        expand(k, k)
        expand(k, k + 1)
    }

    return ans

};