const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora',
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor',
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Arquiteta',
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Desenvolvedor,
    Arquiteta,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Desenvolvedora,
}

const kaue: Pessoa = {
    nome: 'Kauê',
    idade: 18,
    profissao: Profissao.Desenvolvedor,
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 22,
    profissao: Profissao.Desenvolvedora,
    materias: ['matematica', 'programação', 'lógica']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 17,
    materias: ['geografia', 'história']
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);