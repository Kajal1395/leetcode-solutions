/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    products.sort()
    let res = []
    let prefix = ''
    for (let i = 0; i < searchWord.length; i++) {
        prefix += searchWord[i]
        let low = 0
        let high = products.length - 1
        let ans = 0
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (products[mid] >= prefix) {
                ans = mid
                high = mid - 1
            } else {
                low = mid + 1
            }

        }
        let temp = []
        for (let i = ans; i < ans + 3 && i < products.length; i++) {
            if (products[i].startsWith(prefix)) {
                temp.push(products[i])
            }
        }
        res.push(temp)

    }
    return res
};