class Keyboard {
    constructor() {
        this.keyboardRows =  {
            first_row: [
                'q',
                'w',
                'e',
                'r',
                't',
                'y',
                'u',
                'i',
                'o',
                'p'
            ],
            second_row: [
                'a',
                's',
                'd',
                'f',
                'g',
                'h',
                'j',
                'k',
                'l'
            ],
            third_row: [
                'z',
                'x',
                'c',
                'v',
                'b',
                'n',
                'm'
            ]
        };
    }

    createKeyboardLayout() {
        const keyboardRowsElement = [];
        for (let key in this.keyboardRows) {
            let keyRowElement = '<div class="keyrow">';
            for (let i = 0; i < this.keyboardRows[key].length; i++) {
                keyRowElement += `<button class="key">${this.keyboardRows[key][i]}</button>`;
                if (this.keyboardRows[key].length - 1 === i) {
                    keyRowElement += '</div>';
                }
            }
            keyboardRowsElement.push(keyRowElement);
        }

       return keyboardRowsElement.join('');
    }
}