# Curso de Typescript
Curso de Typescript, contido no curso Javascript e Typescript do básico ao avançado, ministrado pelo professor Luiz Otávio Miranda.

[Link do Curso](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/20495948#overview)

## Conteúdo abordado
- Instalação
  - Instalando o Typescript
  - Instalando o ts-node e o code runner
  - Instalando e configurando o prettier
  - Configuração do tsconfig.json
  - Configuração do .editorconfig
- Tipos básicos
  - Sintaxe de Type Annotations
  - Tipo any
  - Tipo void

<hr>

# Programação Orientada a Objetos

## Os pilares do POO
- Abstração
- Encapsulamento
- Herança
- Polimorfismo

<hr>

## Abstração
Permite isolar de um objeto somente os conceitos que são necessários para o funcionamento do programa

```typescript
export class Pessoa {
  private nome: string;
  private sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
```

## Encapsulamento
Visa ocultar partes internas de um objeto e exibir apenas o necessário para o uso externo.

```typescript
export class RemoteControl {
  constructor(private powerStatus = false) {
  }

  public turnOn(): void {
    this.powerStatus = true;
  }

  public turnOf(): void {
    this.powerStatus = false;
  }

  public getStatus(): boolean {
    return this.powerStatus;
  }
}
```

## Herança
Visa passar caracteristícas de um objeto para outro

```typescript
export abstract class Animal {
  constructor(public name: string) {
  }
  abstract makeNoise(): void;
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} is barking!`);
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} says miauuuu!`);
  }
}
```

## Polimorfismo
Algo que é polimorfo tem a habilidade de assumir diferentes formas.

```typescript
export abstract class Animal {
  constructor(public name: string) {
  }
  abstract makeNoise(): void;
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} is barking!`);
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} says miauuuu!`);
  }
}

export class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise();
  }

  const dog = new Dog("Tina");
  const cat = new Dog("Suzy");

  const animalSounds = new AnimalSounds();
  animalSounds.playSound(dog);
  animalSounds.playSound(cat);
}
```
