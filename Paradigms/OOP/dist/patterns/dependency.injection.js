"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.charmander = exports.Pokemon = void 0;
const axios_1 = __importDefault(require("axios"));
class Pokemon {
    get imageUrl() {
        return `https://pokemon.com/${this.id}.jpg`;
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak() {
        console.log(`${this.name}, ${this.name}`);
    }
    getMoves() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get("https://pokeapi.co/api/v2/pokemon/4");
            console.log(data.moves);
            return data.moves;
        });
    }
}
exports.Pokemon = Pokemon;
exports.charmander = new Pokemon(4, "Charmander");
exports.charmander.getMoves();
//# sourceMappingURL=dependency.injection.js.map