/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
    let graph = new Map()
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    for (let edge of edges) {
        let a = edge[0];
        let b = edge[1];
        graph.get(a).push(b);
        graph.get(b).push(a);
    }
    function traverse(root, parent) {
        let time = 0
        for (let child of graph.get(root)) {
            if (child === parent) continue
            time += traverse(child, root)

        }
        if (parent !== -1 && (hasApple[root] || time > 0)) {
            time += 2
        }
        return time
    }
    return traverse(0, -1)

};