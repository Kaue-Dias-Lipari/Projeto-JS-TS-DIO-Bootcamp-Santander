let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'oi';
anyEstaDeVolta = false;

let unknownValor: unknown;
unknownValor = 2;
unknownValor = 'ola';
unknownValor = true;
unknownValor = 'vai sim';

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo};
}