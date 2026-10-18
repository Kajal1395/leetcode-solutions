class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        seen = {}
        n = len(strs)
        res = []
        for i in range(n):
            sortedstr = "".join(sorted(strs[i]))
            if sortedstr not in seen:
                seen[sortedstr] = []
            seen[sortedstr].append(strs[i])

        for key, value in seen.items():
            res.append(value)
        return res
