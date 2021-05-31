interface Pessoa {
  readonly nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: Array<string>;
}

const pessoa: Pessoa = {
  nome: 'Vyctor',
  sobrenome: 'Guimarães',
  enderecos: new Array<string>(),
};
