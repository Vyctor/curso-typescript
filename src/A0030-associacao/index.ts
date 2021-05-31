export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  public escrever(): void {
    if (this.ferramenta) {
      this.ferramenta.escrever();
    } else {
      console.log('Não posso escrever sem uma ferramenta...');
    }
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;
  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  public escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}
export class MaquinaEscrever extends Ferramenta {
  public escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Vyctor');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina');

escritor.ferramenta = caneta;
escritor.escrever();
