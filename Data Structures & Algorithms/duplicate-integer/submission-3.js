class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // opt2

        const uniqueNumsSet = new Set(nums)

        return uniqueNumsSet.size !== nums.length 
    }
}
