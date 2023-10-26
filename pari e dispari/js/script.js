const userChoise = (prompt("Scegli pari o dispari"));
const userNumber = parseInt(prompt("Scegli un nemero da 1 a 5"));
console.log(userChoise, userNumber)

function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

console.log(generateRandomNumber(1, 5));

const pcNumber = generateRandomNumber(1, 5);

const sum = pcNumber + userNumber;
console.log(sum);