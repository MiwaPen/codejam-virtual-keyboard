!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){const n=o(1);window.onload=function(){const e=document.createElement("textarea");e.setAttribute("readonly","readonly"),document.body.appendChild(e),n(c,a)},window.onkeydown=function(e){const t=document.querySelector("textarea");if(console.log(e.keyCode),document.querySelector(`.D${e.keyCode}`)){const o=document.querySelector(`.D${e.keyCode}`);if(console.log(o),o.style.background=l(),u[e.keyCode])switch(e.keyCode){case 9:t.value+="     ";break;case 32:t.value+=" ";break;case 20:a=!a,document.querySelector(".KeyBoard").remove(),n(c,a);break;case 8:let e="";for(let o=0;o<t.value.length-1;o++)e+=t.value[o];t.value=e;break;case 13:t.value+="\n";break;case 16:r=!0,r&&d&&(c=!c,document.querySelector(".KeyBoard").remove(),n(c,a));break;case 17:case 91:t.value+="";break;case 18:d=!0,r&&d&&(c=!c,document.querySelector(".KeyBoard").remove(),n(c,a))}else r?o.textContent.length>1?t.value+=o.textContent[2]:t.value+=a?o.textContent[0].toLocaleLowerCase():o.textContent[0].toLocaleUpperCase():t.value+=o.textContent[0]}},window.onkeyup=function(e){if(console.log(e.keyCode),document.querySelector(`.D${e.keyCode}`)){const t=document.querySelector(`.D${e.keyCode}`);console.log(t),t.style.background="buttonface",16==e.keyCode?r=!1:18==e.keyCode?d=!1:20==e.keyCode&&(a&&(t.style.background=l()),t.style.background="buttonface")}};let c=!1,a=!1,r=!1,d=!1;function l(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}var u={8:"BACKSPACE",9:"TAB",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",91:"WIN"}},function(e,t,o){const n=o(2),c=o(3);e.exports=function(e,t){document.querySelector("h1")&&document.querySelector("h1").remove();const o=document.createElement("h1");e?(n(t,a),o.textContent="Смена языка SHIFT+ALT!"):(c(t,a),o.textContent="Press SHIFT+ALT to change language!"),document.body.appendChild(o)};let a=[192,49,50,51,52,53,54,55,56,57,48,189,187,8,9,81,87,69,82,84,89,85,73,79,80,219,221,220,20,65,83,68,70,71,72,74,75,76,186,222,13,16,90,88,67,86,66,78,77,188,190,191,38,17,91,18,32,37,40,39]},function(e,t){e.exports=function(e,t){const d=document.createElement("div");d.className+="KeyBoard";for(let u=0;u<t.length;u++){const s=document.createElement("button");let i;if(a[t[u]]?(i=document.createTextNode(a[t[u]]),s.className+=` D${t[u]}`,r[t[u]]&&(s.className+=" SpecSized"),s.appendChild(i)):n[t[u]]?(i=document.createTextNode(n[t[u]]),s.className+=` D${t[u]}`,s.appendChild(i)):e?(i=document.createTextNode(c[t[u]]),s.className+=` D${t[u]}`,s.appendChild(i)):(i=document.createTextNode(o[t[u]]),s.className+=` D${t[u]}`,s.appendChild(i)),d.appendChild(s),8==t[u]||220==t[u]||13==t[u]||38==t[u]){var l=document.createElement("div");l.className+="clearFix",d.appendChild(l)}}document.body.appendChild(d)};const o={81:"й",87:"ц",69:"у",82:"к",84:"е",89:"н",85:"г",73:"ш",79:"щ",80:"з",65:"ф",83:"ы",68:"в",70:"а",71:"п",72:"р",74:"о",75:"л",76:"д",90:"я",88:"ч",67:"с",86:"м",66:"и",78:"т",77:"ь",188:"б",190:"ю",192:"ё",219:"х",221:"ъ",186:"ж",222:"э"},n={49:"1 !",50:'2 "',51:"3 №",52:"4 ;",53:"5 %",54:"6 :",55:"7 ?",56:"8 *",57:"9 (",48:"0 )"},c={81:"Й",87:"Ц",69:"У",82:"К",84:"Е",89:"Н",85:"Г",73:"Ш",79:"Щ",80:"З",65:"Ф",83:"Ы",68:"В",70:"А",71:"П",72:"Р",74:"О",75:"Л",76:"Д",90:"Я",88:"Ч",67:"С",86:"М",66:"И",78:"Т",77:"Ь",188:"Б",190:"Ю",192:"Ё",219:"Ч",221:"Ъ",186:"Ж",222:"Э"},a={191:". ,",189:"- _",187:"= +",8:"BACKSPACE",9:"TAB",220:"\\ /",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",38:"↑",37:"←",39:"→",40:"↓",91:"WIN"},r={8:"BACKSPACE",9:"TAB",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",91:"WIN"}},function(e,t){e.exports=function(e,t){const d=document.createElement("div");d.className+="KeyBoard";for(let u=0;u<t.length;u++){const s=document.createElement("button");let i;if(a[t[u]]?(i=document.createTextNode(a[t[u]]),s.className+=` D${t[u]}`,r[t[u]]&&(s.className+=" SpecSized"),s.appendChild(i)):n[t[u]]?(i=document.createTextNode(n[t[u]]),s.className+=` D${t[u]}`,s.appendChild(i)):e?(i=document.createTextNode(c[t[u]]),s.className+=` D${t[u]}`,s.appendChild(i)):(i=document.createTextNode(o[t[u]]),s.className+=` D${t[u]}`,s.appendChild(i)),d.appendChild(s),8==t[u]||220==t[u]||13==t[u]||38==t[u]){var l=document.createElement("div");l.className+="clearFix",d.appendChild(l)}}document.body.appendChild(d)};const o={81:"q",87:"w",69:"e",82:"r",84:"t",89:"y",85:"u",73:"i",79:"o",80:"p",65:"a",83:"s",68:"d",70:"f",71:"g",72:"h",74:"j",75:"k",76:"l",90:"z",88:"x",67:"c",86:"v",66:"b",78:"n",77:"m"},n={49:"1 !",50:"2 @",51:"3 #",52:"4 $",53:"5 %",54:"6 ^",55:"7 &",56:"8 *",57:"9 (",48:"0 )"},c={81:"Q",87:"W",69:"E",82:"R",84:"T",89:"Y",85:"U",73:"I",79:"O",80:"P",65:"A",83:"S",68:"D",70:"F",71:"G",72:"H",74:"J",75:"K",76:"L",90:"Z",88:"X",67:"C",86:"V",66:"B",78:"N",77:"M"},a={188:", <",190:". >",191:"/ ?",192:"` ~",219:"[ {",221:"] }",186:"; :",222:"' \"",189:"- _",187:"= +",8:"BACKSPACE",9:"TAB",220:"\\ |",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",38:"↑",37:"←",39:"→",40:"↓",91:"WIN"},r={8:"BACKSPACE",9:"TAB",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",91:"WIN"}}]);