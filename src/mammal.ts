import{ Animal } from './animal'

export class Mammal extends Animal {
    static hairOrFur = true;
  
    constructor(public override name: string, public override age: number, public numLegs: number) {
      super(name, age);
    }
  
    override makeSound(): void {
      console.log("Mammal sound");
    }
  }