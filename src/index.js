// Declaration of variables
let losses;
let level;
let rankedBalance;
let victories;

// Repetition loop "do while" for the inputs
do {
    victories = Math.floor(Math.random() * 150) + 1;
} while (victories <= 0 || victories > 150);

console.log("Victories: " + victories);

do {
    losses = Math.floor(Math.random() * 90) + 1;
} while (losses <= 0 || losses > 90);

console.log("Losses: " + losses);

// Function receives wins and losses as parameters, returns a variable with the balance of wins
let balanceWins = matchCalculator(victories, losses);

function matchCalculator (winner, loser) {
    rankedBalance = winner - loser;

    if (rankedBalance < 0) {
        rankedBalance = 1;
    } else if (rankedBalance >= 0) {
        rankedBalance = rankedBalance;
    }
    return rankedBalance;
}

console.log("Balance the wins: " + balanceWins);

// Decision structure (switch case) to choose level
switch (true) {
    case balanceWins >= 0 && balanceWins <= 10:
        level = "Ferro";
        break;

    case balanceWins >= 11 && balanceWins <= 20:
        level = "Bronze";
        break;

    case balanceWins >= 21 && balanceWins <= 50:
        level = "Prata";
        break;

    case balanceWins >= 51 && balanceWins <= 80:
        level = "Ouro";
        break;

    case balanceWins >= 81 && balanceWins <= 90:
        level = "Diamante";
        break;

    case balanceWins >= 91 && balanceWins <= 100:
        level = "Lendário";
        break;

    case balanceWins >= 101 && balanceWins <= 150:
        level = "Imortal";
        break;
}

// Showing program output
console.log(`O Herói tem saldo de ${balanceWins} vitórias e está no nível ${level}.`);