let message: string = "Hello, World!";
console.log(message);
message = "Hello, TypeScript!";
console.log(message);
console.log(typeof []);

// ✅ Enum definido primero
enum Rol {
  Admin,
  User,
}

// ✅ Tipos propios de TypeScript (tiempo de compilación)
type tiposTS = {
  any: any;
  unknown: unknown;
  never: never;
  void: void;
  literal: "admin";
  union: string | number;
  intersection: { a: string } & { b: number };
  tuple: [string, number];
  enumExample: Rol;
};

// ✅ Tipos válidos de JavaScript (tiempo de ejecución)
const tiposJS = [
  37_000, // number
  "texto", // string
  true, // boolean
  null, // null (typeof === "object")
  undefined, // undefined
  Symbol("id"), // symbol
  () => {}, // function
  [1, 2, 3], // array (typeof === "object")
  { clave: "valor" }, // object
  new Date(), // object (date)
  /abc/, // object (RegExp)
  new Map(), // object (Map)
  new Set(), // object (Set)
];

// ✅ Valores representando tipos de TS en runtime
const valoresTS = [
  "admin", // literal type
  Rol.Admin, // enum
  ["texto", 123], // tuple
  { a: "hola", b: 42 }, // intersection
  undefined, // void (función que no retorna podría devolver esto)
  () => {}, // también para void
];

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
console.log(
  "------------------------Tipos en JavaScript------------------------"
);
console.log("");

getTypeOf(tiposJS);

console.log("");
console.log(
  "------------------------Tipos en TypeScript------------------------"
);
console.log("");
getTypeOf(valoresTS);
