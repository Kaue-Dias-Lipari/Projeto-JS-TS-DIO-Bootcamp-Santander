"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'oi';
anyEstaDeVolta = false;
let unknownValor;
unknownValor = 2;
unknownValor = 'ola';
unknownValor = true;
unknownValor = 'vai sim';
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
