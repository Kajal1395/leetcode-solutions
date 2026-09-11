/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {

    let visited = new Set()
    function dfs(node) {
        if (node === -1) return
        if (visited.has(node)) return false
        visited.add(node)
        dfs(leftChild[node])
        dfs(rightChild[node])
    }
    let parent = new Array(n).fill(-1)
    for (let i = 0; i < n; i++) {
        // I'm at node i
        //       ↓
        // I found child 1
        //       ↓
        // Does child 1 already have a parent?
        //       ↓
        // No → give child 1 parent i
        if ((leftChild[i] !== -1 && parent[leftChild[i]] !== -1) || (rightChild[i] !== -1 && parent[rightChild[i]] !== -1)) return false
        if (leftChild[i] !== -1) {
            parent[leftChild[i]] = i
        }
        if (rightChild[i] !== -1) {
            parent[rightChild[i]] = i
        }
    }
    let res = []
    for (let i = 0; i < n; i++) {
        if (parent[i] === -1) {
            res.push(i)
        }
    }
    let rootNode;
    if (res.length === 1) {
        rootNode = res[0]
    } else {
        return false
    }
    dfs(rootNode)
    return visited.size === n

};