type FilterCallback<T> = (value: T, index?: number, array?: Array<T>) => boolean;

export function meuFilter<T>(array: Array<T>, callbackFn: FilterCallback<T>): Array<T> {
  const novoArray = new Array<T>();

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

const novoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(meuFilter(novoArray, (x) => x % 2 === 1));
