const TRAITS = require('../data/traits');
// getter and setter - get properties sets the properties
const DEFAULT_PROPERTIES = {
    nickname: 'unamed',
    get birthdate() {
        return new Date()
    },

    get randomTraits() {
        const traits = [];

        TRAITS.forEach(trait => {
            const traitType = trait.type;
            const traitValues = trait.values;

            const traitValue = traitValues[
                Math.floor(Math.random() * traitValues.length)
            ];
             traits.push({ traitType, traitValue });
            });

        return traits;

    }
}

class Dragon {
    // constructor object = {} creating an object
    constructor({birthdate, nickname, traits} = {}){
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits

    }
}

module.exports = Dragon;