# 2️⃣ Calculadora de partidas Rankeadas

## 💻 Desafio de Projeto

**O que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções


## Objetivo

🔑 Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do cálculo (vitórias - derrotas).

> [!IMPORTANT]<br>
> Se vitórias for menor do que 10 = Ferro<br>
> Se vitórias for entre 11 e 20 = Bronze<br>
> Se vitórias for entre 21 e 50 = Prata<br>
> Se vitórias for entre 51 e 80 = Ouro<br>
> Se vitórias for entre 81 e 90 = Diamante<br>
> Se vitórias for entre 91 e 100= Lendário<br>
> Se vitórias for maior ou igual a 101 = Imortal<br>

<br>
✂️ Vamos considerar um limite de 150, apenas para poder fazer o cálculo randômico é necessario o valor<br>
máximo para o cálculo.<br>

  
## Saída

Ao final devemos exibir uma ***mensagem:***<br>

> [!NOTE]<br>
> "O Herói tem saldo de **{saldoVitorias}** e está no nível de **{nivel}**"

  
## Informações de resolução do código

<p>📚 Precisamos instalar uma biblioteca, o pacote “prompt-sync” no Node.js, utilizando o npm "Node Package Manager".<br>No ambiente Node.js, que é JavaScript do lado do servidor, o prompt não está disponível nativamente, como no navegador.<br>Para obter entrada do usuário no Node.js, precisamos usar módulos de leitura de entrada ou instalar bibliotecas de terceiros, que facilitam a interação do usuário no console.<br>

> Prompt - https://www.npmjs.com/package/prompt-sync <br>

<br>
📂 São dois arquivos javascript no repositório:<br>
<br>

> Arquivo principal **"index.js"** com a entrada randômica e "switch case".<br>
><br>
> Arquivo secundário **"index_02.js"** com entrada manual via "prompt".<br>
  

#### 📋 Usamos o Javascript com o Node.js.

### JavaScript
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### NodeJS
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)