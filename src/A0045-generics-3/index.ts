export interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo = {
  nome: 'Vyctor',
  sobrenome: 'Guimarães',
  idade: 26,
};

const aluno1: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 123,
  idade: 26,
};
