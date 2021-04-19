/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    const condish = 'abcdefghijklmnopqrstuvwxyz'
    let bool = true
    for(i=0; i<condish.length; i++) {
        if(sentence.includes(condish[i])) {
            continue
           } else {
            bool = false
        }
    }
    return bool
};