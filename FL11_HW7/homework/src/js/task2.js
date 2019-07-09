const maxAttempts = 3;
const num1 = 100;
const num2 = 50;
const num3 = 25;
const wins = [num1, num2, num3];
const half = 2;
const maxNumAdd = 4;

if (confirm('Do you want to play a game?')) {
    let totalAmount = 0;
    const minNum = 0;
    let maxNum = 8;
    let chosenNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    console.log('chosenNumber', chosenNumber);
    let multiplier = 1;
    for (let i = 1; i <= maxAttempts; i++) {
        const promptMessage = `Choose a roulette pocket number from ${minNum} to ${maxNum}. 
            Attempts left: ${maxAttempts + 1 - i}
            Total prize: ${totalAmount}
            Possible prize on current attempt: ${wins[i - 1] * multiplier}$`;
        if (+prompt(promptMessage) === chosenNumber) {
            totalAmount += wins[i - 1] * multiplier;
            console.log('totalAmount', totalAmount);
            if (confirm(`Congratulation, you won! Your prize is: ${totalAmount} $. Do you want to continue?`)) {
                i = 0;
                multiplier = multiplier * half;
                maxNum += maxNumAdd;
                chosenNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
            } else {
                alert(`Thank you for your participation. Your prize is ${totalAmount} $.`);
                if (confirm(`Do you want to play again?`)) {
                    i = 0;
                    multiplier = multiplier * half;
                    maxNum += maxNumAdd;
                    chosenNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
                } else {
                    break;
                }
            }
        }
        if (i === maxAttempts) {
            alert(`Thank you for your participation. Your prize is ${totalAmount} $.`);
            if (confirm(`Do you want to play again?`)) {
                i = 0;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}