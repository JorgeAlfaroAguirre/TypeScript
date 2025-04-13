"use strict";
console.log("OOP");
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
console.log("⚔️ 4. Access Modifiers, Getters, Setters, and the `this` Keyword");
class Crawler extends Person {
    constructor(name, age, _hp, id) {
        super(name, age);
        this._hp = _hp;
        this.id = id;
    }
    greet() {
        return `Hello, I'm ${this.name}, and I'm a crawler.\n`;
    }
    takeDamage(amount) {
        this._hp -= amount;
        return `${this.name} took ${amount} damage. Remaining HP: ${this._hp}`;
    }
    get hp() {
        return this._hp;
    }
    set hp(value) {
        this._hp = value;
    }
    damage(value) {
        if (value < 0) {
            console.error("Damage cannot be negative.");
            return;
        }
        this._hp -= value;
        return `${this.name} took ${value} damage. Remaining HP: ${this._hp}`;
    }
}
const crawler = new Crawler("Carl", 27, 100, 50);
console.log(crawler.takeDamage(25));
console.log(`Crawler ID: ${crawler.id}`);
console.log("🧩 5. Interfaces");
class CatCrawler extends Pet {
    constructor(name, age, kind, title, petOwner) {
        super(name, age, kind);
        this.title = title;
        this.petOwner = petOwner;
    }
    miaow() {
        return `No, ${this.petOwner.name}!`;
    }
    scratch() {
        return `I scratch ${this.petOwner.name} because I'm a ${this.kind} and ${this.boast()}`;
    }
    boast() {
        return `I am ${this.title}!`;
    }
}
const princessDonut = new CatCrawler("Donut", 4, "cat", "Princess", crawler);
console.log(princessDonut.miaow());
console.log(princessDonut.scratch());
console.log("🧱 6. Abstract Classes & Methods");
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