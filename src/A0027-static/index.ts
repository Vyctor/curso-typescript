class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '700.966.211-84';

  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string) {}

  static criarPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  public metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

export default Pessoa;
