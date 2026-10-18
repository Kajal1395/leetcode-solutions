class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        freqmap = {}
        n = len(nums)
        for i in range(n):
            if nums[i] not in freqmap:
                freqmap[nums[i]] = 0
            freqmap[nums[i]] += 1
        freqmapS = dict(sorted(freqmap.items(), key=lambda item: item[1], reverse=True))

        return list(freqmapS.keys())[:k]
