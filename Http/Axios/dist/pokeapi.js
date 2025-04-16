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
const axios_1 = __importDefault(require("axios"));
const url = "https://pokeapi.co/api/v2/pokemon/";
class Pokemon {
    constructor(id = 0, name = "", moves = [], sprite = "") {
        this.id = id;
        this.name = name;
        this.moves = moves;
        this.sprite = sprite;
    }
    getPokemon(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(url + input);
            const data = response.data;
            this.id = data.id;
            this.name = data.name;
            this.moves = data.moves.slice(0, 2).map((m) => m.move.name);
            this.sprite = data.sprites.front_default;
            return this;
        });
    }
    pokedex() {
        if (!this.name) {
            return "No Pokémon loaded. Run getPokemon() first.";
        }
        return `
    ID: ${this.id} 
    Name: ${this.name} 
    Moves: ${this.moves.join(", ")} 
    Sprite: ${this.sprite}
    `;
    }
    getMoves(pokemonId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get(url + pokemonId);
            const moves = data.moves.map((m) => m.move.name);
            console.log(`Moves of ${data.name}: \n${moves.join(", ")}`);
        });
    }
}
const charmander = new Pokemon();
charmander.getMoves(4);
//# sourceMappingURL=pokeapi.js.map