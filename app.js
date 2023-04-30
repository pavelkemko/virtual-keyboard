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
    className: 'Backquote',
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
    className: 'Digit1',
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
    className: 'Digit2',
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
    className: 'Digit3',
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
    className: 'Digit4',
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
    className: 'Digit5',
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
    className: 'Digit6',
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
    className: 'Digit7',
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
    className: 'Digit8',
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
    className: 'Digit9',
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
    className: 'Digit0',
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
    className: 'Minus',
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
    className: 'Equal',
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
    className: 'Backspace',
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
    className: 'Tab',
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
    className: 'KeyQ',
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
    className: 'KeyW',
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
    className: 'KeyE',
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
    className: 'KeyR',
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
    className: 'KeyT',
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
    className: 'KeyY',
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
    className: 'KeyU',
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
    className: 'KeyI',
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
    className: 'KeyO',
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
    className: 'KeyP',
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
    className: 'BracketLeft',
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
    className: 'BracketRight',
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
    className: 'Backslash',
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
    className: 'Delete',
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
    className: 'CapsLock',
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
    className: 'KeyA',
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
    className: 'KeyS',
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
    className: 'KeyD',
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
    className: 'KeyF',
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
    className: 'KeyG',
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
    className: 'KeyH',
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
    className: 'KeyJ',
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
    className: 'KeyK',
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
    className: 'KeyL',
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
    className: 'Semicolon',
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
    className: 'Quote',
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
    className: 'Enter',
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
    className: 'ShiftLeft',
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
    className: 'KeyZ',
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
    className: 'KeyX',
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
    className: 'KeyC',
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
    className: 'KeyV',
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
    className: 'KeyB',
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
    className: 'KeyN',
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
    className: 'KeyM',
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
    className: 'Comma',
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
    className: 'Period',
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
    className: 'Slash',
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
    className: 'ArrowUp',
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
    className: 'ShiftRight',
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
    className: 'ControlLeft',
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
    className: 'MetaLeft',
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
    className: 'AltLeft',
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
    className: 'Space',
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
    className: 'AltRight',
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
    className: 'ArrowLeft',
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
    className: 'ArrowDown',
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
    className: 'ArrowRight',
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
    className: 'ControlRight',
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
  buttons.forEach((e) => {
    const btn = document.createElement('div');
    btn.className = `${e.className} key`;
    const eng = document.createElement('span');
    eng.className = 'eng';
    const lit = document.createElement('span');
    lit.className = 'lit hidden';
    const engCaps = document.createElement('span');
    engCaps.className = 'caps hidden';
    engCaps.textContent = `${e.eng.caps}`;
    const engLower = document.createElement('span');
    engLower.className = 'lower';
    engLower.textContent = `${e.eng.lower}`;
    const engUpper = document.createElement('span');
    engUpper.className = 'upper hidden';
    engUpper.textContent = `${e.eng.upper}`;
    const engShiftCaps = document.createElement('span');
    engShiftCaps.className = 'shiftCaps hidden';
    engShiftCaps.textContent = `${e.eng.shiftCaps}`;
    const litCaps = document.createElement('span');
    litCaps.className = 'caps hidden';
    litCaps.textContent = `${e.lit.caps}`;
    const litLower = document.createElement('span');
    litLower.className = 'lower hidden';
    litLower.textContent = `${e.lit.lower}`;
    const litUpper = document.createElement('span');
    litUpper.className = 'upper hidden';
    litUpper.textContent = `${e.lit.upper}`;
    const litShiftCaps = document.createElement('span');
    litShiftCaps.className = 'shiftCaps hidden';
    litShiftCaps.textContent = `${e.lit.shiftCaps}`;
    const litAlt = document.createElement('span');
    litAlt.className = 'alt hidden';
    litAlt.textContent = `${e.lit.alt}`;
    const litAltShift = document.createElement('span');
    litAltShift.className = 'altShift hidden';
    litAltShift.textContent = `${e.lit.altShift}`;
    eng.append(engCaps, engLower, engUpper, engShiftCaps);
    lit.append(litCaps, litLower, litUpper, litShiftCaps, litAlt, litAltShift);
    btn.append(eng, lit);
    keyboard.append(btn);
  });
}

createButtons();
