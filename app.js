const KeyBoardGenerator = require('./src/KeyBoardGenerator');

window.onload = PageLoader;
window.onkeydown = keydown;
window.onkeyup = keyup;

let RuLang = false;
let Caps_Lock = false;
let Shift = false;
let Alt = false;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function PageLoader() {
  const textArea = document.createElement('textarea');
  textArea.setAttribute('readonly', 'readonly');
  document.body.appendChild(textArea);
  KeyBoardGenerator(RuLang, Caps_Lock);
}

function keydown(e) {
  const textArea = document.querySelector('textarea');
  console.log(e.keyCode);
  if (document.querySelector(`.D${e.keyCode}`)) {
    const pressedKey = document.querySelector(`.D${e.keyCode}`);
    console.log(pressedKey);
    pressedKey.style.background = getRandomColor();

    if (KeySpecSized[e.keyCode]) {
      switch (e.keyCode) {
        case 9: textArea.value += '     '; break;
        case 32: textArea.value += ' '; break;
        case 20:
          Caps_Lock = !Caps_Lock;
          document.querySelector('.KeyBoard').remove();
          KeyBoardGenerator(RuLang, Caps_Lock);
          pressedKey.style.background = getRandomColor();
          break;
        case 8:
          let delchar = '';
          for (let index = 0; index < textArea.value.length - 1; index++) {
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
            KeyBoardGenerator(RuLang, Caps_Lock);
          }
          break;
        case 17: textArea.value += ''; break;
        case 91: textArea.value += ''; break;
        case 18:
          Alt = true;
          if (Shift && Alt) {
            RuLang = !RuLang;
            document.querySelector('.KeyBoard').remove();
            KeyBoardGenerator(RuLang, Caps_Lock);
          }
          break;
      }
    } else if (Shift) {
      if (pressedKey.textContent.length > 1) {
        textArea.value += pressedKey.textContent[2];
      } else if (Caps_Lock) { textArea.value += pressedKey.textContent[0].toLocaleLowerCase(); } else { textArea.value += pressedKey.textContent[0].toLocaleUpperCase(); }
    } else {
      textArea.value += pressedKey.textContent[0];
    }
  }
}
function keyup(e) {
  console.log(e.keyCode);
  if (document.querySelector(`.D${e.keyCode}`)) {
    const pressedKey = document.querySelector(`.D${e.keyCode}`);
    console.log(pressedKey);
    pressedKey.style.background = 'buttonface';
    if (e.keyCode == 16) {
      Shift = false;
    } else if (e.keyCode == 18) {
      Alt = false;
    } else if (e.keyCode == 20) {
      (Caps_Lock)?pressedKey.style.background = getRandomColor():pressedKey.style.background = 'buttonface';
    }
  }
}

document.addEventListener('mousedown',function(e){
  const textArea = document.querySelector('textarea');
     if (e.target.className.includes('D')) {
       console.log(e.target);
       
       e.target.style.background=getRandomColor();
       let pressedButton = e.target.className.replace('D','');
       if (e.target.className.includes('SpecSized')){
         pressedButton = pressedButton.replace('SpecSized','');
       }
       console.log(pressedButton);
       if(pressedButton==9){textArea.value+="     ";}
       else if(pressedButton==32){textArea.value+=" "}
       else if(pressedButton==16){Shift=true;
        if (Shift && Alt) {
          RuLang = !RuLang;
          document.querySelector('.KeyBoard').remove();
          KeyBoardGenerator(RuLang, Caps_Lock);
          
        }}
       else if(pressedButton==13){textArea.value+="\n";}
       else if(pressedButton==17){textArea.value+="";}
       else if(pressedButton==18){Alt=true;
        if (Shift && Alt) {
          RuLang = !RuLang;
          document.querySelector('.KeyBoard').remove();
          KeyBoardGenerator(RuLang, Caps_Lock);
        }}
       else if(pressedButton==91){textArea.value+="";}
       else if(pressedButton==20){Caps_Lock=!Caps_Lock; document.querySelector('.KeyBoard').remove();
       KeyBoardGenerator(RuLang, Caps_Lock); e.target.style.background=getRandomColor();}
       else if(pressedButton==8){          let delchar = '';
       for (let index = 0; index < textArea.value.length - 1; index++) {
         delchar += textArea.value[index];
       }
       textArea.value = delchar;}
       else if (Shift) {
        if (e.target.textContent.length > 1) {
          textArea.value += e.target.textContent[2];
        } else if (Caps_Lock) { textArea.value += e.target.textContent[0].toLocaleLowerCase(); } else { textArea.value += e.target.textContent[0].toLocaleUpperCase(); }
      } else {
        textArea.value += e.target.textContent[0];
      }
     }
})

document.addEventListener('mouseup',function(e){
  if (e.target.className.includes('D')) {
    console.log(e.target);
    e.target.style.background="buttonface";
    let pressedButton = e.target.className.replace('D','');
    if (e.target.className.includes('SpecSized')){
      pressedButton = pressedButton.replace('SpecSized','');
    }
    if(pressedButton==16){Shift=false;}
    else if(pressedButton==18){Alt=false;}
    else if(pressedButton==20){(Caps_Lock)? e.target.style.background=getRandomColor(): e.target.style.background="buttonface";}
  }
})

var KeySpecSized = {
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
