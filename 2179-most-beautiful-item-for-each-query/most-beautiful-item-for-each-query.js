/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    //sort by price if two price same then by beauty [[1,2],[2,4],[3,2],[3,5],[5,6]]
    //update beauty to maxbeauty till current position  can remove duplicate [[1,2],[2,4],[3,5],[5,6]]
    //res=[2,4,5,5,6,6]  
    items.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    let maxPrefix = -Infinity
    let prefixArr = items.map(item => {
        maxPrefix = Math.max(maxPrefix, item[1]);
        return [item[0], maxPrefix]
    })
    let res = []
    function getRes(target) {
        let low = 0
        let high = prefixArr.length - 1
        let ans = 0
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)

            if (prefixArr[mid][0] <= target) {
                ans = prefixArr[mid][1]
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        res.push(ans)
    }

    for (let q of queries) {
        getRes(q)
    }
    return res

};