type MapStringsCallback = (item: string) => string;

function mapStrings(array: Array<string>, callbackFn: MapStringsCallback): Array<string> {
  const newArray: Array<string> = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMapped, abc);

export { mapStrings };
