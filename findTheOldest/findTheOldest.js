const findTheOldest = function(people) {
    const oldest = people.reduce((a, b) => {
        const lastGuy = getAge(a.yearOfBirth, a.yearOfDeath);
        const nextGuy = getAge(b.yearOfBirth, b.yearOfDeath);
        return lastGuy < nextGuy ? b : a;
    });
}

const getAge = function(birth, death) {
    if(!death) {
        death = (new Date()).getFullYear();
    }
    return death - birth;
}

module.exports = findTheOldest
