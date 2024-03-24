import { Data } from './data';
function Numberv(value: unknown): value is number {
    return typeof value === "number";
  }
function Stringv(value: unknown): value is string {
    return typeof value === "string";
  }

 
  
  let sonArray: (string | number)[] = ["apple", "abc","lol" ,"banana", 10.5, 20, "grapefruit", 30, 70, 99];
  
  for (const value of sonArray) {
    if (Numberv(value)) {
      console.log("number:", value);
    } else {
      console.log("string:", value);
    }
  }
  
  interface Animal {
    id: number;
    name: string;
    age: number;
  }
  
  const animalData = new Data<Animal>();
  
  const animal1 = { id: 1, name: "Charlie", age:3 };
  const animal2 = { id: 2, name: "Whiskers", age:5 };
  animalData.add(animal1);
  animalData.add(animal2);
  
  animalData.update(1, { name: "Charles" });
  animalData.delete(animal2);
  
  const retrievedAnimal = animalData.get(1);
  if (retrievedAnimal) {
    console.log(retrievedAnimal);
  } else {
    console.log("Animal not found");
  }
  