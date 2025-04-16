import axios from "axios";
import { PokeapiResponse } from "./interfaces/pokeapi.response.interface";

const url = "https://pokeapi.co/api/v2/pokemon/";

type PokemonInput = string | number;
class Pokemon {
  constructor(
    public id: number = 0,
    public name: string = "",
    public moves: string[] = [],
    public sprite: string = ""
  ) {}

  async getPokemon(input: PokemonInput) {
    const response = await axios.get<PokeapiResponse>(url + input);
    const data = response.data;

    this.id = data.id;
    this.name = data.name;
    this.moves = data.moves.slice(0, 2).map((m) => m.move.name);
    this.sprite = data.sprites.front_default;

    return this;
  }

  pokedex(): string {
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

  async getMoves(pokemonId: number) {
    const { data } = await axios.get<PokeapiResponse>(url + pokemonId);
    const moves = data.moves.map((m) => m.move.name);
    console.log(`Moves of ${data.name}: \n${moves.join(", ")}`);
  }
}

// 🧪 Ejecutamos dentro de una función async
// async function main() {
//   const bulbasaur = new Pokemon();
//   await bulbasaur.getPokemon(1);
//   console.log(bulbasaur.pokedex());

//   const ivysaur = new Pokemon();
//   await ivysaur.getPokemon("ivysaur");
//   console.log(ivysaur.pokedex());

//   const venusaur = new Pokemon(
//     4,
//     "charmander",
//     ["mega-punch", "fire-punch"],
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
//   ); // Issue you can create a Pokemon without calling getPokemon see Paradigms/OOP/src/Pattern/Factory.ts
//   console.log(venusaur.pokedex());
//   await venusaur.getPokemon(3);
//   console.log(venusaur.pokedex());
// }
// main();

const charmander = new Pokemon();
charmander.getMoves(4);
