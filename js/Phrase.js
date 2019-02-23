class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    /**
     * creating li element of letter of phrase
     */
    createLetterOfPhrase() {
        const phrase = this.phrase;
        let letterItems = [];
        for (let i = 0; i < phrase.length; i++) {
            if (phrase[i] === ' ') {
                letterItems.push(`<li class="hide show letter ${phrase[i]}"> ${phrase[i]} </li>`);
            } else {
                letterItems.push(`<li class="letter ${phrase[i]}"> ${phrase[i]} </li>`);
            }
        }

        return letterItems.join('');
    }

    /**
     * @param {String} letter 
     * checking letter is match to the phrase
     */
    isLetterMatch(letter) {
        return !!this.phrase.match(letter);
    }

    /**
     * @param {String} letter 
     * show matched letter by added class show
     */
    showMatchedLetter(letter) {
        const letterElements = document.getElementsByClassName(letter);
        for (let i = 0; i < letterElements.length; i++) {
            letterElements[i].classList.add('show');
        }
    }
}