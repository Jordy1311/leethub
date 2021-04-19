/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    let newArr = []
    for(i=0; i<nums.length/2; i++) {
        for(j=0; j<nums[2*i]; j++) {
            newArr.push(nums[2*i+1])
        }
    }
    return newArr
};