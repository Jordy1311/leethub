/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let output = 0;
    for(i=0; i<stones.length; i++){
        for(j=0; j<jewels.length; j++){
            if(stones[i] === jewels[j]) {
            output++;
            };
        };
    };
    return output
};