const palindromes = function (sentence) {
    const cleanedSentence = sentence
        .toLowerCase()
        .split('')
        .filter(filterLettersAndNumbers)
        .join('')
    const reversedSentence = cleanedSentence.split('').toReversed().join('')
    return reversedSentence === cleanedSentence
};

function filterLettersAndNumbers(char) {
        return /[a-z0-9]/.test(char);
}

// Do not edit below this line
module.exports = palindromes;
