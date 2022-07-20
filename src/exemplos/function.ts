function printaValoresNumericos(n1: number, n2: number): void {
    console.log(n1 + n2);
}

function somarValoresNumericosETratar(n1: number, n2: number, callback: (numero: number) => number): number {
    let resultado = n1 + n2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}

console.log(somarValoresNumericosETratar(2, 2, aoQuadrado))
console.log(somarValoresNumericosETratar(2, 2, dividirPorEleMesmo))