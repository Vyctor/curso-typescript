import Pessoa from './Pessoa';

class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome}  ${this.sobrenome}`;
  }
}

const cliente = new Cliente('Vyctor', 'Guimarães', 26, '70096621184');

export default Cliente;
