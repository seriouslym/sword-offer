import assert from "node:assert";

/**
 * 不含重复字符的最长字串
 * @param s
 */
const lengthOfLongestSubstring = (s: string) => {
    let l = 0, r = 0
    let win: Map<string, number> = new Map()
    let res = 0
    while (r < s.length) {
        win.set(s[r], (win.get(s[r]) || 0) + 1)
        while (win.get(s[r])! > 1) {
            win.set(s[l], win.get(s[l])! - 1)
            if (win.get(s[l]) === 0) {
                win.delete(s[l])
            }
            l++
        }
        res = Math.max(res, r - l + 1)
        r++
    }
    return res
}

assert.equal(lengthOfLongestSubstring("abcabcbb"), 3)
assert.equal(lengthOfLongestSubstring("pwwkew"), 3)
assert.equal(lengthOfLongestSubstring("abc"), 3)
assert.equal(lengthOfLongestSubstring("dvdf"), 3)
assert.equal(lengthOfLongestSubstring("aab"), 2)
assert.equal(lengthOfLongestSubstring("abba"), 2)
assert.equal(lengthOfLongestSubstring(""), 0)
assert.equal(lengthOfLongestSubstring(" "), 1)
console.log('lengthOfLongestSubstring pass')


/**
 * 最短覆盖字串
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * lc76
 */
const minWindow = (s: string, t: string) => {
    let l = 0, r = 0, res = "", validCount = 0
    let win: Map<string, number> = new Map()
    let tMap = Array.from(t).reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1)
        return acc
    }, new Map() as Map<string, number>)
    while (r < s.length) {
        const c = s[r]
        win.set(c, (win.get(c) || 0) + 1)
        if (win.get(c) === tMap.get(c)) {
            validCount++
        }
        // window内元素覆盖字串t 进行收缩 尝试更短的字串
        while (l <= r && validCount === tMap.size) {
            const lChar = s[l]
            win.set(lChar, win.get(lChar)! - 1)
            if (tMap.has(lChar) && win.has(lChar) && win.get(lChar)! < tMap.get(lChar)!) {
                validCount--
            }
            if (win.get(lChar) === 0) {
                win.delete(lChar)
            }
            if ((r - l + 1) < res.length || res === '') {
                res = s.slice(l, r + 1)
            }
            l++
        }
        r++
    }
    return res
};
assert.equal(minWindow("ADOBECODEBANC", "ABC"), 'BANC')
assert.equal(minWindow("a", "a"), 'a')
assert.equal(minWindow("cabwefgewcwaefgcf", "cae"), "cwae")
assert.equal(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"), "abbbbbcdd")

