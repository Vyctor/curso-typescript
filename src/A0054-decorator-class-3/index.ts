type Constructor = {
  new (...args: Array<any>): any;
};

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);
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

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador' + ' ' + param1);
    return target;
  };
}

@outroDecorador('a')
@inverteNomeECor('a', 'b')
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('Preto', 'Paulo do Bolo');

console.log(animal);
