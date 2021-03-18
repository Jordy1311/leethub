/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    var nums = address.split(".");
    var output = nums.join("[.]");
    
    return output
};