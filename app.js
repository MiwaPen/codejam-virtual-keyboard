const KeyBoardGenerator = require('./src/KeyBoardGenerator');

let startRu = sessionStorage.getItem('startRu');
startRu = JSON.parse(startRu);
let startCa = sessionStorage.getItem('startCa');
startCa = JSON.parse(startCa);

let RuLang = startRu;
let CapsLock = startCa;
let Shift = false;
let Alt = false;

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

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function PageLoader() {
  const textArea = document.createElement('textarea');
  textArea.setAttribute('readonly', 'readonly');
  document.body.appendChild(textArea);
  KeyBoardGenerator(startRu, startCa);
}

function keydown(e) {
  const starupRu = RuLang;
  sessionStorage.setItem('startRu', JSON.stringify(starupRu));
  const starupCa = CapsLock;
  sessionStorage.setItem('startCa', JSON.stringify(starupCa));

  const textArea = document.querySelector('textarea');

  if (document.querySelector(`.D${e.keyCode}`)) {
    const pressedKey = document.querySelector(`.D${e.keyCode}`);
    pressedKey.style.background = getRandomColor();

    if (KeySpecSized[e.keyCode]) {
      switch (e.keyCode) {
        case 9: textArea.value += '     '; break;
        case 32: textArea.value += ' '; break;
        case 20:
          CapsLock = !CapsLock;
          document.querySelector('.KeyBoard').remove();
          KeyBoardGenerator(RuLang, CapsLock);
          pressedKey.style.background = getRandomColor();
          break;
        case 8:
          let delchar = '';
          for (let index = 0; index < textArea.value.length - 1; index += 1) {
            delchar += textArea.value[index];
          }
          textArea.value = delchar;
          break;
        case 13: textArea.value += '\n'; break;
        case 16:
          Shift = true;
          if (Shift && Alt) {
            RuLang = !RuLang;
            document.querySelector('.KeyBoard').remove();
            KeyBoardGenerator(RuLang, CapsLock);
          }
          break;
        case 17: textArea.value += ''; break;
        case 91: textArea.value += ''; break;
        case 18:
          Alt = true;
          if (Shift && Alt) {
            RuLang = !RuLang;
            document.querySelector('.KeyBoard').remove();
            KeyBoardGenerator(RuLang, CapsLock);
          }
          break;
        default:
          break;
      }
    } else if (Shift) {
      if (pressedKey.textContent.length > 1) {
        textArea.value += pressedKey.textContent[2];
      } else if (CapsLock) { textArea.value += pressedKey.textContent[0].toLocaleLowerCase(); } else { textArea.value += pressedKey.textContent[0].toLocaleUpperCase(); }
    } else {
      textArea.value += pressedKey.textContent[0];
    }
  }
}
function keyup(e) {
  if (document.querySelector(`.D${e.keyCode}`)) {
    const pressedKey = document.querySelector(`.D${e.keyCode}`);
    pressedKey.style.background = 'buttonface';

    if (e.keyCode === 16) {
      Shift = false;
    } else if (e.keyCode === 18) {
      Alt = false;
    } else if (e.keyCode === 20) {
      (CapsLock) ? pressedKey.style.background = getRandomColor() : pressedKey.style.background = 'buttonface';
    }
  }
}

document.addEventListener('mousedown', (e) => {
  const starupRu = RuLang;
  sessionStorage.setItem('startRu', JSON.stringify(starupRu));
  const starupCa = CapsLock;
  sessionStorage.setItem('startCa', JSON.stringify(starupCa));

  const textArea = document.querySelector('textarea');
  if (e.target.className.includes('D')) {
    e.target.style.background = getRandomColor();
    let pressedButton = e.target.className.replace('D', '');
    if (e.target.className.includes('SpecSized')) {
      pressedButton = pressedButton.replace('SpecSized', '');
    }
    pressedButton = Number(pressedButton);
    if (pressedButton === 9) { textArea.value += '     '; } else if (pressedButton === 32) { textArea.value += ' '; } else if (pressedButton === 16) {
      Shift = true;
      if (Shift && Alt) {
        RuLang = !RuLang;
        document.querySelector('.KeyBoard').remove();
        KeyBoardGenerator(RuLang, CapsLock);
      }
    } else if (pressedButton === 13) { textArea.value += '\n'; } else if (pressedButton === 17) { textArea.value += ''; } else if (pressedButton === 18) {
      Alt = true;
      if (Shift && Alt) {
        RuLang = !RuLang;
        document.querySelector('.KeyBoard').remove();
        KeyBoardGenerator(RuLang, CapsLock);
      }
    } else if (pressedButton === 91) { textArea.value += ''; } else if (pressedButton === 20) {
      CapsLock = !CapsLock; document.querySelector('.KeyBoard').remove();
      KeyBoardGenerator(RuLang, CapsLock); e.target.style.background = getRandomColor();
    } else if (pressedButton === 8) {
      let delchar = '';
      for (let index = 0; index < textArea.value.length - 1; index += 1) {
        delchar += textArea.value[index];
      }
      textArea.value = delchar;
    } else if (Shift) {
      if (e.target.textContent.length > 1) {
        textArea.value += e.target.textContent[2];
      } else if (CapsLock) { textArea.value += e.target.textContent[0].toLocaleLowerCase(); } else { textArea.value += e.target.textContent[0].toLocaleUpperCase(); }
    } else {
      textArea.value += e.target.textContent[0];
    }
  }
});

document.addEventListener('mouseup', (e) => {
  if (e.target.className.includes('D')) {
    e.target.style.background = 'buttonface';
    let pressedButton = e.target.className.replace('D', '');
    if (e.target.className.includes('SpecSized')) {
      pressedButton = pressedButton.replace('SpecSized', '');
    }
    pressedButton = Number(pressedButton);
    if (pressedButton === 16) { Shift = false; } else if (pressedButton === 18) { Alt = false; } else if (pressedButton === 20) {
      (CapsLock) ? e.target.style.background = getRandomColor() : e.target.style.background = 'buttonface';
    }
  }
});

window.onload = PageLoader;
window.onkeydown = keydown;
window.onkeyup = keyup;
