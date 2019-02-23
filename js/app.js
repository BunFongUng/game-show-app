// initialize the Keyboard class
const keyboardLayout = new Keyboard();
const keyboardRowsElement = keyboardLayout.createKeyboardLayout();
const keyboardElement = $('#keyboard');

$(keyboardElement).append(keyboardRowsElement);

// initialize the Game class
const game = new Game();

function buttonHandler(event) {
    if (event.target.tagName === 'BUTTON') {
        document.getElementById('btn_reset').classList.add('hide');
        const letter = event.target.textContent;
        const targetLetter = event.target;

        targetLetter.setAttribute('disabled', 'true');
        targetLetter.classList.add('wrong');
        game.handleInteraction(event, letter);
    }
}

function resetOrStartGame() {
    game.startGame();
    const phraseItems = game.phraseClass.createLetterOfPhrase();
    const list = $('#phrase ul');
    list.empty();
    list.append(phraseItems);
    document.getElementById('btn_reset').innerText = 'Next Phrase';
    document.getElementById('life').innerText = `Life: ${game.life}`;
}

document.getElementById('keyboard').addEventListener('click', buttonHandler);
document.getElementById('btn_reset').addEventListener('click', resetOrStartGame);