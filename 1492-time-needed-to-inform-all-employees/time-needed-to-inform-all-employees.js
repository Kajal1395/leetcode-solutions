/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    let employeeMap = new Map()
    for (let i = 0; i < n; i++) {
        if (!employeeMap.has(manager[i])) {
            employeeMap.set(manager[i], [])
        }
        employeeMap.get(manager[i]).push(i)
    }
    function dfs(manager) {
        let maxTime = 0
        let employeeSub = employeeMap.get(manager) || []
  
        if (employeeSub.length < 1) return 0
        for (let sub of employeeSub) {
            let res = dfs(sub)
            maxTime = Math.max(res, maxTime)
        }
        return informTime[manager] + maxTime
    }
    return dfs(headID)

};