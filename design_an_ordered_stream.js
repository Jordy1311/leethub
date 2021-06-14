/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
    let chunk = [];
    for(i=1; i<n+1; i++) {
        chunk.push(null);
    }
    this.chunk = chunk
    this.pointer = 0;
    this.n = n
};
/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.chunk[idKey - 1] = value
    
    let eval = [];
    for(i=this.pointer; i<this.n; i++) {
        if(this.chunk[i] === null) {
            break
        } else {
            eval.push(this.chunk[i]);
            this.pointer++
        }
    }

    return eval
};
/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */