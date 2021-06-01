export class OpcaoEnquete {
  private _opcao: string;
  private _votos: number = 0;

  constructor(opcao: string) {
    this._opcao = opcao;
  }

  public adicionarVoto(): void {
    this._votos++;
  }

  get opcao(): string {
    return this._opcao;
  }

  get votos(): number {
    return this._votos;
  }
}

export class Enquete {
  private pergunta: string;
  private opcoes: Array<OpcaoEnquete> = [];

  constructor(pergunta: string) {
    this.pergunta = pergunta;
  }

  public adicionarOpcao(opcao: OpcaoEnquete): void {
    this.opcoes.push(opcao);
  }

  public votar(opcao: OpcaoEnquete): void {
    opcao.adicionarVoto();
  }

  public mostrarEnquete(): void {
    console.log(`${this.pergunta}`);
    this.opcoes.forEach((opcao) => {
      console.log(`${opcao.opcao} ${opcao.votos}`);
    });
  }
}

const python = new OpcaoEnquete('Python');
const javascript = new OpcaoEnquete('Javascript');
const typescript = new OpcaoEnquete('Typescript');
const enquete = new Enquete('Qual sua linguagem de programação favorita?');
enquete.adicionarOpcao(javascript);
enquete.adicionarOpcao(typescript);
enquete.adicionarOpcao(python);
enquete.mostrarEnquete();
enquete.votar(javascript);
enquete.votar(typescript);
enquete.votar(typescript);
enquete.votar(typescript);
enquete.mostrarEnquete();
