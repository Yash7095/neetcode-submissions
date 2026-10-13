class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const map = new Map()
        for(let i=0;i<strs.length; i++){
            map.set(strs[i],strs[i].length+"#")
        }
        // console.log(map)
        let str = "";
        for(let word of strs){
            if(map.has(word)){
                str += map.get(word)+word;
            }
            // console.log(str)
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []
        for(let i = 0; i< str.length; i++){
            let number= ""
            while (str[i]!=="#") {
                number += str[i]    
                i++;     
            }

            let len = Number(number)
            i++;

            let word= str.slice(i, i+len)
            arr.push(word)

            i +=len - 1
            // console.log(len)
        }
        return arr
    }
}
