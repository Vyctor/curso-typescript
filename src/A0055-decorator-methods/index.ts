function decorator(classPrototype: any, nomeMetodo: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);

  return {
    value: function (...args: Array<any>) {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorator
  public metodo(mensagem: string) {
    return `${this.nome} ${this.sobrenome}: ${mensagem}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Luiz', 'Otavio', 30);

const metodo = pessoa.metodo('Ola mundo');

console.log(metodo);
