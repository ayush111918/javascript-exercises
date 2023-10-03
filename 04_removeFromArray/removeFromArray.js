const removeFromArray = function(array,...list) {

    
    const newarray=array.filter((item) => {
        return !list.includes(item)
            
    });
    // for (const item of array) {
    //     let present=false;
    //     for (const i of list) {
    //         if (item === i) {
    //             present=true;
    //             break;
    //         }
    //     }
    //     if (present==false)   
    //         newarray.push(item);

        
    // }
    // array.forEach((item) => {
    //     if (!list.includes(item))
    //         newarray.push(item);
    // });
    return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
