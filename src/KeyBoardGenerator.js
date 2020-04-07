const RuKeyboard = require('./Lang/RuKeyBoard');
const EnKeyboard = require('./Lang/EnKeyBoard');

function KeyBoardLoader(RuLang, Caps_Lock) {
    if (document.querySelector('h1')) {
        document.querySelector('h1').remove();
    }
    if (document.querySelector('h2')) {
        document.querySelector('h2').remove();
    }
    const LangInfo = document.createElement('h1');
    const F5 = document.createElement('h2');
    if (RuLang) {
        RuKeyboard(Caps_Lock, keyBoardMap);
        LangInfo.textContent = "Смена языка SHIFT+ALT!";
        F5.textContent = "F5 для перезагрузки страницы";
    } else {
        EnKeyboard(Caps_Lock, keyBoardMap);
        LangInfo.textContent = "Press SHIFT+ALT to change language!";
        F5.textContent = "Press F5 to reload this page";
    }
    document.body.appendChild(LangInfo);
    document.body.appendChild(F5);
}

module.exports = KeyBoardLoader;

let keyBoardMap = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187,
    8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65,
    83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66,
    78, 77, 188, 190, 191, 38, 17, 91, 18, 32, 37, 40, 39];