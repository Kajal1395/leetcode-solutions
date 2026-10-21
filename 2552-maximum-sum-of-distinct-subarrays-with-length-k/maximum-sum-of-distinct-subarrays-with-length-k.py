class Solution:
    def maximumSubarraySum(self, nums: list[int], k: int) -> int:
        start = 0
        end = 0
        n = len(nums)
        window = set()
        maxSum = 0
        windowsum = 0
        while end < n:
            while nums[end] in window:
                windowsum -= nums[start]
                window.remove(nums[start])
                start += 1
            windowsum += nums[end]
            window.add(nums[end])
            end += 1
            if len(window) == k:
                maxSum = max(maxSum, windowsum)
                windowsum -= nums[start]
               
                window.remove(nums[start])
                start += 1
        return maxSum
