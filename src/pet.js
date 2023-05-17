const maximumFitness = 10;
const minimumFitness = 0;
const minimumHunger = 0;
const maximumHunger = 10;
const minimumAcceptableHunger = 5;
const minimumAcceptableFitness = 3;
const maximumAge = 30;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = minimumHunger;
    this.fitness = maximumFitness;
}

Pet.prototype = {
    get isAlive() {
        return this.age < maximumAge && this.hunger < maximumHunger && this.fitness > minimumFitness;     
    }
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.fitness + 4) <= maximumFitness ) {
        this.fitness += 4;
    } else {
        this.fitness = maximumFitness;
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.hunger -=3;
    if (this.hunger < 0) {
        this.hunger = 0;
    }
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if (this.fitness <= minimumAcceptableFitness && this.hunger >= minimumAcceptableHunger) {
        return "I am hungry AND I need a walk";
    }
    if (this.fitness <= minimumAcceptableFitness) {
        return "I need a walk";
    }
    if (this.hunger >= minimumAcceptableHunger) {
        return "I am hungry";
    }
    return "I feel great!";
}

module.exports = Pet;