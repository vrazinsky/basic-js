class VigenereCipheringMachine {    
    constructor(direct)
    {
        this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'        
        this.direct = direct != false ? true : false;
        
    }

    encrypt(message, key) {                
       if (!message || !key)
            throw new Error();
        message =  message.toUpperCase();
        key =  key.toUpperCase();       
        var res = '';
        var keyidx = -1;
        for(var i = 0; i < message.length; i++){
            if (this.alpha.indexOf(message[i]) < 0){
                res += message[i];
                continue;
            }
            keyidx = (keyidx+1)%key.length;
            res += this.alpha[(this.alpha.indexOf(message[i]) + this.alpha.indexOf(key[keyidx]))%26];
        }        
        if (this.direct)
            return res;
        else 
            return res.split('').reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key)
            throw new Error();
        encryptedMessage =  encryptedMessage.toUpperCase();
        key =  key.toUpperCase();
        var res = '';
        var keyidx = -1;
        for(var i = 0; i < encryptedMessage.length; i++){
            if (this.alpha.indexOf(encryptedMessage[i]) < 0){
                res += encryptedMessage[i];
                continue;
            }
            keyidx = (keyidx+1)%key.length;
            res += this.alpha[((this.alpha.indexOf(encryptedMessage[i]) - this.alpha.indexOf(key[keyidx])) + 26)%26];
        }        
        if (this.direct)
            return res;
        else 
            return res.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
