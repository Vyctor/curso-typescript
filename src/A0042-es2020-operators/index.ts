// Encadeamento opcional <<?>> e Operador de coalescência nula <<??>>
// Coalescência Nula checa o não valor, que é null ou undefined
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O Texto',
};

console.log(documento.data ?? 'Não existe data');
console.log(undefined ?? 'Não existe data');
