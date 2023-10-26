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

function oddEven(testNumber) {
    let result = "";
    if (testNumber % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }

    return result;
}

console.log(oddEven(sum));

let message = ""

if (oddEven(sum) === userChoise) {
    message = "hai vinto";
} else {
    message = "hai perso";
}

alert(message);