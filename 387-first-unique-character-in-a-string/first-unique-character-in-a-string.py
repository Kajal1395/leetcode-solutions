class Solution:
    def firstUniqChar(self, s: str) -> int:
        freqmap = {}
        for i in range(len(s)):
            freqmap[s[i]] = freqmap.get(s[i], 0) + 1
        for i in range(len(s)):
            if freqmap.get(s[i]) == 1:
                return i
        return -1
