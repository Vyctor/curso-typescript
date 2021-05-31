export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: Array<T>): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(soma(...[1, 2, 3, 'a', 'b', 'c']));
console.log(soma('a', 'b', 'c'));
