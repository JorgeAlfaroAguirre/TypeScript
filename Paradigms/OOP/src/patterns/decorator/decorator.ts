class newPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`NOOOOO!!!`);
  }

  talk() {
    console.log(`I don't want to talk`);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    return newPokemon;
  };
};

@MyDecorator()
class pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  talk() {
    console.log(`${this.name}, ${this.name}`);
  }
}

const squirtle = new pokemon(7, "Squirtle");

squirtle.scream();
squirtle.talk();
