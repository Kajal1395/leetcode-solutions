/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.prefixArray = [];
    let sum = 0;
    for (let i = 0; i < w.length; i++) {
        sum += w[i];
        this.prefixArray.push(sum);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const target =
        Math.floor(Math.random() * this.prefixArray[this.prefixArray.length - 1]) + 1;
    let ans = -1;
    let low = 0;
    let high = this.prefixArray.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (this.prefixArray[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */