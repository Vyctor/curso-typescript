export class CarrinhoDeCompras {
  private readonly produtos: Array<Produto> = [];

  public inserirProdutos(...produtos: Array<Produto>): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  public quantidadeProdutos(): number {
    return this.produtos.length;
  }

  public valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 29.9);
const produto3 = new Produto('Caneta', 10.2);
const carrinho = new CarrinhoDeCompras();

carrinho.inserirProdutos(produto1);
carrinho.inserirProdutos(produto2);
carrinho.inserirProdutos(produto3);
console.log(carrinho.valorTotal());
