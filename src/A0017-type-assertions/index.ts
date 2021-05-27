// Recomendado

// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'read';

// Não Recomendado

// Non Null Assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
const body4 = document.querySelector('body') as unknown as number;
body4.toFixed(2);
