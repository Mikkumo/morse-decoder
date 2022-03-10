const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ''
    const space = '**********'

    for(let i = 0; i < expr.length; i = i + 10) {
        let symbol = expr.substring(i, i + 10)
        result += (symbol === space) ? ' ' : MORSE_TABLE[decodedToMorse(symbol)]
    }
    return result
}

function decodedToMorse(symbol) {
    let code = ''
    for(let j = 0; j < symbol.length; j = j + 2) {
        let char = symbol[j] + symbol[j + 1]
        if (char === '10') code += '.'
        else if (char === '11') code += '-'
    }
    return code
}

module.exports = {
    decode
}