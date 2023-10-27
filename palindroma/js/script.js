const userWord = prompt("Dimmi una parola e vediamo se é palindroma")

let message = "";

if(isPalindroma(userWord)) {
    message = "La parola é palindroma";
} else {
    message = "la parola non é palindroma";
}

function isPalindroma(word) {
    const invWord = invertWord(word);

    if(word === invWord) {
        return true;
    } else {
        return false;
    }
}

function invertWord(word) {
    let invertWord = "";
    for(let i = word.length - 1; i <=0; i--) {
        invertWord += word[i];
    }
    return invertWord
}

