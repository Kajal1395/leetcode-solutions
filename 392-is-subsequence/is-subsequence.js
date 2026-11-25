/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sp = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[sp] === t[i]) {
            sp++;
        }
    }
    return sp === s.length;
};