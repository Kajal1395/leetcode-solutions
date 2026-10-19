class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        res = {}
        res[0] = 1
        sum = 0
        count = 0
        for i in range(len(nums)):
            sum += nums[i]
            diff = sum - k
            if diff in res:
                count += res[diff]
            res[sum] = (res.get(sum) or 0) + 1
        return count
