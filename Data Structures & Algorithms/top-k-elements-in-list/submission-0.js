class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map= new Map()

        for(let ele of nums){ 
            map.set(ele,(map.get(ele) || 0)+1)
        }

        const arr =[...map]
        arr.sort((a, b)=>b[1]-a[1])
        
        return arr.slice(0,k).map((item)=>item[0])
        
        // console.log(map)
    }
}
