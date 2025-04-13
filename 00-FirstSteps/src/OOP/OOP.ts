console.log("OOP");

// 🧱 1. Classes & Constructors
console.log("🧱 1. Classes & Constructors");

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.\n`;
  }
}

// 🔍 Creating an object (instance)
console.log("🔍 Creating an object (instance)");

/*
  In Object-Oriented Programming (OOP), when we use the `new` keyword with a class,
  we create a specific object known as an "instance" of that class.

  This instance is a unique object that contains its own data,
  based on the structure and behavior defined by the class.

  🔎 This section is shown separately to:
  ✅ Demonstrate how to create and use an instance from a class.
  ✅ Emphasize that instance methods (like `greet()`) are accessed through objects.
  ✅ Prepare the reader to understand the difference between instance and static methods later.
*/

const person = new Person("Carl", 27); // This is an instance of the Person class
console.log(person.greet()); // Calling an instance method

// 🐾 2. Static Properties and Custom Types
console.log("🐾 2. Static Properties and Custom Types");

type Kind = "cat" | "dog" | "fish" | "other";

class Pet {
  static petCount = 0; // Static property shared by all instances

  constructor(public name: string, public age: number, public kind: Kind) {
    Pet.petCount++; // Increment static counter when a new Pet is created
  }

  greet(): string {
    return `Hello, my pet is a ${this.kind}, his name is ${this.name}, and he is ${this.age} years old.\n`;
  }

  static getPetCount(): string {
    return `There are ${Pet.petCount} pets in total.\n`;
  }
}

// 🔍 Instances
console.log("🔍 Instances");

const pet1 = new Pet("Donut", 4, "cat");
const pet2 = new Pet("Princess Donut", 4, "cat");
const pet3 = new Pet("Princess Donut the Queen Anne Chonk", 4, "cat");

console.log(pet1.greet());

/*
  💡 Unlike instance methods (like .greet()), static methods are called directly on the class itself.

  For example:
  - pet1.greet() → called on the instance
  - Pet.getPetCount() → called on the class

  Static methods are often used for class-level utilities, counters, or factory methods.
*/

// 👪 3. Inheritance & Method Overriding
console.log("👪 3. Inheritance & Method Overriding");

class PetOwner extends Person {
  pet: Pet;

  constructor(name: string, age: number, pet: Pet) {
    super(name, age); // Call the constructor from the parent class (Person)
    this.pet = pet;
  }

  override greet(): string {
    return `Hi, I'm ${this.name}, and my pet is a ${this.pet.kind} named ${this.pet.name}\n`;
  }

  present(): string {
    return `${super.greet()}I have a ${this.pet.kind} named ${
      this.pet.name
    }, who is ${this.pet.age} years old.\n`;
  }
}

const PetOwner1 = new PetOwner("Carl", 27, pet1);
console.log(PetOwner1.greet());
console.log(PetOwner1.present());
console.log(Pet.getPetCount()); // Static method call

// ⚔️ 4. Access Modifiers, Getters, Setters, and the `this` Keyword
console.log("⚔️ 4. Access Modifiers, Getters, Setters, and the `this` Keyword");

class Crawler extends Person {
  constructor(
    name: string,
    age: number,
    private _hp: number, // `private`: accessible only inside this class
    public readonly id: number // `readonly`: value cannot be changed after assignment
  ) {
    super(name, age);
  }

  override greet(): string {
    return `Hello, I'm ${this.name}, and I'm a crawler.\n`;
  }

  takeDamage(amount: number): string {
    this._hp -= amount;
    return `${this.name} took ${amount} damage. Remaining HP: ${this._hp}`;
  }

  get hp(): number {
    return this._hp;
  }

  set hp(value: number) {
    this._hp = value;
  }

  damage(value: number): string | void {
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
// crawler._hp = 0; // ❌ Error: private
// crawler.id = 2;  // ❌ Error: readonly
console.log(`Crawler ID: ${crawler.id}`);

// 🧩 5. Interfaces
console.log("🧩 5. Interfaces");

interface Cat {
  miaow(): string;
  scratch(): string;
}

interface Title {
  title: string;
  boast(): string;
}

class CatCrawler extends Pet implements Cat, Title {
  constructor(
    name: string,
    age: number,
    kind: Kind,
    public title: string,
    public petOwner: Crawler
  ) {
    super(name, age, kind);
  }

  miaow(): string {
    return `No, ${this.petOwner.name}!`;
  }

  scratch(): string {
    return `I scratch ${this.petOwner.name} because I'm a ${
      this.kind
    } and ${this.boast()}`;
  }

  boast(): string {
    return `I am ${this.title}!`;
  }
}

const princessDonut = new CatCrawler("Donut", 4, "cat", "Princess", crawler);

console.log(princessDonut.miaow());
console.log(princessDonut.scratch());

// 🧱 6. Abstract Classes & Methods
console.log("🧱 6. Abstract Classes & Methods");

abstract class Vehicle {
  static vehicleCount = 0;
  protected readonly id: number;

  constructor(public brand: string, public passengers: number) {
    Vehicle.vehicleCount++;
    this.id = Vehicle.vehicleCount;
  }

  abstract getInfo(): string; // Must be implemented in subclasses

  getId(): number {
    return this.id;
  }

  static getVehicleCount(): number {
    return Vehicle.vehicleCount;
  }
}

class Car extends Vehicle {
  constructor(brand: string, passengers: number) {
    super(brand, passengers);
  }

  override getInfo(): string {
    return `🚗 Car ID ${this.getId()} - Brand: ${this.brand}, Passengers: ${
      this.passengers
    }`;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand: string, passengers: number) {
    super(brand, passengers);
  }

  override getInfo(): string {
    return `🏍️ Motorcycle ID ${this.getId()} - Brand: ${
      this.brand
    }, Passengers: ${this.passengers}`;
  }
}

const car = new Car("Toyota", 5);
const moto = new Motorcycle("Yamaha", 2);

console.log(car.getInfo());
console.log(moto.getInfo());
console.log(`Total Vehicles: ${Vehicle.getVehicleCount()}`); // Static method call
