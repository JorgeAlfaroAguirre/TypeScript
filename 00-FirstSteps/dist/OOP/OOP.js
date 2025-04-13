"use strict";
console.log("OOP.ts loaded");
console.log("🧱 1. Classes & Constructors");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.\n`;
    }
}
console.log("🔍 Creating an object (instance)");
const person = new Person("Carl", 27);
console.log(person.greet());
console.log("🐾 2. Static Properties and Custom Types");
class Pet {
    constructor(name, age, kind) {
        this.name = name;
        this.age = age;
        this.kind = kind;
        Pet.petCount++;
    }
    greet() {
        return `Hello, my pet is a ${this.kind}, his name is ${this.name}, and he is ${this.age} years old.\n`;
    }
    static getPetCount() {
        return `There are ${Pet.petCount} pets in total.\n`;
    }
}
Pet.petCount = 0;
console.log("🔍 Instances");
const pet1 = new Pet("Donut", 4, "cat");
const pet2 = new Pet("Princess Donut", 4, "cat");
const pet3 = new Pet("Princess Donut the Queen Anne Chonk", 4, "cat");
console.log(pet1.greet());
console.log("👪 3. Inheritance & Method Overriding");
class PetOwner extends Person {
    constructor(name, age, pet) {
        super(name, age);
        this.pet = pet;
    }
    greet() {
        return `Hi, I'm ${this.name}, and my pet is a ${this.pet.kind} named ${this.pet.name}\n`;
    }
    present() {
        return `${super.greet()}I have a ${this.pet.kind} named ${this.pet.name}, who is ${this.pet.age} years old.\n`;
    }
}
const PetOwner1 = new PetOwner("Carl", 27, pet1);
console.log(PetOwner1.greet());
console.log(PetOwner1.present());
console.log(Pet.getPetCount());
console.log("⚔️ Class with access modifiers");
class Crawler {
    constructor(name, hp, stamina, id) {
        this.name = name;
        this.hp = hp;
        this.stamina = stamina;
        this.id = id;
    }
    takeDamage(amount) {
        this.hp -= amount;
        return `${this.name} took ${amount} damage. Remaining HP: ${this.hp}`;
    }
    getStamina() {
        return this.stamina;
    }
}
const crawler = new Crawler("Throg", 100, 50, 1);
console.log(crawler.takeDamage(25));
console.log(`Crawler ID: ${crawler.id}`);
class Dog {
    constructor(name) {
        this.name = name;
        this._mood = "neutral";
    }
    get mood() {
        return `${this.name} feels ${this._mood}`;
    }
    set mood(value) {
        if (["happy", "sad", "angry", "neutral"].includes(value)) {
            this._mood = value;
        }
        else {
            console.log("Invalid mood");
        }
    }
}
const doggo = new Dog("Manu");
console.log(doggo.mood);
doggo.mood = "happy";
console.log(doggo.mood);
doggo.mood = "confused";
console.log("🧩 5. Interfaces");
class Character {
    constructor(name, level, hp) {
        this.name = name;
        this.level = level;
        this.hp = hp;
    }
    heal(amount) {
        this.hp += amount;
        return `${this.name} healed for ${amount}. Current HP: ${this.hp}`;
    }
    takeDamage(amount) {
        this.hp -= amount;
        if (this.hp < 0)
            this.hp = 0;
        return `${this.name} took ${amount} damage. Current HP: ${this.hp}`;
    }
}
const hero = new Character("Zuko", 1, 100);
console.log(hero.takeDamage(30));
console.log(hero.heal(20));
console.log("🧱 6. Abstract Classes and Methods");
class Vehicle {
    constructor(brand, passengers) {
        this.brand = brand;
        this.passengers = passengers;
        Vehicle.vehicleCount++;
        this.id = Vehicle.vehicleCount;
    }
    getId() {
        return this.id;
    }
    static getVehicleCount() {
        return Vehicle.vehicleCount;
    }
}
Vehicle.vehicleCount = 0;
class Car extends Vehicle {
    constructor(brand, passengers) {
        super(brand, passengers);
    }
    getInfo() {
        return `🚗 Car ID ${this.getId()} - Brand: ${this.brand}, Passengers: ${this.passengers}`;
    }
}
class Motorcycle extends Vehicle {
    constructor(brand, passengers) {
        super(brand, passengers);
    }
    getInfo() {
        return `🏍️ Motorcycle ID ${this.getId()} - Brand: ${this.brand}, Passengers: ${this.passengers}`;
    }
}
const car = new Car("Toyota", 5);
const moto = new Motorcycle("Yamaha", 2);
console.log(car.getInfo());
console.log(moto.getInfo());
console.log(`Total Vehicles: ${Vehicle.getVehicleCount()}`);
//# sourceMappingURL=OOP.js.map