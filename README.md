<p align="center">
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="200" alt="TypeScript Logo" />
  </a>
</p>

# TypeScript

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
