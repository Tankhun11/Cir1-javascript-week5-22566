//3.Generater Function
function* gen() {
    yield 1;
    yield 2;
    yield 500;
    yield;
     
}
//Call function gen()
const muygen = gen()
console.log(muygen.next().value)
console.log(muygen.next().value);
console.log(muygen.next().value);
console.log(muygen.next().value);