class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const table = {}

        for(const letter of s) {
            table[letter] = (table[letter] || 0) + 1
        }


        for(const letter of t) {
            if(!table[letter]) return false
            table[letter]--
        }

        return true
    }
}
