# OOP in TypeScript

## 📦 Object-Oriented Programming Overview

Object-Oriented Programming (OOP) is a programming paradigm that uses classes and objects to organize code into reusable and structured components.

- A **class** defines a blueprint for objects.
- An **object** is a specific instance of a class.
- OOP promotes encapsulation, inheritance, and polymorphism.

---

## 🧱 1. Classes & Constructors

In TypeScript (and JavaScript), a class is a blueprint for creating objects. It defines structure and behavior (properties and methods).

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
```

### 🧪 Example:

```ts
const person = new Person("Carl", 27);
console.log(person.greet());
```

---

## 🔍 2. Creating an Instance vs Object

```ts
const person = new Person("Carl", 27); // instance of Person class
```

> ✅ All instances are objects, but not all objects are instances of a class.

```ts
const plainObject = { name: "Jorge", age: 37 }; // plain object, not a class instance
```

---

## 🐾 3. Static Properties & Custom Types

```ts
type Kind = "cat" | "dog" | "fish" | "other";

class Pet {
  static petCount = 0;

  constructor(public name: string, public age: number, public kind: Kind) {
    Pet.petCount++;
  }

  greet(): string {
    return `Hello, my pet is a ${this.kind}, his name is ${this.name}, and he is ${this.age} years old.`;
  }

  static getPetCount(): string {
    return `There are ${Pet.petCount} pets in total.`;
  }
}

const pet1 = new Pet("Donut", 4, "cat");
const pet2 = new Pet("Princess Donut", 4, "cat");
const pet3 = new Pet("Chonk", 4, "cat");

console.log(Pet.getPetCount());
```

| Concept          | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `static`         | Belongs to the class, not to instances                   |
| `public`         | Shorthand to create and assign properties in constructor |
| `Pet.petCount++` | Increments global count of pets                          |

---

## 👪 4. Inheritance & Method Overriding

```ts
class PetOwner extends Person {
  pet: Pet;

  constructor(name: string, age: number, pet: Pet) {
    super(name, age);
    this.pet = pet;
  }

  override greet(): string {
    return `Hi, I'm ${this.name}, and my pet is a ${this.pet.kind} named ${this.pet.name}`;
  }

  present(): string {
    return `${super.greet()} I have a ${this.pet.kind} named ${this.pet.name}.`;
  }
}
```

---

## ⚔️ 5. Access Modifiers, Getters & Setters

```ts
class Crawler extends Person {
  constructor(
    name: string,
    age: number,
    private _hp: number,
    public readonly id: number
  ) {
    super(name, age);
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
}
```

| Modifier   | Description                                   |
| ---------- | --------------------------------------------- |
| `private`  | Accessible only within the class              |
| `readonly` | Assigned once, then cannot be modified        |
| `get/set`  | Encapsulate access and mutation of properties |

---

## 🧩 6. Interfaces

```ts
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
```

---

## 🧱 7. Abstract Classes & Methods

```ts
abstract class Vehicle {
  static vehicleCount = 0;
  protected readonly id: number;

  constructor(public brand: string, public passengers: number) {
    Vehicle.vehicleCount++;
    this.id = Vehicle.vehicleCount;
  }

  abstract getInfo(): string;

  static getVehicleCount(): number {
    return Vehicle.vehicleCount;
  }
}

class Car extends Vehicle {
  override getInfo(): string {
    return `🚗 Car ID ${this.id} - Brand: ${this.brand}, Passengers: ${this.passengers}`;
  }
}

class Motorcycle extends Vehicle {
  override getInfo(): string {
    return `🏍️ Motorcycle ID ${this.id} - Brand: ${this.brand}, Passengers: ${this.passengers}`;
  }
}
```
