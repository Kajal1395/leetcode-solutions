/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    function isPrefixAndSuffix(str1, str2) {
        function includesLetter(word1, word2) {
            if (word1.length > word2.length) return false;
            for (let i = 0; i < word1.length; i++) {
                if (word1[i] !== word2[i]) {
                    return false;
                }
            }
            return true;
        }
        let prefix = includesLetter(str1, str2);
        let suffix = includesLetter(
            str1.split("").reverse().join(""),
            str2.split("").reverse().join(""),
        );
        if (prefix && suffix) {
            return true;
        }
        return false;
    }
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }
    return count;
};