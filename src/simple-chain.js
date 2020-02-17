const chainMaker = {  
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    var obj = Object.assign({}, this);   
    obj.arr = [...this.arr]
    obj.arr.push(value);
    return obj;
  },
  removeLink(position) {
    position = Number(position);
    if (Number.isNaN(position) || position <= 0 || position > this.arr.length)
      throw new Error();      
      var obj = Object.assign({}, this);   
      obj.arr = [...this.arr]
    obj.arr.splice(position-1,1);    
    return obj;
  },
  reverseChain() {
    var obj = Object.assign({}, this);      
    obj.arr = [...this.arr]
    obj.arr = obj.arr.reverse();
    return obj;
  },
  finishChain() {   
    var res = this.arr.map(el =>  {return '( ' + el + ' )'}).join('~~');
    this.arr = [] 
    return res;
  }
};

module.exports = chainMaker;
