export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador: number = 0;
  private stack = new Array<T>();

  public push(elemento: T): void {
    this.contador++;
    this.stack[this.contador] = elemento;
  }

  public estaVazia(): boolean {
    return this.contador <= 0;
  }

  public pop(): T | void {
    if (this.estaVazia()) {
      console.log('A pilha está vazia');
      return undefined;
    } else {
      this.contador--;
      const elemento = this.stack[this.contador];
      delete this.stack[this.contador];
      return elemento;
    }
  }

  public tamanho(): number {
    return this.contador;
  }

  public mostrarPilha(): void {
    for (const chave in this.stack) {
      console.log(this.stack[chave]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.mostrarPilha();
