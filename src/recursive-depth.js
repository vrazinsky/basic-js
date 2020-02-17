module.exports = class DepthCalculator {
    
    calculateDepth(arr, cur) {
        var max = 0;
        if (cur == undefined)
            cur = 0;
        if (!Array.isArray(arr))
            return cur;
        if (arr.length == 0)
            return cur+1;
        for(var i = 0; i < arr.length; i++){
             var pmax = this.calculateDepth(arr[i], cur+1)
            if (max < pmax)
                max = pmax;
        }
        return max;
    }
};