if (confirm('Do you want to play a game?')) {
  const minNum = 0;
  const stepNum = 4;
  const prize1 = 100;
  const prize2 = 50;
  const prize3 = 25;
  const prizes = [prize1, prize2, prize3];
  let totalPrize = 0;
  const entryMaxNum = 8;
  let maxNum = 8;
  let randomInt = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  console.log(randomInt);
  let givenGuesses = 3;
  let mult = 1;
  const entryMult = 1;
  const half = 2;
  let possiblePrize = 0;
  let attemptsLeft = 3;
  const entryAttemptsLeft = 3;

  for (let i = 0; i < givenGuesses; i++) {
    possiblePrize = prizes[i];
    possiblePrize *= mult;
    console.log(`possibbleprize is : ${possiblePrize}`);
    let userNumInput = +prompt(`Choose a roulette pocket number from 0 to 8. 
    Attempts left: ${attemptsLeft}
    Total prize: ${totalPrize}
    Possible prize on current attempt: ${possiblePrize}$`);
    attemptsLeft--;
    console.log(`totalprize is : ${totalPrize}`);
    if (userNumInput === randomInt) {
      totalPrize = totalPrize + possiblePrize;
      if (confirm(`Congratulation, you won! Your prize is: ${totalPrize} $. Do you want to continue?`)) {
        maxNum = maxNum + stepNum;
        randomInt = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        i = 0;
        attemptsLeft = entryAttemptsLeft;
        mult = mult * half;
      } else {
        alert(`Thank you for your participation. Your prize is ${totalPrize} $.`);
        if (confirm('Do you want to play again?')) {
          maxNum = entryMaxNum;
          randomInt = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
          i = 0;
          attemptsLeft = entryAttemptsLeft;
          mult = entryMult;
        } else {
          console.log('breaking;');
          break;
        }
      }
    } else if (attemptsLeft > 0) {
      continue;

    } else if (attemptsLeft === 0) {
      alert(`Thank you for your participation. Your prize is ${totalPrize} $.`);
    }
  }

} else {
  alert('You did not become a billionaire, but can.');
}