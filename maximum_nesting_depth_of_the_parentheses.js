/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let parenthCount = 0
    let deepestParenth = 0
    
    for(i=0; i<s.length; i++) {
        if(s[i] === "(") {
            parenthCount++
        } else if(s[i] === ")") {
            parenthCount--
        }
        if(parenthCount > deepestParenth) {
            deepestParenth = parenthCount;
        }
    }
    return deepestParenth
};