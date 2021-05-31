type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: Array<number>): number;
};

const adder: Adder = (x: number, y?: number, ...args: Array<number>) => {
  if (x && y && args.length > 0) {
    return args.reduce((value, prev) => value + prev, 0) + x + (y || 0);
  } else if (x && y) {
    return x + y;
  }
  return x;
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
