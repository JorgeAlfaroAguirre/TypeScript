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
Object.defineProperty(exports, "__esModule", { value: true });
exports.charmander = exports.bulbasaur = exports.Pokemon = void 0;
const pokeapi_adapter_1 = require("./api/pokeapi.adapter");
class Pokemon {
    get imageUrl() {
        return `https://pokemon.com/${this.id}.jpg`;
    }
    constructor(id, name, http) {
        this.id = id;
        this.name = name;
        this.http = http;
    }
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak() {
        console.log(`${this.name}, ${this.name}`);
    }
    getMoves() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
            const { moves } = data;
            const allMoves = moves.map((m) => m.move.name);
            console.log(allMoves);
            return allMoves;
        });
    }
}
exports.Pokemon = Pokemon;
const pokeApiAxios = new pokeapi_adapter_1.PokeApiAdapter();
const pokeApiFetch = new pokeapi_adapter_1.PokeApiFetchAdapter();
exports.bulbasaur = new Pokemon(1, "bulbasaur", pokeApiAxios);
exports.charmander = new Pokemon(4, "Charmander", pokeApiFetch);
console.log(exports.bulbasaur.name);
console.log(exports.charmander.name);
exports.bulbasaur.getMoves();
exports.charmander.getMoves();
//# sourceMappingURL=dependency.injection.js.map