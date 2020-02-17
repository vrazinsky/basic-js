module.exports = function repeater(str, options) {
    
    var addition = '';
    if ('addition' in options){
        addition = options.addition;
        if (addition == null)
        addition = 'null'
    else if (addition == undefined)
        addition = 'undefined'
    else if (typeof addition != 'string')
        addition = addition.toString();
    }        
    if (str == null)
        str = 'null'
    else if (str == undefined)
        str = 'undefined'
    else if ( typeof str != 'string')
        str = str.toString();
    var separator = options.separator ? options.separator : '+';
    var additionSeparator = options.additionSeparator  ? options.additionSeparator : '|';
    var additionRepeatTimes = options.additionRepeatTimes  ? options.additionRepeatTimes  : 1;
    var repeatTimes = options.repeatTimes ? options.repeatTimes: 1;    
    var resAddition = [];
    if (addition && addition.length > 0){
        for(var i = 0; i < additionRepeatTimes; i++){
            resAddition.push(addition);
        }
    }    
    resAddition = resAddition.join(additionSeparator);    
    var resArr = []
    for(var i = 0; i < repeatTimes; i++){
        resArr.push(str + resAddition);
    }    
    return resArr.join(separator);
};
  