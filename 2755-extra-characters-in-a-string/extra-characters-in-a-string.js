/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}
var minExtraChar = function (s, dictionary) {
    let root = new TrieNode();
    function insert(word) {
        let current = root;
        for (let i = 0; i < word.length; i++) {
            if (!current.children[word[i]]) {
                current.children[word[i]] = new TrieNode();
            }
            current = current.children[word[i]];
        }
        current.endOfWord = true;
    }
    for (let word of dictionary) {
        insert(word);
    }
    function findWords(i) {
        let current = root;
        let j = i;
        let nextIndices = [];
        while (j < s.length && current.children[s[j]]) {
            current = current.children[s[j]];
            j++;
            if (current.endOfWord) {
                nextIndices.push(j);
            }
        }
        return nextIndices;
    }
    let memo = new Array(s.length).fill(undefined);

    function dfs(ind) {
        if (ind === s.length) return 0;
        if (memo[ind] !== undefined) {
            return memo[ind];
        }
        let minExtra = Infinity;
        minExtra = Math.min(1 + dfs(ind + 1), minExtra);
        let nextIndices = findWords(ind);
        for (let next of nextIndices) {
            minExtra = Math.min(dfs(next), minExtra);
        }
        memo[ind] = minExtra;
        return minExtra;
    }
    return dfs(0);
};