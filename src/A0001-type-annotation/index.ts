export default interface Person {
  age: string;
  name: string;
  adult: boolean;
}

export default class TypeAnnotation {
  // Tipos básicos, primitivos
  public nome: string;
  public idade: number;
  public adulto: boolean;
  public simbolo: symbol;

  // Arrays
  public numberArray: Array<number>;
  public stringArray: Array<string>;

  // Objects
  public person: Person;

  constructor(
    nome: string,
    idade: number,
    adulto: boolean,
    simbolo: symbol,
    numberArray: Array<number>,
    stringArray: Array<string>,
    person: Person,
  ) {
    this.nome = nome;
    this.idade = idade;
    this.adulto = adulto;
    this.simbolo = simbolo;
    this.numberArray = numberArray;
    this.stringArray = stringArray;
    this.person = person;
  }

  public soma(x: number, y: number): number {
    return x + y;
  }
}
