class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        n = len(nums)
        leftPrefix = [1] * n
        rightPrefix = [1] * n
        for i in range(1, n):
            leftPrefix[i] = leftPrefix[i - 1] * nums[i - 1]

        for i in range(n - 2, -1, -1):
            rightPrefix[i] = rightPrefix[i + 1] * nums[i + 1]

        print(leftPrefix, "left", rightPrefix)
        res = []
        for i in range(n):
            res.append(leftPrefix[i] * rightPrefix[i])
        return res
