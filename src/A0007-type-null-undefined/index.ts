let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

interface PersonDto {
  firstName: string;
  lastName?: string;
}

export function createPerson(firstName: string, lastName?: string): PersonDto {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}
