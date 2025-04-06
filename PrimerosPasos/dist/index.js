"use strict";
let message = "Hello, World!";
console.log(message);
message = "Hello, TypeScript!";
console.log(message);
console.log(typeof []);
var Rol;
(function (Rol) {
    Rol[Rol["Admin"] = 0] = "Admin";
    Rol[Rol["User"] = 1] = "User";
})(Rol || (Rol = {}));
const tiposJS = [
    42,
    "texto",
    true,
    null,
    undefined,
    Symbol("id"),
    () => { },
    [1, 2, 3],
    { clave: "valor" },
    new Date(),
    /abc/,
    new Map(),
    new Set(),
];
const valoresTS = [
    "admin",
    Rol.Admin,
    ["texto", 123],
    { a: "hola", b: 42 },
    undefined,
    () => { },
];
const getTypeOf = (input) => {
    for (const item of input) {
        if (Array.isArray(item)) {
            console.log("array", "=>", typeof item, "=>", item);
        }
        else {
            console.log(typeof item, "=>", item);
        }
    }
};
console.log("");
console.log("------------------------Tipos en JavaScript------------------------");
console.log("");
getTypeOf(tiposJS);
console.log("");
console.log("------------------------Tipos en TypeScript------------------------");
console.log("");
getTypeOf(valoresTS);
//# sourceMappingURL=index.js.map