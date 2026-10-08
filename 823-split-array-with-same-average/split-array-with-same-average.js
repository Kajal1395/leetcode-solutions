/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
    const n = nums.length;
    const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    
    // Memoization for subsets
    const memo = new Map();
    
    // Function to check if there is a subset of size `size` with sum `target`
    function canFormSubset(size, target, start) {
        if (size === 0) {
            return target === 0;
        }
        if (size > n - start) {
            return false; // Can't form a subset of size `size` if not enough elements
        }
        
        const key = `${size}-${target}-${start}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        let result = false;
        for (let i = start; i < n; i++) {
            if (nums[i] <= target) {
                result = canFormSubset(size - 1, target - nums[i], i + 1);
            }
            if (result) break;
        }

        memo.set(key, result);
        return result;
    }

    // Try every possible subset size from 1 to n-1
    for (let size = 1; size <= n / 2; size++) {
        if ((totalSum * size) % n === 0) {
            const target = (totalSum * size) / n;
            if (canFormSubset(size, target, 0)) {
                return true;
            }
        }
    }

    return false;
};