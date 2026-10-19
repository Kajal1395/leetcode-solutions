class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = 0
        end = 0
        longest = 0
        seen = {}
        while end < len(s):
            if s[end] in seen:
                while s[end] in seen:
                    del seen[s[start]]
                    start += 1
            seen[s[end]] = 1
            end += 1
            longest = max(longest, end - start)
        return longest
