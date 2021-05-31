export function unirObjetos<T, T1>(obj1: T, obj2: T1): T & T1 {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };
const uniao = unirObjetos(obj1, obj2);
console.log(uniao);
