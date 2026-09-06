/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    let map = new Map()
    for (let i = 0; i < n; i++) {
        map.set(i, [])
    }
    for (let i = 0; i < n; i++) {
        if (manager[i] !== -1) {
            map.get(manager[i]).push(i)
        }
    }
    function dfs(manager) {
        if (!map.get(manager)) return 0
        let maxVal = 0
        for (let employee of map.get(manager)) {
            maxVal = Math.max(dfs(employee), maxVal)

        }
        return informTime[manager] + maxVal
    }
    return dfs(headID)
    // return 1

};