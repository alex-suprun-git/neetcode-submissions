class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        const sMap = new Map()
        const tMap = new Map()

        for(let i = 0; i < s.length; i++) {
            sMap.set(s[i], sMap.get(s[i]) + 1 || 1)
            tMap.set(t[i], tMap.get(t[i]) + 1 || 1)
        }

        for(let item of sMap) {
            // console.log(item[1])
            // console.log(tMap.get(item[0]))
            if(item[1] !== tMap.get(item[0])) return false
        }

        return true
    }
}
