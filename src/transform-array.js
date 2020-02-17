module.exports = function transform(arr) {    
    if (!Array.isArray(arr))
        throw new Error();
    var res = [];
    var com = null;
    for(var i = 0; i < arr.length; i++){
        var el = arr[i]
        if (el === '--discard-next'){
            com = el;
            continue;
        }
        if (el === '--discard-prev'){
            res.pop();
            continue;
        }
        if (el === '--double-next'){
            com = el;
            continue;
        }
        if (el === '--double-prev'){
            if (i > 0)
                res.push(arr[i-1]);
            continue;
        }
        if (com == '--discard-next'){
            com = null;
            continue;            
        }
        if (com == '--double-next'){
            res.push(arr[i]);
            res.push(arr[i]);
            com = null;
            continue;            
        }
        res.push(arr[i]);        
    }
    return res;
};
