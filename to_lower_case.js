/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let output = [];
    for (i=0; i<s.length; i++) {
        let ASCII = s.charCodeAt(i)
        if (ASCII >= 65 && ASCII <= 90) {
            output.push(String.fromCharCode(ASCII+32))
        }
        else {
            output.push(s[i]);
        }
    }
    return output.join("");
};