const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

const data = new Date();
const mes = data.getMonth();
const semana = data.getDay();

function dataAtual() {
    let diaSemana;
    let nomeMeses;

    switch (semana) {
        case 0:
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Segunda-feira';
            break;
        case 2:
            diaSemana = 'Terça-feira';
            break;
        case 3:
            diaSemana = 'Quarta-feira';
            break;
        case 4:
            diaSemana = 'Quinta-feira';
            break;
        case 5:
            diaSemana = 'Sexta-feira';
            break;
        case 6:
            diaSemana = 'Sábado';
            break;
        default:
            diaSemana = 'Erro: Dia da semana não existe!'
    }

    function zeroEsquerda(zero) {
        return zero >= 10 ? zero : `0${zero}`;
    }

    switch (mes) {
        case 0:
            nomeMeses = 'Janeiro';
            break;
        case 1:
            nomeMeses = 'Fevereiro';
            break;
        case 2:
            nomeMeses = 'Março';
            break;
        case 3:
            nomeMeses = 'Abril';
            break;
        case 4:
            nomeMeses = 'Maio';
            break;
        case 5:
            nomeMeses = 'Junho';
            break;
        case 6:
            nomeMeses = 'Julho';
            break;
        case 7:
            nomeMeses = 'Agosto';
            break;
        case 8:
            nomeMeses = 'Setembro';
            break;
        case 9:
            nomeMeses = 'Outubro';
            break;
        case 10:
            nomeMeses = 'Novembro';
            break;
        case 11:
            nomeMeses = 'Dezembro';
            break;
        default:
            nomeMeses = 'Erro: mês não encontrado!';
            break;
    }

    h1.innerHTML = `${diaSemana}, ${data.getDate()} de ${nomeMeses} de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`;
}
dataAtual();

//simplificando o codigo:

function dataSimplificada() {
    const opcoes = {
        dateStyle: 'full',
        timeStyle: 'short'
    };
    h2.innerHTML = data.toLocaleString('pt-BR', opcoes);
}
dataSimplificada()