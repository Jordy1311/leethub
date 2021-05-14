/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
    let output = [];
    let position = 0;
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for(i=0; i<s.length; i++) {
        if(letters.includes(s[i])) {
            position = letters.indexOf(s[i]);
            output.push(s[i])
        } else {
            let newPosition = position + parseInt(s[i]);
            output.push(letters.slice(newPosition, newPosition+1));
        }
    }
    return (output.join(''))
};