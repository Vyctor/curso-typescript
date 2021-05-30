export abstract class Personagem {
  protected abstract emoji: string;

  constructor(protected nome: string, protected ataque: number, protected vida: number) {}

  public atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} está atacando`);
    personagem.perderVida(this.ataque);
  }

  public perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    if (this.vida <= 0) {
      console.log(`${this.emoji} ${this.nome} papocou. Agora está em outro mundo!`);
    } else {
      console.log(`${this.emoji} ${this.nome} agora tem ${this.vida} de vida`);
    }
  }

  public abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  public bordao(): void {
    console.log(this.emoji + 'Guerreira aooooo ataqueeeeee!!!!!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  public bordao(): void {
    console.log(this.emoji + 'Nhau raummmmm!!!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 55, 1500);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
