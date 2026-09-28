class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}
var WordDictionary = function () {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!current.children[word[i]]) {
            current.children[word[i]] = new TrieNode();
        }
        current = current.children[word[i]];
    }
    current.endOfWord = true;
}



/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    function dfs(currentB, charInd) {
        if (charInd === word.length) {
            return currentB.endOfWord

        }
        if (word[charInd] !== "." && !currentB.children[word[charInd]]) {
            return false;
        }
        if (word[charInd] === '.') {
            let childList = currentB.children
            for (let child of Object.values(childList)) {
                if (dfs(child, charInd + 1)) {
                    return true
                }
            }
            return false
        }
        currentB = currentB.children[word[charInd]]
        return dfs(currentB, charInd + 1)

    }
    return dfs(this.root, 0)

};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */