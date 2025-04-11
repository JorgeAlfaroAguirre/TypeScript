<p align="center">
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="200" alt="TypeScript Logo" />
  </a>
</p>

# TypeScript

🧠 TypeScript is a superset of JavaScript that adds static typing, ahead-of-time compilation, and more robust development tools. It allows you to write safer, more scalable, and easier-to-maintain code while remaining fully compatible with plain JavaScript.

✅ Main Advantages:

- Static typing and compile-time checking
- Better support in editors (autocompletion, refactoring, navigation)
- Facilitates development in large and collaborative projects
- Compatible with JavaScript libraries and frameworks

## Install TypeScript

Install globally:

```bash
npm i -g typescript
```

Check if it's installed:

```bash
tsc -v
```

If it throws an error, you may need to run the terminal as Administrator and check the execution policy:

```bash
Get-ExecutionPolicy
```

If it returns `Restricted`, run:

```bash
Set-ExecutionPolicy RemoteSigned
```

Now, open a new terminal **without** administrator privileges and check the version:

```bash
tsc -v
```

## Getting Started

### 1. Data Types:

`index.ts`

```typescript
let message: string = "Hello, World!";
console.log(message);
message = "Hello, TypeScript!";
console.log(message);
message = 1; ❌ Error: Type 'number' is not assignable to type 'string'.ts(2322)
```

As we can see, once the type string is declared, we cannot assign values of another type to that variable.
To compile this file, run:

```
tsc index.ts
```

### 2. Create a TypeScript Project

`Initialize a tsconfig.json`

```bash
tsc --init
```

`Output`

```bash
Created a new tsconfig.json with:
                                                                                                                    TS
target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true

```

This creates a tsconfig.json file. Modify it with the following options:

```json
{
  "compilerOptions": {
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "rootDir": "./src" /* Specify the root folder within your source files. */,
    "sourceMap": true /* Create source map files for emitted JavaScript files. */,
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
    "removeComments": true /* Disable emitting comments. */,
    "noEmitOnError": false /* Disable emitting files if any type checking errors are reported. */
  }
}
```

Now you don't need to specify the filename to compile; just run:

```
tsc
```

`src/index.ts`

```TypeScript
let message: string = "Hello, World!";
console.log(message);
```

`dist/index.js`

```JavaScript
"use strict";
let message = "Hello, World!";
console.log(message);
```

`dist/index.js.map`

```map
{"version":3,"file":"index.js","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":";AAAA,IAAI,OAAO,GAAW,eAAe,CAAC;AACtC,OAAO,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC"}
```

3. Debugging a TypeScript Project

- Enable Run and Debug in your IDE.
- Create a launch.json file.
- Choose Node.js as the environment.

  Default `launch.json`

  ```json
  {
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "skipFiles": ["<node_internals>/**"],
        "program": "${file}",
        "outFiles": ["${workspaceFolder}/**/*.js"]
      }
    ]
  }
  ```

Add the `preLaunchTask` line to compile before debugging:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/dist/index.js",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

4. Watch mode: `tsc --watch` — compiles your TypeScript files automatically whenever they change, similar to how Nodemon works for Node.js.

## 🧠 TypeScript vs JavaScript Types

TypeScript adds **compile-time types** that help you write safer and more predictable code. Below is a comparison between **TypeScript types (design time)** and **JavaScript types (runtime)**.

---

### ✅ TypeScript Types (Compile-Time Only)

```ts
enum Role {
  Admin,
  User,
}

type TypeScriptTypes = {
  any: any; // Accepts any value (disables type checking)
  unknown: unknown; // Safer alternative to any, must check before use
  never: never; // Represents a value that never happens (e.g. thrown errors)
  void: void; // Used for functions that return nothing
  literal: "admin"; // Must be exactly "admin"
  union: string | number; // Value can be a string or a number
  intersection: { a: string } & { b: number }; // Must have both 'a' and 'b'
  tuple: [string, number]; // Fixed-length array: first is string, second is number
  enumExample: Role; // Value must be from the Role enum
};
```

ℹ️ Tuples are great when the order and type of items matter. For example, [string, number] ensures the first value is a string and the second is a number.
Useful in things like const [state, setState] = useState() in React.

🧪 Example Runtime Values Representing TS Concepts

```Typescript
const tsValues = [
  "admin", // literal type
  Role.Admin, // enum
  ["text", 123], // tuple (string + number)
  { a: "hello", b: 42 }, // intersection
  undefined, // void (function that returns nothing)
  () => {}, // also represents void
];
```

🔧 Type Inspection Helper

```typescript
const getTypeOf = <T>(input: T[]) => {
  for (const item of input) {
    if (Array.isArray(item)) {
      console.log("array", "=>", typeof item, "=>", item);
    } else {
      console.log(typeof item, "=>", item);
    }
  }
};
```

### 📝 Summary: JavaScript vs TypeScript Types

| Type                   | JavaScript ✅ | TypeScript ✅ |
| ---------------------- | ------------- | ------------- |
| `number`               | ✅            | ✅            |
| `string`               | ✅            | ✅            |
| `boolean`              | ✅            | ✅            |
| `undefined`            | ✅            | ✅            |
| `null`                 | ✅            | ✅            |
| `symbol`               | ✅            | ✅            |
| `object`               | ✅            | ✅            |
| `function`             | ✅            | ✅            |
| `array`                | ✅            | ✅            |
| `Date`                 | ✅            | ✅            |
| `RegExp`               | ✅            | ✅            |
| `Map`, `Set`           | ✅            | ✅            |
| `any`                  | ❌            | ✅            |
| `unknown`              | ❌            | ✅            |
| `void`                 | ❌            | ✅            |
| `never`                | ❌            | ✅            |
| `tuple`                | ❌            | ✅            |
| `enum`                 | ❌            | ✅            |
| `literal types`        | ❌            | ✅            |
| `union / intersection` | ❌            | ✅            |

> ✅ = Supported / Exists in that language  
> ❌ = Not available or meaningful in that context
