"use strict";
const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora',
};
pessoa.idade = 29;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor',
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Arquiteta',
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Desenvolvedor"] = 3] = "Desenvolvedor";
    Profissao[Profissao["Arquiteta"] = 4] = "Arquiteta";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Desenvolvedora,
};
const kaue = {
    nome: 'Kauê',
    idade: 18,
    profissao: Profissao.Desenvolvedor,
};
const jessica = {
    nome: 'Jessica',
    idade: 22,
    profissao: Profissao.Desenvolvedora,
    materias: ['matematica', 'programação', 'lógica']
};
const monica = {
    nome: 'Monica',
    idade: 17,
    materias: ['geografia', 'história']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
