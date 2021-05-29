class Pessoa {
  public nome: string;
  public sobrenome: string;
  private idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome}  ${this.sobrenome}`;
  }
}

class Cliente extends Pessoa {
  getNomeCompleto(): string {
    console.log(`Cliente: ${this.nome} ${this.sobrenome}`);
    return super.getNomeCompleto();
  }
}

class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Aluno: ${this.nome}  ${this.sobrenome}`;
  }
}

const cliente = new Cliente('Vyctor', 'Guimarães', 26, '700.966.211-84');

console.log(cliente.getNomeCompleto());

export { Pessoa, Aluno, Cliente };
