const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });

    it('has an initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });

    it('has an initial fitness of 10', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido'); 
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it('this method should increase the hunger by 5', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it('this method should decrease the fitness by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  it('throws an error if pet is not alive', () => {
    const pet = new Pet('fido');
    pet.age = 30;
    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
});

  describe('Walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
      pet.fitness = 4
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });

    it('increases fitness to a maximum of 10', () => {
      const pet = new Pet('fido');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    it('throws an error if pet is not alive', () => {
      const pet = new Pet('fido');
      pet.age = 30;
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('Feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');
      pet.hunger = 6;
      pet.feed()
      expect(pet.hunger).toEqual(3);
    });

    it('ensure pet hunger level should not drop below 0', () => {
      const pet = new Pet('fido');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });

    it('throws an error if pet is not alive', () => {
      const pet = new Pet('fido');
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('checkUp', () => {
    it(`if pet's fitness is 3 or less, return "I need a walk"`, () => {
      const pet = new Pet('fido');
      pet.fitness = 3;
      expect(pet.checkUp()).toEqual("I need a walk");
    });

    it(`if pet's hunger is 5 or more, return "I am hungry"`, () => {
      const pet = new Pet('fido');
      pet.hunger = 5;
      expect(pet.checkUp()).toEqual("I am hungry");
    });

    it(`if pet's fitness is 3 or less, AND pet's hunger is 5 or more, return "I am hungry AND I need a walk"`, () => {
      const pet = new Pet('fido');
      pet.fitness = 1;
      pet.hunger = 9;
      expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });

    it(`if neither are true, return "I feel great!"`, () => {
      const pet = new Pet('fido');
      pet.fitness = 9;
      pet.hunger = 1;
      expect(pet.checkUp()).toEqual("I feel great!");
    });

    it('throws an error if pet is not alive', () => {
      const pet = new Pet('fido');
      pet.age = 30;
      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('isAlive', () => {
    it('if pets fitness is 0 or less, return false', () => {
      const pet = new Pet ('Fido');
      pet.fitness = 0;
      pet.hunger = 10;
      pet.age = 30;
      expect(pet.isAlive).toEqual(false);
    });

    it('if pets hunger is 10 or more, return false', () => {
      const pet = new Pet ('Fido');
      pet.fitness = 0;
      pet.hunger = 11;
      pet.age = 30;
      expect(pet.isAlive).toEqual(false);
    });

    it('if pets age is 30 or more, return false', () => {
      const pet = new Pet ('Fido');
      pet.fitness = 0;
      pet.hunger = 5;
      pet.age = 31;
      expect(pet.isAlive).toEqual(false);
    });

    it('if none of the above conditions are met, return true', () => {
      const pet = new Pet ('Fido');
      pet.fitness = 1;
      pet.hunger = 9;
      pet.age = 29;
      expect(pet.isAlive).toEqual(true);
    });
  });

  describe('haveBaby', () => {
    it('create a parent pet instance of an object', () => {
      const parent = new Pet('Dave');
      expect(parent instanceof Pet).toBe(true);
    });

    it('should call method, add a child pet to the parent', () => {
      const parent = new Pet('Dave');
      parent.haveBaby('Amelia');
      expect(parent.children[0].name).toBe('Amelia');
    });
    
    it('Assert that the parent pets children property is an array, where the first element is an instance of Pet with a name property of Billy', () => {
      const parent = new Pet('Dave');
      parent.haveBaby('Billy');
      expect(parent.children).toEqual(expect.any(Array));
      expect(parent.children.length).toBe(1);
      expect(parent.children[0].name).toBe('Billy');
    });
});