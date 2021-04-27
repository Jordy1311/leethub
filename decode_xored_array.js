/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let decodedCode = [];
    decodedCode.push(first);
    for(i=0; i<encoded.length; i++) {
        let newDigit = encoded[i] ^ decodedCode[i];
        if(newDigit > 0) {
            decodedCode.push(newDigit)
        } else {
            decodedCode.push(Math.abs(newDigit))
        }
    }
    return decodedCode
};