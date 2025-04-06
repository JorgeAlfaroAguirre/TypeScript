<p align="center">
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="200" alt="TypeScript Logo" />
  </a>
</p>

# TypeScript

TypeScript es un superset de JavaScript que añade tipado estático, compilación anticipada y herramientas de desarrollo más robustas. Permite escribir código más seguro, escalable y fácil de mantener, sin dejar de ser compatible con JavaScript puro.

✅ Ventajas principales:

Tipado estático y verificación en tiempo de compilación

Mejor soporte en editores (autocompletado, refactorización, navegación)

Facilita el desarrollo en proyectos grandes y colaborativos

Compatible con bibliotecas y frameworks de JavaScript

🔧 Se compila a JavaScript, por lo que puede ejecutarse en cualquier entorno donde se ejecute JS (navegadores, Node.js, etc.).

## Instalar TypeScript

Instalación:

```bash
npm i -g typescript
```

Revisar si esta instalado:

```bash
tsc -v
```

Si arroja error, debemos ejecutar la terminal como administrador y poder:

```terminal
get-ExcecutionPolicy
```

Si arroja Restricted:

```terminal
set-ExcecutionPolicy remmotesigned
```

Ahora revisamos de nuevo:

```terminal
get-ExcecutionPolicy
```

Abrimos la terminal nuevamente sin privilegios de administrador y nos deberia mostrar la versión:

```bash
tsc -v
```

## Primeros Pasos

1. Tipos de datos:

   index.ts

   ```TypeScript
   let message: string = "Hello, World!";
   console.log(message);
   message = "Hello, TypeScript!";
   console.log(message);
   message = 1; ❌ Error: Type 'number' is not assignable to type 'string'.ts(2322)

   ```

   Como podemos ver, una vez declarado el tipo String, no podemos podemos poner valores de otro tipo dentro.
   Para compilar este archivo debemos poner tsc index.ts

2. Crear un proyecto en TS

   ```bash
   tsc -init
   ```

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

   Esto nos crea un archivo tsconfig.json ahi cambiaremos:

   ```
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "rootDir": "./src" /* Specify the root folder within your source files. */,
    "sourceMap": true /* Create source map files for emitted JavaScript files. */,
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
    "removeComments": true /* Disable emitting comments. */,
    "noEmitOnError": false /* Disable emitting files if any type checking errors are reported. */,
   ```

   Ahora no es necesario para compliar poner el nombre del archivo basta tsc.

   src/index.ts

   ```TypeScript
   let message: string = "Hello, World!";
   console.log(message);
   ```

   dist/index.js

   ```JavaScript
   "use strict";
   let message = "Hello, World!";
   console.log(message);
   ```

   dist/index.js.map

   ```map
   {"version":3,"file":"index.js","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":";AAAA,IAAI,OAAO,GAAW,eAAe,CAAC;AACtC,OAAO,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC"}
   ```

3. Debuggiar un proyecto en ts

- Habilitar run and debug.
- create a launch.json file.
- Elije node.

  lauch.json (por defxecto)

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

  Debe agregarsele la linea de preLaunchTask:

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

### Tipos en Typescript

### Inferencia de tipos
