function sum(a, b){
  return a + b;
}

// named export
// ter varios exports dentro do mesmo arquivo
// só pode importar com o mesmo nome
// import precisa das chavesd
export function sub(a, b){
  return a - b;
}

function mult(a, b){
  return a * b;
}

function div(a, b){
  return a / b
}

const PI = 3.14;

// método Principal
// só pode ter um default por arquivo
// importar com qualquer nome
// não precisa de chaves para importar
export default sum;

export {
  mult as multiply,
  div,
  PI
};
