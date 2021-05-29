import Pessoa from './Pessoa';

class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Aluno: ${this.nome}  ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Vyctor', 'Guimarães', 26, '70096621184');

console.log(aluno.getNomeCompleto());

export default Aluno;
