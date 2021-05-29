class Pessoa {
  constructor(public nome: string, public sobrenome: string, private idade: number, protected _cpf: string) {}

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Vyctor', 'Vieira Guimarães', 26, '700.966.211-84');
pessoa.cpf = '886.349.061-91';
console.log(pessoa.cpf);

export default Pessoa;
