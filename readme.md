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
## Associação
É um vínculo que ocorre entre classes, uma associação binária, porém sendo possível também que a classe esteja vinculada a sí própria, se tornando assim uma associação unária, ou que uma associação seja compartilhada por mais de uma classe, o que conhecemnos por associação ternária ou N-ária, que é um tipo mais raro e complexo.

## Agregação
É um tipo especial de associação, onde tenta-se demonstrar que as informações de um objeto precisam ser complementados pelas informações ocntidas em um ou mais objetos de outra classe, chamados objetos-parte, conhecemos como todo/parte.
Nessa relação, um objeto poderá agregar uma ou mais instâncias de um outro objeto. Para agregar muitas instâncias, a forma mais simples é utilizando arrays. Criamos um array como atributo da classe, sendo que o papel deste array é armazenar inúmeras instâncias de uma outra classe.

Irei exemplificar esta relação pensando em um ambiente Web, onde teríamos o carrinho de compras (classe Carrinhos) com vários itens do tipo produtos (classe Produtos). Para agregar os produtos ao carrinho, usa-se o método IncluirItem( ) na classe Carrinhos, que contém outro método chama ExibeCarrinho() responsável por listar todos os itens pedidos, por meio da listagem dos dados do produto -método ListarDados() da classe Produtos-, e um método FechaCompra( ) reponsável por efetuar a soma dos itens adicionados no carrinho apresentando ao final o preço a ser pago pelo cliente.

## Composição
É uma variação da agregação. Uma composição tenta representar também uma relação todo - parte. No entento, na composição o objeto pai (todo) é responsável por criar e destruir suas partes.
Em uma composição um mesmo objeto parte não pode se associar a mais de uma objeto pai.
