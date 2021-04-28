/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    // MY SOLUTION
    // let fullWord1 = '';
    // let fullWord2 = '';
    // word1.forEach(word => fullWord1 += word);
    // word2.forEach(word => fullWord2 += word);
    // if(fullWord1 === fullWord2) {
    //     return true
    // } else {
    //     return false
    // }
    
    // MUCH FASTER AND RATHER OBVIOUS SOLUTION FOUND IN DISCUSSIONS
    return word1.join('') === word2.join('')    
};