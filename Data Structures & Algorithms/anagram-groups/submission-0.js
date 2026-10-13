class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        let str=[]
        let str1=[]
        for (let i =0; i< strs.length; i++){
            str[i]= strs[i].split("").sort().join("")
        }
        for(let i =0; i<str.length ; i++){
            
            if(map.has(str[i])){
                map.get(str[i]).push(strs[i])
            }else{
            map.set(str[i], [strs[i]])
            }
            
        }
        for(let [key, value] of map){
            str1.push(map.get(key))
        }
        return str1
    }
}
