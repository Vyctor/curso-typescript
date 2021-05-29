class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Array<Colaborador> = new Array();
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(`Nome: ${colaborador.nome} ${colaborador.sobrenome}`);
    }
  }
}

class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

class Udemy extends Empresa {
  constructor() {
    super('Burger King', '01.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop() as Colaborador;
    return colaborador ? colaborador : null;
  }
}

const udemy = new Udemy();

udemy.adicionaColaborador({
  nome: 'Vyctor',
  sobrenome: 'Guimarães',
});

udemy.adicionaColaborador({
  nome: 'Miguel',
  sobrenome: 'Guimarães',
});

udemy.adicionaColaborador({
  nome: 'Brás',
  sobrenome: 'Guimarães',
});

udemy.mostrarColaboradores();
udemy.popColaborador();
udemy.mostrarColaboradores();

export { Empresa, Colaborador, Udemy };
