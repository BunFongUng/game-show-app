class Game {
    constructor() {
        this.incorrect = 0;
        this.life = 5;
        this.phrases = ['how are you', 'i love you', 'i need you', 'programming', 'hacker', 'web developer'];
        this.phraseClass = '';
    }

    /**
     * generate random index of phrases  
     * and return phrase of that random index
     */
    generateRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        this.randomPhrase = this.phrases[randomNumber];
        return this.randomPhrase;
    }

    handleInteraction(event, letter) {
        const letterIsInPhrase = this.phraseClass.isLetterMatch(letter);

        if (letterIsInPhrase) {
            this.phraseClass.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            if (event instanceof KeyboardEvent) {
                const worngInputs = document.querySelectorAll('.wrong');

                if (worngInputs) {
                    for (let i = 0; i < worngInputs.length; i++) {
                        if (worngInputs[i].textContent === letter) {
                            return false;
                        }
                    }
                }

                const buttonElements = document.querySelectorAll('.key');
                let targetLetter;

                for (let i = 0; i < buttonElements.length; i++) {
                    if (buttonElements[i].textContent === letter) {
                        targetLetter = buttonElements[i];
                    }
                }

                targetLetter.classList.add('wrong');
            } else {
                event.target.classList.add('wrong');
            }
            
            this.removeLife();
        }
    }

    removeLife() {
        this.incorrect += 1;
        this.life -= 1;
        
        document.getElementById('life').innerText = `Life: ${this.life}`;
        if (this.incorrect === 5 && this.life === 0) {
            this.gameOver('You lost, no more lives left!');
            document.getElementById('btn_reset').classList.remove('hide');
            document.getElementById('life').classList.add('hide');
        }
    }

    checkForWin() {
        const showCount = document.querySelectorAll('.show').length;
        const letterCount = this.phraseClass.phrase.length;

        if (letterCount === showCount) {
            this.gameOver(`You won! The phrase word <b>${this.randomPhrase}</b>`);
            document.getElementById('btn_reset').classList.remove('hide');
        }
    }

    gameOver(message) {
        document.getElementById('game-over-message').innerHTML = message;
        document.getElementById('btn_reset').textContent = 'Reset Game';
    }

    startGame() {
        if (document.getElementById('btn_reset').textContent === 'Reset Game') {
            window.location.reload(true);
            return;
        }

        const phrase = this.generateRandomPhrase();
        
        this.phraseClass = new Phrase(phrase);
    }

}