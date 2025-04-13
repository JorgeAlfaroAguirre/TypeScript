let message: string = "Hello, World!";
console.log(message);
message = "Hello, TypeScript!";
console.log(message);
console.log(typeof []); // Output: "object" — arrays are objects in JS

// ✅ Enum defined first
enum Role {
  Admin,
  User,
}

// ✅ TypeScript-specific types (compile-time only)
type tsTypes = {
  any: any; // Accepts any value (disables type safety — avoid if possible)
  unknown: unknown; // Similar to 'any' but requires type checking before use
  never: never; // Represents a value that never occurs (e.g., a function that always throws)
  void: void; // Used for functions that return nothing
  literal: "admin"; // Literal type: the value must be exactly "admin"
  union: string | number; // Value can be a string OR a number
  intersection: { a: string } & { b: number }; // Must have both 'a' and 'b' properties
  tuple: [string, number]; // Tuple: fixed-length array, first is string, second is number
  enumExample: Role; // Accepts values from the Role enum
};

// ✅ Valid JavaScript types (runtime types)
const jsTypes = [
  37_000, // number
  "text", // string
  true, // boolean
  null, // null (typeof === "object")
  undefined, // undefined
  Symbol("id"), // symbol
  () => {}, // function
  [1, 2, 3], // array (typeof === "object")
  { key: "value" }, // object
  new Date(), // object (Date)
  /abc/, // object (RegExp)
  new Map(), // object (Map)
  new Set(), // object (Set)
];

// ✅ Example values that match some TS concepts at runtime
const tsValues = [
  "admin", // literal
  Role.Admin, // enum
  ["text", 123], // tuple: string + number
  { a: "hello", b: 42 }, // intersection type
  undefined, // void (e.g. a function that returns nothing could return this)
  () => {}, // also represents void (function with no return)
];

// ✅ Utility function to inspect types at runtime
const getTypeOf = <T>(input: T[]) => {
  for (const item of input) {
    if (Array.isArray(item)) {
      console.log("array", "=>", typeof item, "=>", item);
    } else {
      console.log(typeof item, "=>", item);
    }
  }
};

console.log("");
console.log("------------------------JavaScript Types------------------------");
console.log("");

getTypeOf(jsTypes);

console.log("");
console.log("------------------------TypeScript Types------------------------");
console.log("");

getTypeOf(tsValues);

console.log("------------------------TypeScript Arrays-----------------------");

const animals: string[] = ["cat", "dog", "fish"];
const pets = ["cat", "dog", "fish"];

pets.push("lizard"); // Valid, as 'pets' is inferred as string[]
pets.push;
// pets.push(1); // Invalid, as 'pets' is inferred as string[] (uncomment to see error)

const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3]; // Alternative syntax
const numbers3: Array<number | string> = [1, 2, "fish"]; // Array of numbers or strings
console.log(numbers3);

const animalsToUpperCase = animals.map((a) => {
  a.toUpperCase(), console.log(a.toUpperCase());
  return a.toUpperCase();
}); // Valid, as 'a' is inferred as string
console.log(animalsToUpperCase);

let tuple: [number, string] = [1, "a"];

enum Sizes {
  XS = "Extra Small",
  S = "Small",
  M = "Medium",
  L = "Large",
  XL = "Extra Large",
  XXL = "Double Extra Large",
  XXXL = "Triple Extra Large",
}

const sizeM: Sizes = Sizes.M; // Valid, as 'size' is of type 'sizes'
console.log(sizeM);
const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
} //This is a more optimized code, because it is not compiled to JS, but it is not recommended to use it in production code
const loadingState: LoadingState = LoadingState.Loading; // Valid, as 'loadingState' is of type 'LoadingState'
console.log(loadingState);
const loadingState2: LoadingState = LoadingState.Error; // Valid, as 'loadingState' is of type 'LoadingState'
console.log(loadingState2);
const loadingState3: LoadingState = LoadingState.Success; // Valid, as 'loadingState' is of type 'LoadingState'

// 🧠 ¿Por qué puede ser problemático en producción?
// No puedes importar const enum de otros archivos fácilmente si usas herramientas como Babel o SWC sin configuración especial.

// Puede romper si usas librerías externas o tu proyecto se transpila sin soporte total de TypeScript.

// No funciona con isolatedModules: true (requerido por algunas configuraciones como ts-node o Next.js).

type Clothes = {
  readonly type: string;
  size: Sizes;
};

const item: Clothes = {
  type: "Shirt",
  size: Sizes.L,
};

item.size = Sizes.M;
// item.type = "Pants"; // Error: Cannot assign to 'type' because it is a read-only property
console.log(item);

// UnionType
let scoreOrGrade: number | string = 7.0;

scoreOrGrade = "Approved"; // Valid, as 'scoreOrGrade' can be a number or a string
console.log(scoreOrGrade);

type animal = {
  species: string;
};

type pet = {
  name: string;
};
type PetAnimal = animal & pet; // Intersection or union type: must have both 'species' and 'name' properties
const petAnimal: PetAnimal = {
  species: "cat",
  name: "Sophie",
};

console.log(petAnimal);

const petOrAnimal1: pet | animal = {
  species: "cat",
};

const petOrAnimal2: pet | animal = {
  name: "Sophie",
};

const petOrAnimal3: PetAnimal = {
  species: "cat",
  name: "Sophie",
};

console.log(petOrAnimal1);

console.log(petOrAnimal1);
console.log(petOrAnimal2);
console.log(petOrAnimal3);

// 🔍 Type Narrowing in TypeScript

// Type narrowing is a technique in TypeScript that allows you to refine the type of a variable
// within a specific scope based on certain conditions. It's useful for ensuring type safety
// and avoiding runtime errors.

// This is typically done using type guards — expressions that perform runtime checks to
// confirm that a variable is of a specific type.

// Type guards can be:
// - Conditional checks (if, switch)
// - Specific type checks using `typeof` (e.g., string, number, boolean)
// - Property or method checks (e.g., `'name' in obj` or `obj.method !== undefined`)
// - Custom functions (custom type guards)
// - Null/undefined checks using optional chaining (`?.`) or nullish coalescing (`??`)
// - Class or prototype checks using `instanceof`
// - Enum or literal comparisons using the `in` operator or direct comparison

// These techniques help ensure that TypeScript treats variables correctly depending on the logic flow.

function handleNumberOrString(n: number | string): number | string {
  if (typeof n === "number") {
    // Numbers have fewer methods, but are commonly used in expressions
    return n + 2;
  }

  if (typeof n === "string") {
    // Strings have many useful methods
    return n.toUpperCase();
  }

  throw new Error("Unsupported type");
}

const result1 = handleNumberOrString(1); // 3
const result2 = handleNumberOrString("one"); // "ONE"

console.log(result1, result2);

//literal types

type fibonacci = 0 | 1 | 2 | 3 | 5;

const fib: fibonacci = 5; // Valid, as 'fib' is of type 'fibonacci'
// const fib2: fibonacci = 4; // Error: Type '4' is not assignable to type 'fibonacci'

console.log(fib);

function toNumber(s: string): number {
  const result = parseInt(s);

  if (isNaN(result)) {
    // throw new Error(`Invalid number: "${s}"`);
    return 0; // Return 0 instead of throwing an error
  }

  return result;
}

console.log(toNumber("10"));
console.log(toNumber("1.1"));
console.log(toNumber("s"));
console.log(toNumber("1.1s"));

//Optional Chaining
// Optional chaining is a feature in TypeScript that allows you to safely access deeply nested properties of an object without having to check if each property in the chain is defined or not. It uses the ?. operator to do this.
function getUser(id: number) {
  if (id < 0) {
    return null;
  }
  return {
    id,
    name: "John Doe",
    created_at: new Date(),
  };
}

const user = getUser(-1);

console.log("User ", user?.created_at);

// nullish coalescing operator

const difficulty: number | null = null;

const gameDifficulty = difficulty ?? 1; // If difficulty is null or undefined, use 1 as default

console.log(gameDifficulty);

// 🔰 Type Assertion Example - Safe and Unsafe Usage

// A function that returns a string
function postString(): string {
  return "Hello, World!";
}

// A function that returns the length of a string
function getLength(str: string): number {
  return str.length;
}

// Normal usage - no assertion needed
const theStrg = postString();

// ✅ This type assertion is safe but unnecessary — TypeScript already knows the type
const assertedStr = theStrg as string;
const thisLength = getLength(assertedStr); // Returns a number

console.log(assertedStr, thisLength);

// ⚠️ BAD PRACTICE: Asserting a number to be a string
// This does not convert the value, it only tells TypeScript to "trust you"
// The runtime value is still a number, which can lead to bugs
const forcedString = getLength(theStrg) as unknown as string;

console.log("FORCED TYPE ASSERTION >", typeof forcedString, forcedString);
// Output will be: string 13 — but this is misleading!

// ✅ BETTER: Convert to string properly
const realString = getLength(theStrg).toString();
console.log("SAFE CONVERSION >", typeof realString, realString); // string "13"

// window.addEventListener("DOMContentLoaded", () => {
//   // const input = document.getElementById("my-input") as HTMLInputElement | null;
//   const input = <HTMLInputElement | null>document.getElementById("my-input"); //it's the same
//   const button = document.getElementById("show-button");

//   button?.addEventListener("click", () => {
//     if (input) {
//       console.log(input.value); // ✅ Outputs: Hello from input!
//     }
//   });
// });

// type unknown
// The unknown type is a type-safe counterpart to any. It represents any value but requires type checking before use.
// This means you cannot directly assign an unknown value to a variable of a specific type without first checking its type.
// This is useful for ensuring type safety and avoiding runtime errors.
function processValue(value: unknown) {
  if (typeof value === "string") {
    console.log("String value:", value);
  } else if (typeof value === "number") {
    console.log("Number value:", value);
  } else {
    console.log("Unknown type");
  }
}
processValue("Hello"); // String value: Hello
processValue(42); // Number value: 42
processValue(true); // Unknown type
processValue(null); // Unknown type
processValue(undefined); // Unknown type
