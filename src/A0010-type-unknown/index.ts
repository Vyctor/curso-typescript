// Unknown funciona como um any mais seguro
let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

// O tipo unknown é mais seguro que o any pois só permite que sejam realizadas operacoes com ele caso se verifique o tipo que possui.
if (typeof x === 'number') console.log(x + y);
