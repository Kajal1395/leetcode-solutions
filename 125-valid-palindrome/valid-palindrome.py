import re


class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned = ""
        for i in range(len(s)):
            if s[i].isalnum():
                cleaned += s[i].lower()
        print(cleaned, "clean")
        return cleaned == cleaned[::-1]
