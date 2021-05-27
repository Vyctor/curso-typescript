function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((next, prev) => next + prev, 0);
}

function concatenaString(...args: Array<string>): string {
  return args.reduce((next, prev) => next + prev, '');
}

const result = multiplicaArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(result);
