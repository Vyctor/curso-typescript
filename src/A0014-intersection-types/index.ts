type TemNome = { nome: string };

type TemSobrenome = { sobrenome: string };

type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade; // TemNome AND TemSobrenome AND TemIdade

const pessoa: Pessoa = { nome: 'Vyctor', sobrenome: 'Guimarães', idade: 25 };

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

export { pessoa };
