/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let output = []
    for(i=0; i<nums.length; i++) {
        let count = 0
        for(j=0; j<nums.length; j++) {
            if(nums[i] > nums[j]) {
                count++
            }
        }
        output.push(count)
    }
    return output
};

// Sort nums, return in new arr of nums[i].index
    // let sortedNums = Array.from(nums.sort((n1, n2) => n2 - n1))
    // console.log(sortedNums)
    // return nums