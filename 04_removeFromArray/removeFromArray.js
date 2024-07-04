const removeFromArray = function(array, ...items) {
    return array.filter(inItems)

    function inItems(value) { 
        return !items.includes(value) 
    }
};

// Do not edit below this line
module.exports = removeFromArray;
