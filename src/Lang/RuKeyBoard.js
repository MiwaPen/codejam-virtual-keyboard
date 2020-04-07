const RuKeyMapLow = {
  81: 'й',
  87: 'ц',
  69: 'у',
  82: 'к',
  84: 'е',
  89: 'н',
  85: 'г',
  73: 'ш',
  79: 'щ',
  80: 'з',
  65: 'ф',
  83: 'ы',
  68: 'в',
  70: 'а',
  71: 'п',
  72: 'р',
  74: 'о',
  75: 'л',
  76: 'д',
  90: 'я',
  88: 'ч',
  67: 'с',
  86: 'м',
  66: 'и',
  78: 'т',
  77: 'ь',
  188: 'б',
  190: 'ю',
  192: 'ё',
  219: 'х',
  221: 'ъ',
  186: 'ж',
  222: 'э',
};
const RuNumMap = {
  49: '1 !',
  50: '2 \"',
  51: '3 №',
  52: '4 ;',
  53: '5 %',
  54: '6 :',
  55: '7 ?',
  56: '8 *',
  57: '9 (',
  48: '0 )',

};
const RuKeyMapUp = {
  81: 'Й',
  87: 'Ц',
  69: 'У',
  82: 'К',
  84: 'Е',
  89: 'Н',
  85: 'Г',
  73: 'Ш',
  79: 'Щ',
  80: 'З',
  65: 'Ф',
  83: 'Ы',
  68: 'В',
  70: 'А',
  71: 'П',
  72: 'Р',
  74: 'О',
  75: 'Л',
  76: 'Д',
  90: 'Я',
  88: 'Ч',
  67: 'С',
  86: 'М',
  66: 'И',
  78: 'Т',
  77: 'Ь',
  188: 'Б',
  190: 'Ю',
  192: 'Ё',
  219: 'Ч',
  221: 'Ъ',
  186: 'Ж',
  222: 'Э',
};

const RuSpecMap = {
  191: '. ,',
  189: '- _',
  187: '= +',
  8: 'BACKSPACE',
  9: 'TAB',
  220: '\\ /',
  20: 'CAPS LOCK',
  16: 'SHIFT',
  13: 'ENTER',
  17: 'CTRL',
  18: 'ALT',
  32: 'SPACE',
  38: '↑',
  37: '←',
  39: '→',
  40: '↓',
  91: 'WIN',
};

const KeySpecSized = {
  8: 'BACKSPACE',
  9: 'TAB',
  20: 'CAPS LOCK',
  16: 'SHIFT',
  13: 'ENTER',
  17: 'CTRL',
  18: 'ALT',
  32: 'SPACE',
  91: 'WIN',
};

function RuKeyBoard(CapsLock, keyBoardMap) {
  const keyBoard = document.createElement('div');
  keyBoard.className += 'KeyBoard';
  for (let index = 0; index < keyBoardMap.length; index += 1) {
    const key = document.createElement('button');
    let keyText;

    if (RuSpecMap[keyBoardMap[index]]) {
      keyText = document.createTextNode(RuSpecMap[keyBoardMap[index]]);
      key.className += ` D${keyBoardMap[index]}`;
      if (KeySpecSized[keyBoardMap[index]]) {
        key.className += ' SpecSized';
      } key.appendChild(keyText);
    } else if (RuNumMap[keyBoardMap[index]]) {
      keyText = document.createTextNode(RuNumMap[keyBoardMap[index]]);
      key.className += ` D${keyBoardMap[index]}`;
      key.appendChild(keyText);
    } else if (CapsLock) {
      keyText = document.createTextNode(RuKeyMapUp[keyBoardMap[index]]);
      key.className += ` D${keyBoardMap[index]}`;
      key.appendChild(keyText);
    } else {
      keyText = document.createTextNode(RuKeyMapLow[keyBoardMap[index]]);
      key.className += ` D${keyBoardMap[index]}`;
      key.appendChild(keyText);
    }

    keyBoard.appendChild(key);

    if (keyBoardMap[index] === 8 || keyBoardMap[index] === 220 || keyBoardMap[index] === 13 || keyBoardMap[index] === 38) {
      const clearFix = document.createElement('div');
      clearFix.className += 'clearFix';
      keyBoard.appendChild(clearFix);
    }
  }

  document.body.appendChild(keyBoard);
}

module.exports = RuKeyBoard;
