class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        res = []
        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            start = i + 1
            end = len(nums) - 1
            target = -nums[i]
            while start < end:
                sumval = nums[start] + nums[end]
                if sumval == target:
                    res.append([nums[i], nums[start], nums[end]])
                    start += 1
                    end -= 1
                    while start < end and nums[start] == nums[start - 1]:
                        start += 1
                    while start < end and nums[end] == nums[end + 1]:
                        end -= 1
                elif sumval < target:
                    start += 1
                else:
                    end -= 1
        return res
