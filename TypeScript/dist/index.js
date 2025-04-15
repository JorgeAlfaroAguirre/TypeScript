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
console.log("------------------------TypeScript Arrays-----------------------");
const animals = ["cat", "dog", "fish"];
const pets = ["cat", "dog", "fish"];
pets.push("lizard");
pets.push;
const numbers = [1, 2, 3];
const numbers2 = [1, 2, 3];
const numbers3 = [1, 2, "fish"];
console.log(numbers3);
const animalsToUpperCase = animals.map((a) => {
    a.toUpperCase(), console.log(a.toUpperCase());
    return a.toUpperCase();
});
console.log(animalsToUpperCase);
let tuple = [1, "a"];
var Sizes;
(function (Sizes) {
    Sizes["XS"] = "Extra Small";
    Sizes["S"] = "Small";
    Sizes["M"] = "Medium";
    Sizes["L"] = "Large";
    Sizes["XL"] = "Extra Large";
    Sizes["XXL"] = "Double Extra Large";
    Sizes["XXXL"] = "Triple Extra Large";
})(Sizes || (Sizes = {}));
const sizeM = Sizes.M;
console.log(sizeM);
const loadingState = 1;
console.log(loadingState);
const loadingState2 = 3;
console.log(loadingState2);
const loadingState3 = 2;
const item = {
    type: "Shirt",
    size: Sizes.L,
};
item.size = Sizes.M;
console.log(item);
let scoreOrGrade = 7.0;
scoreOrGrade = "Approved";
console.log(scoreOrGrade);
const petAnimal = {
    species: "cat",
    name: "Sophie",
};
console.log(petAnimal);
const petOrAnimal1 = {
    species: "cat",
};
const petOrAnimal2 = {
    name: "Sophie",
};
const petOrAnimal3 = {
    species: "cat",
    name: "Sophie",
};
console.log(petOrAnimal1);
console.log(petOrAnimal1);
console.log(petOrAnimal2);
console.log(petOrAnimal3);
function handleNumberOrString(n) {
    if (typeof n === "number") {
        return n + 2;
    }
    if (typeof n === "string") {
        return n.toUpperCase();
    }
    throw new Error("Unsupported type");
}
const result1 = handleNumberOrString(1);
const result2 = handleNumberOrString("one");
console.log(result1, result2);
const fib = 5;
console.log(fib);
function toNumber(s) {
    const result = parseInt(s);
    if (isNaN(result)) {
        return 0;
    }
    return result;
}
console.log(toNumber("10"));
console.log(toNumber("1.1"));
console.log(toNumber("s"));
console.log(toNumber("1.1s"));
function getUser(id) {
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
console.log("User ", user === null || user === void 0 ? void 0 : user.created_at);
const difficulty = null;
const gameDifficulty = difficulty !== null && difficulty !== void 0 ? difficulty : 1;
console.log(gameDifficulty);
function postString() {
    return "Hello, World!";
}
function getLength(str) {
    return str.length;
}
const theStrg = postString();
const assertedStr = theStrg;
const thisLength = getLength(assertedStr);
console.log(assertedStr, thisLength);
const forcedString = getLength(theStrg);
console.log("FORCED TYPE ASSERTION >", typeof forcedString, forcedString);
const realString = getLength(theStrg).toString();
console.log("SAFE CONVERSION >", typeof realString, realString);
function processValue(value) {
    if (typeof value === "string") {
        console.log("String value:", value);
    }
    else if (typeof value === "number") {
        console.log("Number value:", value);
    }
    else {
        console.log("Unknown type");
    }
}
processValue("Hello");
processValue(42);
processValue(true);
processValue(null);
processValue(undefined);
//# sourceMappingURL=index.js.map