type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto(): string {
    return `Nome Completo: ${this.nome} ${this.sobrenome}`;
  }
}

const vyctor = new Pessoa('Vyctor', 'Guimarães');
console.log(vyctor.nomeCompleto());
