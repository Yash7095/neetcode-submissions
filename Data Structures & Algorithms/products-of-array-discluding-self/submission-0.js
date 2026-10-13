class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // const map = new Map()
        // for(let i=0; i< nums.length; i++){
        //     map.set(i, nums[i])
        // }
        // console.log(map)
        let arr =[]
        let prefix = 1
        for(let i=0; i< nums.length; i++){
            arr[i] = prefix;
            prefix = prefix * nums[i]
        }
        // console.log(arr)
        
        let suffix = 1
        for(let i= nums.length - 1; i>=0; i--){
            arr[i] = arr[i]* suffix
            suffix = suffix * nums[i]
        }
        // console.log(arr)
        return arr
    }
}
