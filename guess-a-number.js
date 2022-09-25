function guessNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let computerGuess1 = Math.floor(Math.random() * 100);
    let computerGuess2 = Math.floor(Math.random() * 200);
    let computerGuess3 = Math.floor(Math.random() * 300);
    let guess;
    let tries = 0;

    let recursivePlayMore = function () {

        readline.question('Do you want to play more (Y/N): ', answer => {
            tries = 0;

            if (answer == 'y' || answer == 'Y') {
                recursiveAsyncReadLine1();
            } else if (answer == 'n' || answer == 'N') {
                console.log('Good Bye!');
                return readline.close();
            } else {
                console.log('Y/N')
                recursivePlayMore();
            }
        })
    }
    // LEVEL 1
    let recursiveAsyncReadLine1 = function () {
        if (tries >= 5) {
            console.log('Game over! 5 wrong tries!');
            recursivePlayMore();
        }


        readline.question('Guess the number (0 - 100): ', number => {
            guess = Number(number);
            if (guess >= 0 && guess <= 100) {

                if (guess == computerGuess1) {
                    console.log('You guess it!');
                    console.log('LEVEL 2');
                    tries = 0;
                    recursiveAsyncReadLine2();
                } else if (guess < computerGuess1) {
                    console.log(`Too Low!`);
                    tries++;
                    recursiveAsyncReadLine1();
                } else if (guess > computerGuess1) {
                    console.log('Too High!');
                    tries++;
                    recursiveAsyncReadLine1();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsyncReadLine1();
            }

        })
    }
    // LEVEL 2
    let recursiveAsyncReadLine2 = function () {
        if (tries >= 10) {
            console.log('Game over! 10 wrong tries!');
            recursivePlayMore();
        }
        
        readline.question('Guess the number (0 - 200): ', number => {
            guess = Number(number);
            if (guess >= 0 && guess <= 200) {

                if (guess == computerGuess2) {
                    console.log('You guess it!');
                    console.log('LEVEL 3');
                    tries = 0;
                    recursiveAsyncReadLine3();
                } else if (guess < computerGuess2) {
                    console.log(`Too Low!`);
                    tries++;
                    recursiveAsyncReadLine2();
                } else if (guess > computerGuess2) {
                    console.log('Too High!');
                    tries++;
                    recursiveAsyncReadLine2();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsyncReadLine2();
            }

        })
    }
    // LEVEL3
    let recursiveAsyncReadLine3 = function () {
        if (tries >= 15) {
            console.log('Game over! 15 wrong tries!');
            recursivePlayMore();
        }
        
        readline.question('Guess the number (0 - 300): ', number => {
            guess = Number(number);
            if (guess >= 0 && guess <= 300) {

                if (guess == computerGuess3) {
                    console.log('You guess it!');
                    tries = 0;
                    recursivePlayMore();
                } else if (guess < computerGuess3) {
                    console.log(`Too Low!`);
                    tries++;
                    recursiveAsyncReadLine3();
                } else if (guess > computerGuess3) {
                    console.log('Too High!');
                    tries++;
                    recursiveAsyncReadLine3();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsyncReadLine3();
            }

        })
    }

    recursiveAsyncReadLine1();
}

guessNumber();