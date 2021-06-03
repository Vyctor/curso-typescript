namespace MeuNamespace {
  const nome = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Luiz');
  console.log(pessoa);
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz');
console.log(pessoaDoNamespace);

export default MeuNamespace;
