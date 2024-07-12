const fibonacci = function(input) {

    const number = Number(input)

    if (number === 0) return 0 
    if (number < 0) return "OOPS"

    let oldValue = 1
    let newValue = 1
    let fibonacci = 1
    for ( let i = 2; i < number; i++) {
        fibonacci = oldValue + newValue
        oldValue = newValue
        newValue = fibonacci
    }
    return fibonacci
};


// Do not edit below this line
module.exports = fibonacci;
