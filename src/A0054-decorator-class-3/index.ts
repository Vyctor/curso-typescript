function inverteNomeECor(param1: string, param2: string) {
  return function inverteNomeECor<T extends new (...args: Array<any>) => any>(target: T): T {
    console.log('Sou o decorador e recebi ', target);
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: Array<any>) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      public inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@inverteNomeECor('a', 'b')
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('Preto', 'Paulo do Bolo');

console.log(animal);
