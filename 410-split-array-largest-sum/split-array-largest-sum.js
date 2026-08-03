/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    let low = Math.max(...nums);
    let high = nums.reduce((acc, num) => acc + num, 0);
    let ans = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let countArr = 1;
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] <= mid) {
                sum += nums[i];
            } else {
                sum = nums[i];
                countArr++;
            }
        }
        if (countArr <= k) {
            high = mid - 1;
            ans = mid;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};