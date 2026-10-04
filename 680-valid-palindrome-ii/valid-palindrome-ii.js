/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    function isPalindrome(start, end) {
        while (start <= end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++
            end--
        }
        return true;

    }
    let start = 0
    let end = s.length - 1
    while (start <= end) {
        if (s[start] !== s[end]) {
            return isPalindrome(start, end - 1) || isPalindrome(start + 1, end)
        }
        start++
        end--
    }
    return true
};