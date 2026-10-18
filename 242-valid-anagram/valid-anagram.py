class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        tmap = {}
        m = len(s)
        n = len(t)
        for i in range(n):
            if t[i] not in tmap:
                tmap[t[i]] = 0
            tmap[t[i]] += 1
        print(tmap, "map")
        smap = {}
        for i in range(m):
            if s[i] not in smap:
                smap[s[i]] = 0
            smap[s[i]] += 1

        for key, value in tmap.items():
            print(smap, tmap)
            if smap.get(key, 0) != value:
                return False
        return True
