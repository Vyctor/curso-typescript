type CoresObj = {
  vermelho: string;
  verde: string;
  azul: string;
};

const coresObj: CoresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(cor: keyof CoresObj, cores: typeof coresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
