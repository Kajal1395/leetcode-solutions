/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    //find peak
    let low = 0;
    let n = mountainArr.length();
    let high = n - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    if (mountainArr.get(high) === target) return high;
    //left side of slope Ascending
    let left = 0;
    let right = high - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mountainArr.get(mid) === target) return mid;
        if (mountainArr.get(mid) > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    //right side of slope descending
    let left1 = high + 1;
    let right1 = n - 1;
    while (left1 <= right1) {
        let mid = Math.floor((left1 + right1) / 2);
        if (mountainArr.get(mid) === target) return mid;
        if (mountainArr.get(mid) < target) {
            right1 = mid - 1;
        } else {
            left1 = mid + 1;
        }
    }
    return -1;
};