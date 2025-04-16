import { Move, PokeapiResponse } from "./interfaces/pokeapi.response.interface";
import {
  HttpAdapter,
  PokeApiAdapter,
  PokeApiFetchAdapter,
} from "./api/pokeapi.adapter";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<string[]> {
    // const { data } = await axios.get<PokeapiResponse>(
    const data = await this.http.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );

    const { moves } = data;

    const allMoves = moves.map((m) => m.move.name);
    console.log(allMoves);
    // console.log(moves[0].move.name); // flamethrower

    return allMoves;
  }
}

// export const charmander = new Pokemon(4, "Charmander");

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();
export const bulbasaur = new Pokemon(1, "bulbasaur", pokeApiAxios);
export const charmander = new Pokemon(4, "Charmander", pokeApiFetch);

console.log(bulbasaur.name);
console.log(charmander.name);
bulbasaur.getMoves();
charmander.getMoves();
