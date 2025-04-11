"use strict";
class Character {
    constructor(id, name, level, hp) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.hp = hp;
    }
    showInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Level: ${this.level}, HP: ${this.hp}`;
    }
    levelUp() {
        this.level++;
        return `${this.name} leveled up! Now at level ${this.level}.`;
    }
    takeDamage(amount) {
        this.hp = this.hp - amount;
        if (this.hp < 0) {
            this.hp = 0;
            return `${this.name} is dead! HP cannot go below 0.`;
        }
        return `${this.name} changed HP by ${amount}. Now at ${this.hp} HP.`;
    }
    heal(amount) {
        this.hp = this.hp + amount;
        return `${this.name} healed by ${amount}. Now at ${this.hp} HP.`;
    }
}
const character1 = new Character(1, "Warrior", 1, 100);
console.log(character1.showInfo());
console.log(character1.levelUp());
console.log(character1.levelUp());
console.log(character1.takeDamage(60));
console.log(character1.takeDamage(100));
function isCharacter(input) {
    if (input instanceof Character) {
        return `this is a character: ${input.name}`;
    }
    else {
        return "This is not a character";
    }
}
console.log(isCharacter(character1));
console.log(isCharacter("papa"));
console.log(character1.heal(10));
class Pet {
    constructor(id, name, nickname, type) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.type = type;
        this.owner = "My Pets";
        Pet.petArmy++;
        this.armyNumber = Pet.petArmy;
    }
    sound() {
        if (this.type.toLowerCase() === "cat") {
            return `${this.name} says meow!`;
        }
        else if (this.type.toLowerCase() === "dog") {
            return `${this.name} says woof!`;
        }
        else {
            return `${this.name} is a ${this.type}.`;
        }
    }
    getArmyDetails() {
        return `This is ${this.name} and this is my pet army: ${this.armyNumber}, and the total number of pets is: ${Pet.petArmy}`;
    }
    static getArmy() {
        return `The total number of pets is: ${Pet.petArmy}`;
    }
    getNickname() {
        return this.nickname;
    }
    setNickname(newNickname) {
        this.nickname = newNickname;
    }
}
Pet.petArmy = 0;
const pet1 = new Pet(1, "Sophie", "Fatty", "Cat");
const pet2 = new Pet(2, "Manu", "Grumpie", "Dog");
const pet3 = new Pet(3, "Rat", "Rat", "Rat");
console.log(pet1.sound());
console.log(pet2.sound());
console.log(pet3.sound());
console.log(pet1.getNickname());
console.log(pet1.setNickname("Big Fatty"));
console.log(pet1.getNickname());
console.log(pet1.getArmyDetails());
console.log(pet2.getArmyDetails());
//# sourceMappingURL=OOP.js.map