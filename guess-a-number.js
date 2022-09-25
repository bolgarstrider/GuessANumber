function guessNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;
    let tries = 0;

    let recursivePlayMore = function () {

        readline.question('Do you want to play more (Y/N): ', answer => {
            tries = 0;

            if (answer == 'y' || answer == 'Y') {
                recursiveAsyncReadLine();
            } else if (answer == 'n' || answer == 'N') {
                console.log('Good Bye!');
                return readline.close();
            } else {
                console.log('Y/N')
                recursivePlayMore();
            }
        })
    }

    let recursiveAsyncReadLine = function () {
        if (tries >= 5) {
            console.log('Game over! 3 wrong tries!');
            recursivePlayMore();
        }


        readline.question('Guess the number (0 - 100): ', number => {
            guess = Number(number);
            if (guess >= 0 && guess <= 100) {

                if (guess == computerGuess) {
                    console.log('You guess it!');
                    recursivePlayMore();
                } else if (guess < computerGuess) {
                    console.log(`Too Low!`);
                    tries++;
                    recursiveAsyncReadLine();
                } else if (guess > computerGuess) {
                    console.log('Too High!');
                    tries++;
                    recursiveAsyncReadLine();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsyncReadLine();
            }

        })
    }

    recursiveAsyncReadLine();
}

guessNumber();