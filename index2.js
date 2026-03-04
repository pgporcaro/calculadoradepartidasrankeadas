//Calculadora de Partidas Rankeadas

// Função que calcula o saldo e define o nível
function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para determinar o nível baseado nas VITÓRIAS
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna um objeto com os dois valores
    return { saldoVitorias, nivel };
}

// Exemplo de uso com um Laço de Repetição para testar vários cenários
const listaDePartidas = [
    { v: 15, d: 5 },
    { v: 55, d: 10 },
    { v: 105, d: 20 }
];

for (let i = 0; i < listaDePartidas.length; i++) {
    let resultado = calcularNivel(listaDePartidas[i].v, listaDePartidas[i].d);
    
    // Mensagem de saída
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
}