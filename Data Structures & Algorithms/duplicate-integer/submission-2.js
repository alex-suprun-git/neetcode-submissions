class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // opt1:

        const sortArr = nums.sort()

        for(let i = 1; i < sortArr.length; i++) {
            if(sortArr[i] === sortArr[i-1]) return true
        }    

        return false

    }
}
