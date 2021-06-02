@decorator
export class Animal {
  constructor(public cor: string) {}
}
function decorator<T>(target: T): T {
  return target;
}

const animal = new Animal('Preto');

console.log(animal);
