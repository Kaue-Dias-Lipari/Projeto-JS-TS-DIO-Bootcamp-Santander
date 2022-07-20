"use strict";
function printaValoresNumericos(n1, n2) {
    console.log(n1 + n2);
}
function somarValoresNumericosETratar(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(2, 2, aoQuadrado));
console.log(somarValoresNumericosETratar(2, 2, dividirPorEleMesmo));
