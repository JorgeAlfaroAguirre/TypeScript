"use strict";
let message = "Hello, World!";
console.log(message);
message = "Hello, TypeScript!";
console.log(message);
console.log(typeof []);
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
const jsTypes = [
    37000,
    "text",
    true,
    null,
    undefined,
    Symbol("id"),
    () => { },
    [1, 2, 3],
    { key: "value" },
    new Date(),
    /abc/,
    new Map(),
    new Set(),
];
const tsValues = [
    "admin",
    Role.Admin,
    ["text", 123],
    { a: "hello", b: 42 },
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
console.log("------------------------JavaScript Types------------------------");
console.log("");
getTypeOf(jsTypes);
console.log("");
console.log("------------------------TypeScript Types------------------------");
console.log("");
getTypeOf(tsValues);
//# sourceMappingURL=index.js.map