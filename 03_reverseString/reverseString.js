const reverseString = function(word) {
    // let final_string='';
    // const size=word.length;
    // for (let i = size-1; i >= 0; i--) {
    //     final_string += word[i];
        
    // }

    return word.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
