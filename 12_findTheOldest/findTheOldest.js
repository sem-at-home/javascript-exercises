const findTheOldest = function(people) {
    return people.reduce((eldest, person) => getAge(eldest) > getAge(person) ? eldest : person )
};

function getAge(person) {
    return (person.yearOfDeath || 2024) - person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
