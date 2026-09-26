/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    function isPrefix(word) {
        if (word.length < pref.length) return false;
        for (let i = 0; i < pref.length; i++) {
            if (word[i] !== pref[i]) {
                return false;
            }
        }
        return true;
    }
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (isPrefix(words[i])) {
            count++;
        }
    }
    return count;
}