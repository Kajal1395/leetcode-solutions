/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return ''
    let tmap = new Map()
    let smap = new Map()
    let ans = ''
    let minLen=Infinity
    for (let x of t) {
        tmap.set(x, (tmap.get(x) || 0) + 1)
    }
    let start = 0
    let end = 0
    let need = tmap.size
    while (end < s.length) {
        smap.set(s[end], (smap.get(s[end]) || 0) + 1)
        if (tmap.has(s[end]) && smap.get(s[end]) === tmap.get(s[end])) {
            need--
        }

        while (need === 0) {
            let len = end - start + 1
            if (len < minLen) {
                minLen = len
                ans = s.slice(start, end + 1)
            }

            if (tmap.has(s[start]) && smap.get(s[start]) === tmap.get(s[start])) {
                need++
            }
            smap.set(s[start], smap.get(s[start]) - 1)
            if (smap.get(s[start]) === 0) {
                smap.delete(s[start])
            }
            start++
        }
        end++

    }
    return ans

};