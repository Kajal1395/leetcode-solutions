class Solution:
    def reverseWords(self, s: str) -> str:
        word = []
        a = s.split()
        n = len(a)
        for i in range(n - 1, -1, -1):
            word.append(a[i])
        return " ".join(word)
