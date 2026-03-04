# Calculadora de Partidas Rankeadas 🎮

Este projeto nasceu de um desafio de lógica de programação onde o objetivo era criar um sistema que calculasse o saldo de vitórias de um jogador e, com base nisso, definisse em qual nível de "Rank" ele se encontra.

A ideia aqui foi exercitar como os dados fluem dentro de uma aplicação, desde a entrada de valores brutos até a entrega de uma mensagem personalizada para o usuário.

## 🧠 O que eu pratiquei aqui:

Para resolver o problema, estruturei o código focando em quatro pilares principais:

* **Funções:** Criei uma função reutilizável que processa a entrada (vitórias/derrotas) e devolve os dados mastigados.
* **Cálculos de Saldo:** Usei operadores aritméticos simples para chegar ao resultado final das partidas.
* **Tomada de Decisão:** Implementei uma série de condicionais (if/else if) para classificar o jogador nos níveis, que vão desde o Ferro até o Imortal.
* **Saída de Dados:** Formatei a mensagem final usando template strings para deixar o resultado legível no console.

## 🚀 Como funciona a classificação?

A lógica segue o critério de quantidade de vitórias:

| Vitórias | Nível |
| :--- | :--- |
| Abaixo de 10 | Ferro |
| 11 a 20 | Bronze |
| 21 a 50 | Prata |
| 51 a 80 | Ouro |
| 81 a 90 | Diamante |
| 91 a 100 | Lendário |
| 101 ou mais | Imortal |

## 🛠️ Tecnologias
* **Linguagem:** JavaScript (Vanilla)
* **Ambiente:** Node.js

---

### Conecte-se comigo
Se tiver alguma sugestão de como refatorar esse código ou quiser bater um papo sobre lógica, sinta-se à vontade para abrir uma Issue ou me chamar!