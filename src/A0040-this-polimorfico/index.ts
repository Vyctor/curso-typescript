export class Calculadora {
  constructor(public numero: number) {}

  public adicao(n: number): this {
    this.numero += n;
    return this;
  }

  public subtracao(n: number): this {
    this.numero -= n;
    return this;
  }

  public divisao(n: number): this {
    this.numero /= n;
    return this;
  }

  public multiplicacao(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
calculadora.adicao(5).multiplicacao(2).divisao(2).subtracao(5).pow(3);
console.log(calculadora);

// Builder Pattern -- GoF
export class Requestbuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    if (this.method && this.url) {
      console.log(`Enviando dados via ${this.method} para ${this.url}`);
    } else {
      console.log('Não foi possível enviar os dados. Verifique os parâmetros!');
    }
  }
}

const request = new Requestbuilder();

request.setUrl('http://www.google.com.br').setMethod('post').send();
