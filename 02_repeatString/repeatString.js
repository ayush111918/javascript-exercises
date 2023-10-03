const repeatString = function(string,num) {
    let name='';
    if (num<0) return 'ERROR';
    while(num){
        name+=string;
        --num;
    }
    return name;
};

// Do not edit below this line
module.exports = repeatString;
