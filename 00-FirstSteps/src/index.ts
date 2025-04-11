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
