!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){const n=o(1);window.onload=function(){const e=document.createElement("textarea");e.setAttribute("readonly","readonly"),document.body.appendChild(e),n(a,r)},window.onkeydown=function(e){let t=c;sessionStorage.setItem("startRu",JSON.stringify(t));let o=l;sessionStorage.setItem("startCa",JSON.stringify(o));const a=document.querySelector("textarea");if(console.log(e.keyCode),document.querySelector(`.D${e.keyCode}`)){const t=document.querySelector(`.D${e.keyCode}`);if(console.log(t),t.style.background=u(),i[e.keyCode])switch(e.keyCode){case 9:a.value+="     ";break;case 32:a.value+=" ";break;case 20:l=!l,document.querySelector(".KeyBoard").remove(),n(c,l),t.style.background=u();break;case 8:let e="";for(let t=0;t<a.value.length-1;t++)e+=a.value[t];a.value=e;break;case 13:a.value+="\n";break;case 16:s=!0,s&&d&&(c=!c,document.querySelector(".KeyBoard").remove(),n(c,l));break;case 17:case 91:a.value+="";break;case 18:d=!0,s&&d&&(c=!c,document.querySelector(".KeyBoard").remove(),n(c,l))}else s?t.textContent.length>1?a.value+=t.textContent[2]:a.value+=l?t.textContent[0].toLocaleLowerCase():t.textContent[0].toLocaleUpperCase():a.value+=t.textContent[0]}},window.onkeyup=function(e){if(console.log(e.keyCode),document.querySelector(`.D${e.keyCode}`)){const t=document.querySelector(`.D${e.keyCode}`);console.log(t),t.style.background="buttonface",16==e.keyCode?s=!1:18==e.keyCode?d=!1:20==e.keyCode&&(t.style.background=l?u():"buttonface")}};let a=sessionStorage.getItem("startRu");a=JSON.parse(a);let r=sessionStorage.getItem("startCa");r=JSON.parse(r);let c=a,l=r,s=!1,d=!1;function u(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}document.addEventListener("mousedown",(function(e){let t=c;sessionStorage.setItem("startRu",JSON.stringify(t));let o=l;sessionStorage.setItem("startCa",JSON.stringify(o));const a=document.querySelector("textarea");if(e.target.className.includes("D")){console.log(e.target),e.target.style.background=u();let t=e.target.className.replace("D","");if(e.target.className.includes("SpecSized")&&(t=t.replace("SpecSized","")),console.log(t),9==t)a.value+="     ";else if(32==t)a.value+=" ";else if(16==t)s=!0,s&&d&&(c=!c,document.querySelector(".KeyBoard").remove(),n(c,l));else if(13==t)a.value+="\n";else if(17==t)a.value+="";else if(18==t)d=!0,s&&d&&(c=!c,document.querySelector(".KeyBoard").remove(),n(c,l));else if(91==t)a.value+="";else if(20==t)l=!l,document.querySelector(".KeyBoard").remove(),n(c,l),e.target.style.background=u();else if(8==t){let e="";for(let t=0;t<a.value.length-1;t++)e+=a.value[t];a.value=e}else s?e.target.textContent.length>1?a.value+=e.target.textContent[2]:a.value+=l?e.target.textContent[0].toLocaleLowerCase():e.target.textContent[0].toLocaleUpperCase():a.value+=e.target.textContent[0]}})),document.addEventListener("mouseup",(function(e){if(e.target.className.includes("D")){console.log(e.target),e.target.style.background="buttonface";let t=e.target.className.replace("D","");e.target.className.includes("SpecSized")&&(t=t.replace("SpecSized","")),16==t?s=!1:18==t?d=!1:20==t&&(e.target.style.background=l?u():"buttonface")}}));var i={8:"BACKSPACE",9:"TAB",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",91:"WIN"}},function(e,t,o){const n=o(2),a=o(3);e.exports=function(e,t){document.querySelector("h1")&&document.querySelector("h1").remove();const o=document.createElement("h1");e?(n(t,r),o.textContent="Смена языка SHIFT+ALT!"):(a(t,r),o.textContent="Press SHIFT+ALT to change language!"),document.body.appendChild(o)};let r=[192,49,50,51,52,53,54,55,56,57,48,189,187,8,9,81,87,69,82,84,89,85,73,79,80,219,221,220,20,65,83,68,70,71,72,74,75,76,186,222,13,16,90,88,67,86,66,78,77,188,190,191,38,17,91,18,32,37,40,39]},function(e,t){e.exports=function(e,t){const l=document.createElement("div");l.className+="KeyBoard";for(let d=0;d<t.length;d++){const u=document.createElement("button");let i;if(r[t[d]]?(i=document.createTextNode(r[t[d]]),u.className+=` D${t[d]}`,c[t[d]]&&(u.className+=" SpecSized"),u.appendChild(i)):n[t[d]]?(i=document.createTextNode(n[t[d]]),u.className+=` D${t[d]}`,u.appendChild(i)):e?(i=document.createTextNode(a[t[d]]),u.className+=` D${t[d]}`,u.appendChild(i)):(i=document.createTextNode(o[t[d]]),u.className+=` D${t[d]}`,u.appendChild(i)),l.appendChild(u),8==t[d]||220==t[d]||13==t[d]||38==t[d]){var s=document.createElement("div");s.className+="clearFix",l.appendChild(s)}}document.body.appendChild(l)};const o={81:"й",87:"ц",69:"у",82:"к",84:"е",89:"н",85:"г",73:"ш",79:"щ",80:"з",65:"ф",83:"ы",68:"в",70:"а",71:"п",72:"р",74:"о",75:"л",76:"д",90:"я",88:"ч",67:"с",86:"м",66:"и",78:"т",77:"ь",188:"б",190:"ю",192:"ё",219:"х",221:"ъ",186:"ж",222:"э"},n={49:"1 !",50:'2 "',51:"3 №",52:"4 ;",53:"5 %",54:"6 :",55:"7 ?",56:"8 *",57:"9 (",48:"0 )"},a={81:"Й",87:"Ц",69:"У",82:"К",84:"Е",89:"Н",85:"Г",73:"Ш",79:"Щ",80:"З",65:"Ф",83:"Ы",68:"В",70:"А",71:"П",72:"Р",74:"О",75:"Л",76:"Д",90:"Я",88:"Ч",67:"С",86:"М",66:"И",78:"Т",77:"Ь",188:"Б",190:"Ю",192:"Ё",219:"Ч",221:"Ъ",186:"Ж",222:"Э"},r={191:". ,",189:"- _",187:"= +",8:"BACKSPACE",9:"TAB",220:"\\ /",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",38:"↑",37:"←",39:"→",40:"↓",91:"WIN"},c={8:"BACKSPACE",9:"TAB",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",91:"WIN"}},function(e,t){e.exports=function(e,t){const l=document.createElement("div");l.className+="KeyBoard";for(let d=0;d<t.length;d++){const u=document.createElement("button");let i;if(r[t[d]]?(i=document.createTextNode(r[t[d]]),u.className+=` D${t[d]}`,c[t[d]]&&(u.className+=" SpecSized"),u.appendChild(i)):n[t[d]]?(i=document.createTextNode(n[t[d]]),u.className+=` D${t[d]}`,u.appendChild(i)):e?(i=document.createTextNode(a[t[d]]),u.className+=` D${t[d]}`,u.appendChild(i)):(i=document.createTextNode(o[t[d]]),u.className+=` D${t[d]}`,u.appendChild(i)),l.appendChild(u),8==t[d]||220==t[d]||13==t[d]||38==t[d]){var s=document.createElement("div");s.className+="clearFix",l.appendChild(s)}}document.body.appendChild(l)};const o={81:"q",87:"w",69:"e",82:"r",84:"t",89:"y",85:"u",73:"i",79:"o",80:"p",65:"a",83:"s",68:"d",70:"f",71:"g",72:"h",74:"j",75:"k",76:"l",90:"z",88:"x",67:"c",86:"v",66:"b",78:"n",77:"m"},n={49:"1 !",50:"2 @",51:"3 #",52:"4 $",53:"5 %",54:"6 ^",55:"7 &",56:"8 *",57:"9 (",48:"0 )"},a={81:"Q",87:"W",69:"E",82:"R",84:"T",89:"Y",85:"U",73:"I",79:"O",80:"P",65:"A",83:"S",68:"D",70:"F",71:"G",72:"H",74:"J",75:"K",76:"L",90:"Z",88:"X",67:"C",86:"V",66:"B",78:"N",77:"M"},r={188:", <",190:". >",191:"/ ?",192:"` ~",219:"[ {",221:"] }",186:"; :",222:"' \"",189:"- _",187:"= +",8:"BACKSPACE",9:"TAB",220:"\\ |",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",38:"↑",37:"←",39:"→",40:"↓",91:"WIN"},c={8:"BACKSPACE",9:"TAB",20:"CAPS LOCK",16:"SHIFT",13:"ENTER",17:"CTRL",18:"ALT",32:"SPACE",91:"WIN"}}]);