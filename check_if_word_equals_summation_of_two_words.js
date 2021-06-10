/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let summicate = (word) => {
        let alphaVals = "abcdefghij";
        let wordNV = "";
        for(i=0; i<word.length; i++) {
            let val = alphaVals.indexOf(word[i]);
            wordNV += val
        }
        return parseInt(wordNV)
    }
    
    let firstWordNV = summicate(firstWord);
    let secondWordNV = summicate(secondWord);
    let targetWordNV = summicate(targetWord);
    
    if((firstWordNV + secondWordNV) === targetWordNV) {
        return true
    } else {
        return false
    }
};