type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'VERMELHO' | 'VERDE' | 'AZUL';
type CorCMYK = 'CIANO' | 'MAGENTA' | 'AMARELO' | 'PRETO';
type CorPreferida = CorCMYK | CorRGB;

const pessoa: Pessoa = {
  nome: 'Vyctor Vieira Guimarães',
  idade: 30,
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

export default 2;
