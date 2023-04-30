function createMainElements() {
  const body = document.getElementsByTagName('body');
  const main = document.createElement('main');
  main.className = 'main';
  body[0].append(main);
  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'RSS Virtual Keyboard';
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  textArea.rows = '5';
  textArea.cols = '70';
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const os = document.createElement('p');
  const lang = document.createElement('p');
  os.className = 'description';
  os.textContent = 'The Keyboard was created in the Windows operating system';
  lang.className = 'description';
  lang.textContent = 'To switch the language combination (english/lithuanian): left ctrl + alt';
  main.append(title, textArea, keyboard, os, lang);
}

createMainElements();

const buttons = [
  {
    className: 'tilde',
    eng: {
      caps: '`',
      lower: '`',
      upper: '~',
      shiftCaps: '~',
    },
    lit: {
      caps: '`',
      lower: '`',
      upper: '~',
      shiftCaps: '~',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'dgOne',
    eng: {
      caps: '1',
      lower: '1',
      upper: '!',
      shiftCaps: '!',
    },
    lit: {
      caps: 'Ą',
      lower: 'ą',
      upper: 'Ą',
      shiftCaps: 'ą',
      alt: '1',
      altShift: '!',
    },
  },
  {
    className: 'dgTwo',
    eng: {
      caps: '2',
      lower: '2',
      upper: '@',
      shiftCaps: '@',
    },
    lit: {
      caps: 'Č',
      lower: 'ą',
      upper: 'Ą',
      shiftCaps: 'ą',
      alt: '1',
      altShift: '!',
    },
  },
  {
    className: 'dgThree',
    eng: {
      caps: '3',
      lower: '3',
      upper: '#',
      shiftCaps: '#',
    },
    lit: {
      caps: 'Ę',
      lower: 'ę',
      upper: 'Ę',
      shiftCaps: 'ę',
      alt: '3',
      altShift: '#',
    },
  },
  {
    className: 'dgFour',
    eng: {
      caps: '4',
      lower: '4',
      upper: '#',
      shiftCaps: '#',
    },
    lit: {
      caps: 'Ę',
      lower: 'ę',
      upper: 'Ę',
      shiftCaps: 'ę',
      alt: '4',
      altShift: '$',
    },
  },
  {
    className: 'dgFive',
    eng: {
      caps: '5',
      lower: '5',
      upper: '%',
      shiftCaps: '%',
    },
    lit: {
      caps: 'Į',
      lower: 'į',
      upper: 'Į',
      shiftCaps: 'į',
      alt: '5',
      altShift: '%',
    },
  },
  {
    className: 'dgSix',
    eng: {
      caps: '6',
      lower: '6',
      upper: '^',
      shiftCaps: '^',
    },
    lit: {
      caps: 'Š',
      lower: 'š',
      upper: 'Š',
      shiftCaps: 'š',
      alt: '6',
      altShift: '^',
    },
  },
  {
    className: 'dgSeven',
    eng: {
      caps: '7',
      lower: '7',
      upper: '&',
      shiftCaps: '&',
    },
    lit: {
      caps: 'Ų',
      lower: 'ų',
      upper: 'Ų',
      shiftCaps: 'ų',
      alt: '7',
      altShift: '&',
    },
  },
  {
    className: 'dgEight',
    eng: {
      caps: '8',
      lower: '8',
      upper: '*',
      shiftCaps: '*',
    },
    lit: {
      caps: 'Ū',
      lower: 'ū',
      upper: 'Ū',
      shiftCaps: 'ū',
      alt: '8',
      altShift: '*',
    },
  },
  {
    className: 'dgNine',
    eng: {
      caps: '9',
      lower: '9',
      upper: '(',
      shiftCaps: '(',
    },
    lit: {
      caps: '9',
      lower: '9',
      upper: '(',
      shiftCaps: '(',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'dgZero',
    eng: {
      caps: '0',
      lower: '0',
      upper: ')',
      shiftCaps: ')',
    },
    lit: {
      caps: '0',
      lower: '0',
      upper: ')',
      shiftCaps: ')',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'minus',
    eng: {
      caps: '-',
      lower: '-',
      upper: '_',
      shiftCaps: '_',
    },
    lit: {
      caps: '-',
      lower: '-',
      upper: '_',
      shiftCaps: '_',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'equal',
    eng: {
      caps: '=',
      lower: '=',
      upper: '+',
      shiftCaps: '+',
    },
    lit: {
      caps: 'Ž',
      lower: 'ž',
      upper: 'Ž',
      shiftCaps: 'ž',
      alt: '=',
      altShift: '+',
    },
  },
  {
    className: 'backspace',
    eng: {
      caps: 'Backspace',
      lower: 'Backspace',
      upper: 'Backspace',
      shiftCaps: 'Backspace',
    },
    lit: {
      caps: 'Backspace',
      lower: 'Backspace',
      upper: 'Backspace',
      shiftCaps: 'Backspace',
      alt: 'Backspace',
      altShift: 'Backspace',
    },
  },
  {
    className: 'tab',
    eng: {
      caps: 'Tab',
      lower: 'Tab',
      upper: 'Tab',
      shiftCaps: 'Tab',
    },
    lit: {
      caps: 'Tab',
      lower: 'Tab',
      upper: 'Tab',
      shiftCaps: 'Tab',
      alt: 'Tab',
      altShift: 'Tab',
    },
  },
  {
    className: 'letterQ',
    eng: {
      caps: 'Q',
      lower: 'q',
      upper: 'Q',
      shiftCaps: 'q',
    },
    lit: {
      caps: 'Q',
      lower: 'q',
      upper: 'Q',
      shiftCaps: 'q',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterW',
    eng: {
      caps: 'W',
      lower: 'w',
      upper: 'W',
      shiftCaps: 'w',
    },
    lit: {
      caps: 'W',
      lower: 'w',
      upper: 'W',
      shiftCaps: 'w',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterE',
    eng: {
      caps: 'E',
      lower: 'e',
      upper: 'E',
      shiftCaps: 'e',
    },
    lit: {
      caps: 'E',
      lower: 'e',
      upper: 'E',
      shiftCaps: 'e',
      alt: '€',
      altShift: '',
    },
  },
  {
    className: 'letterR',
    eng: {
      caps: 'R',
      lower: 'r',
      upper: 'R',
      shiftCaps: 'r',
    },
    lit: {
      caps: 'R',
      lower: 'r',
      upper: 'R',
      shiftCaps: 'r',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterT',
    eng: {
      caps: 'T',
      lower: 't',
      upper: 'T',
      shiftCaps: 't',
    },
    lit: {
      caps: 'T',
      lower: 't',
      upper: 'T',
      shiftCaps: 't',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterY',
    eng: {
      caps: 'Y',
      lower: 'y',
      upper: 'Y',
      shiftCaps: 'y',
    },
    lit: {
      caps: 'Y',
      lower: 'y',
      upper: 'Y',
      shiftCaps: 'y',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterU',
    eng: {
      caps: 'U',
      lower: 'u',
      upper: 'U',
      shiftCaps: 'u',
    },
    lit: {
      caps: 'U',
      lower: 'u',
      upper: 'U',
      shiftCaps: 'u',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterI',
    eng: {
      caps: 'I',
      lower: 'i',
      upper: 'I',
      shiftCaps: 'i',
    },
    lit: {
      caps: 'I',
      lower: 'i',
      upper: 'I',
      shiftCaps: 'i',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterO',
    eng: {
      caps: 'O',
      lower: 'o',
      upper: 'O',
      shiftCaps: 'o',
    },
    lit: {
      caps: 'O',
      lower: 'o',
      upper: 'O',
      shiftCaps: 'o',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterP',
    eng: {
      caps: 'P',
      lower: 'p',
      upper: 'P',
      shiftCaps: 'p',
    },
    lit: {
      caps: 'P',
      lower: 'p',
      upper: 'P',
      shiftCaps: 'p',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'bracketOpen',
    eng: {
      caps: '[',
      lower: '[',
      upper: '{',
      shiftCaps: '{',
    },
    lit: {
      caps: '[',
      lower: '[',
      upper: '{',
      shiftCaps: '{',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'bracketClose',
    eng: {
      caps: ']',
      lower: ']',
      upper: '}',
      shiftCaps: '}',
    },
    lit: {
      caps: ']',
      lower: ']',
      upper: '}',
      shiftCaps: '}',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'backslash',
    eng: {
      caps: '\\',
      lower: '\\',
      upper: '|',
      shiftCaps: '|',
    },
    lit: {
      caps: '\\',
      lower: '\\',
      upper: '|',
      shiftCaps: '|',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'delete',
    eng: {
      caps: 'Del',
      lower: 'Del',
      upper: 'Del',
      shiftCaps: 'Del',
    },
    lit: {
      caps: 'Del',
      lower: 'Del',
      upper: 'Del',
      shiftCaps: 'Del',
      alt: 'Del',
      altShift: 'Del',
    },
  },
  {
    className: 'capsLock',
    eng: {
      caps: 'CapsLock',
      lower: 'CapsLock',
      upper: 'CapsLock',
      shiftCaps: 'CapsLock',
    },
    lit: {
      caps: 'CapsLock',
      lower: 'CapsLock',
      upper: 'CapsLock',
      shiftCaps: 'CapsLock',
      alt: 'CapsLock',
      altShift: 'CapsLock',
    },
  },
  {
    className: 'letterA',
    eng: {
      caps: 'A',
      lower: 'a',
      upper: 'A',
      shiftCaps: 'a',
    },
    lit: {
      caps: 'A',
      lower: 'a',
      upper: 'A',
      shiftCaps: 'a',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterS',
    eng: {
      caps: 'S',
      lower: 's',
      upper: 'S',
      shiftCaps: 's',
    },
    lit: {
      caps: 'S',
      lower: 's',
      upper: 'S',
      shiftCaps: 's',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterD',
    eng: {
      caps: 'D',
      lower: 'd',
      upper: 'D',
      shiftCaps: 'd',
    },
    lit: {
      caps: 'D',
      lower: 'd',
      upper: 'D',
      shiftCaps: 'd',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterF',
    eng: {
      caps: 'F',
      lower: 'f',
      upper: 'F',
      shiftCaps: 'f',
    },
    lit: {
      caps: 'F',
      lower: 'f',
      upper: 'F',
      shiftCaps: 'f',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterG',
    eng: {
      caps: 'G',
      lower: 'g',
      upper: 'G',
      shiftCaps: 'g',
    },
    lit: {
      caps: 'G',
      lower: 'g',
      upper: 'G',
      shiftCaps: 'g',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterH',
    eng: {
      caps: 'H',
      lower: 'h',
      upper: 'H',
      shiftCaps: 'h',
    },
    lit: {
      caps: 'H',
      lower: 'h',
      upper: 'H',
      shiftCaps: 'h',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterJ',
    eng: {
      caps: 'J',
      lower: 'j',
      upper: 'J',
      shiftCaps: 'j',
    },
    lit: {
      caps: 'J',
      lower: 'j',
      upper: 'J',
      shiftCaps: 'j',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterK',
    eng: {
      caps: 'K',
      lower: 'k',
      upper: 'K',
      shiftCaps: 'k',
    },
    lit: {
      caps: 'K',
      lower: 'k',
      upper: 'K',
      shiftCaps: 'k',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterL',
    eng: {
      caps: 'L',
      lower: 'l',
      upper: 'L',
      shiftCaps: 'l',
    },
    lit: {
      caps: 'L',
      lower: 'l',
      upper: 'L',
      shiftCaps: 'l',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'semicolon',
    eng: {
      caps: ';',
      lower: ';',
      upper: ':',
      shiftCaps: ':',
    },
    lit: {
      caps: ';',
      lower: ';',
      upper: ':',
      shiftCaps: ':',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'quote',
    eng: {
      caps: '\'',
      lower: '\'',
      upper: '"',
      shiftCaps: '"',
    },
    lit: {
      caps: '\'',
      lower: '\'',
      upper: '"',
      shiftCaps: '"',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'enter',
    eng: {
      caps: 'Enter',
      lower: 'Enter',
      upper: 'Enter',
      shiftCaps: 'Enter',
    },
    lit: {
      caps: 'Enter',
      lower: 'Enter',
      upper: 'Enter',
      shiftCaps: 'Enter',
      alt: 'Enter',
      altShift: 'Enter',
    },
  },
  {
    className: 'leftShift',
    eng: {
      caps: 'Shift',
      lower: 'Shift',
      upper: 'Shift',
      shiftCaps: 'Shift',
    },
    lit: {
      caps: 'Shift',
      lower: 'Shift',
      upper: 'Shift',
      shiftCaps: 'Shift',
      alt: 'Shift',
      altShift: 'Shift',
    },
  },
  {
    className: 'letterZ',
    eng: {
      caps: 'Z',
      lower: 'z',
      upper: 'Z',
      shiftCaps: 'z',
    },
    lit: {
      caps: 'Z',
      lower: 'z',
      upper: 'Z',
      shiftCaps: 'z',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterX',
    eng: {
      caps: 'X',
      lower: 'x',
      upper: 'X',
      shiftCaps: 'x',
    },
    lit: {
      caps: 'X',
      lower: 'x',
      upper: 'X',
      shiftCaps: 'x',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterC',
    eng: {
      caps: 'C',
      lower: 'c',
      upper: 'C',
      shiftCaps: 'c',
    },
    lit: {
      caps: 'C',
      lower: 'c',
      upper: 'C',
      shiftCaps: 'c',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterV',
    eng: {
      caps: 'V',
      lower: 'v',
      upper: 'V',
      shiftCaps: 'v',
    },
    lit: {
      caps: 'V',
      lower: 'v',
      upper: 'V',
      shiftCaps: 'v',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterB',
    eng: {
      caps: 'B',
      lower: 'b',
      upper: 'B',
      shiftCaps: 'b',
    },
    lit: {
      caps: 'B',
      lower: 'b',
      upper: 'B',
      shiftCaps: 'b',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterN',
    eng: {
      caps: 'N',
      lower: 'n',
      upper: 'N',
      shiftCaps: 'n',
    },
    lit: {
      caps: 'N',
      lower: 'n',
      upper: 'N',
      shiftCaps: 'n',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'letterM',
    eng: {
      caps: 'M',
      lower: 'm',
      upper: 'M',
      shiftCaps: 'm',
    },
    lit: {
      caps: 'M',
      lower: 'm',
      upper: 'M',
      shiftCaps: 'm',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'comma',
    eng: {
      caps: ',',
      lower: ',',
      upper: '<',
      shiftCaps: '<',
    },
    lit: {
      caps: ',',
      lower: ',',
      upper: '<',
      shiftCaps: '<',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'dot',
    eng: {
      caps: '.',
      lower: '.',
      upper: '>',
      shiftCaps: '>',
    },
    lit: {
      caps: '.',
      lower: '.',
      upper: '>',
      shiftCaps: '>',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'slash',
    eng: {
      caps: '/',
      lower: '/',
      upper: '?',
      shiftCaps: '?',
    },
    lit: {
      caps: '/',
      lower: '/',
      upper: '?',
      shiftCaps: '?',
      alt: '',
      altShift: '',
    },
  },
  {
    className: 'arrowUp',
    eng: {
      caps: '▲',
      lower: '▲',
      upper: '▲',
      shiftCaps: '▲',
    },
    lit: {
      caps: '▲',
      lower: '▲',
      upper: '▲',
      shiftCaps: '▲',
      alt: '▲',
      altShift: '▲',
    },
  },
  {
    className: 'rightShift',
    eng: {
      caps: 'Shift',
      lower: 'Shift',
      upper: 'Shift',
      shiftCaps: 'Shift',
    },
    lit: {
      caps: 'Shift',
      lower: 'Shift',
      upper: 'Shift',
      shiftCaps: 'Shift',
      alt: 'Shift',
      altShift: 'Shift',
    },
  },
  {
    className: 'leftCtrl',
    eng: {
      caps: 'Ctrl',
      lower: 'Ctrl',
      upper: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
    lit: {
      caps: 'Ctrl',
      lower: 'Ctrl',
      upper: 'Ctrl',
      shiftCaps: 'Ctrl',
      alt: 'Ctrl',
      altShift: 'Ctrl',
    },
  },
  {
    className: 'win',
    eng: {
      caps: 'Win',
      lower: 'Win',
      upper: 'Win',
      shiftCaps: 'Win',
    },
    lit: {
      caps: 'Win',
      lower: 'Win',
      upper: 'Win',
      shiftCaps: 'Win',
      alt: 'Win',
      altShift: 'Win',
    },
  },
  {
    className: 'leftAlt',
    eng: {
      caps: 'Alt',
      lower: 'Alt',
      upper: 'Alt',
      shiftCaps: 'Alt',
    },
    lit: {
      caps: 'Alt',
      lower: 'Alt',
      upper: 'Alt',
      shiftCaps: 'Alt',
      alt: 'Alt',
      altShift: 'Alt',
    },
  },
  {
    className: 'space',
    eng: {
      caps: ' ',
      lower: ' ',
      upper: ' ',
      shiftCaps: ' ',
    },
    lit: {
      caps: ' ',
      lower: ' ',
      upper: ' ',
      shiftCaps: ' ',
      alt: ' ',
      altShift: ' ',
    },
  },
  {
    className: 'rightAlt',
    eng: {
      caps: 'Alt',
      lower: 'Alt',
      upper: 'Alt',
      shiftCaps: 'Alt',
    },
    lit: {
      caps: 'Alt',
      lower: 'Alt',
      upper: 'Alt',
      shiftCaps: 'Alt',
      alt: 'Alt',
      altShift: 'Alt',
    },
  },
  {
    className: 'rightCtrl',
    eng: {
      caps: 'Ctrl',
      lower: 'Ctrl',
      upper: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
    lit: {
      caps: 'Ctrl',
      lower: 'Ctrl',
      upper: 'Ctrl',
      shiftCaps: 'Ctrl',
      alt: 'Ctrl',
      altShift: 'Ctrl',
    },
  },
  {
    className: 'arrowLeft',
    eng: {
      caps: '◄',
      lower: '◄',
      upper: '◄',
      shiftCaps: '◄',
    },
    lit: {
      caps: '◄',
      lower: '◄',
      upper: '◄',
      shiftCaps: '◄',
      alt: '◄',
      altShift: '◄',
    },
  },
  {
    className: 'arrowDown',
    eng: {
      caps: '▼',
      lower: '▼',
      upper: '▼',
      shiftCaps: '▼',
    },
    lit: {
      caps: '▼',
      lower: '▼',
      upper: '▼',
      shiftCaps: '▼',
      alt: '▼',
      altShift: '▼',
    },
  },
  {
    className: 'arrowRight',
    eng: {
      caps: '►',
      lower: '►',
      upper: '►',
      shiftCaps: '►',
    },
    lit: {
      caps: '►',
      lower: '►',
      upper: '►',
      shiftCaps: '►',
      alt: '►',
      altShift: '►',
    },
  },
  {
    className: 'rightCtrl',
    eng: {
      caps: 'Ctrl',
      lower: 'Ctrl',
      upper: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
    lit: {
      caps: 'Ctrl',
      lower: 'Ctrl',
      upper: 'Ctrl',
      shiftCaps: 'Ctrl',
      alt: 'Ctrl',
      altShift: 'Ctrl',
    },
  },
];

function createButtons() {
  const keyboard = document.querySelector('.keyboard');
  for (let i = 0; i < buttons.length; i += 1) {
    const btn = document.createElement('div');
    btn.className = `${buttons[i].className} btn`;
    const eng = document.createElement('span');
    eng.className = 'eng';
    const lit = document.createElement('span');
    lit.className = 'lit hidden';
    const engCaps = document.createElement('span');
    engCaps.className = 'caps hidden';
    engCaps.textContent = `${buttons[i].eng.caps}`;
    const engLower = document.createElement('span');
    engLower.className = 'lower';
    engLower.textContent = `${buttons[i].eng.lower}`;
    const engUpper = document.createElement('span');
    engUpper.className = 'upper hidden';
    engUpper.textContent = `${buttons[i].eng.upper}`;
    const engShiftCaps = document.createElement('span');
    engShiftCaps.className = 'shiftCaps hidden';
    engShiftCaps.textContent = `${buttons[i].eng.shiftCaps}`;
    const litCaps = document.createElement('span');
    litCaps.className = 'caps hidden';
    litCaps.textContent = `${buttons[i].lit.caps}`;
    const litLower = document.createElement('span');
    litLower.className = 'lower hidden';
    litLower.textContent = `${buttons[i].lit.lower}`;
    const litUpper = document.createElement('span');
    litUpper.className = 'upper hidden';
    litUpper.textContent = `${buttons[i].lit.upper}`;
    const litShiftCaps = document.createElement('span');
    litShiftCaps.className = 'shiftCaps hidden';
    litShiftCaps.textContent = `${buttons[i].lit.shiftCaps}`;
    const litAlt = document.createElement('span');
    litAlt.className = 'alt hidden';
    litAlt.textContent = `${buttons[i].lit.alt}`;
    const litAltShift = document.createElement('span');
    litAltShift.className = 'altShift hidden';
    litAltShift.textContent = `${buttons[i].lit.altShift}`;
    eng.append(engCaps, engLower, engUpper, engShiftCaps);
    lit.append(litCaps, litLower, litUpper, litShiftCaps, litAlt, litAltShift);
    btn.append(eng, lit);
    keyboard.append(btn);
  }
}

createButtons();
