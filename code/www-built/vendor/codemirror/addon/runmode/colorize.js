// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./runmode")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./runmode"],e):e(CodeMirror)}(function(e){"use strict";function o(e,n){if(3==e.nodeType)return n.push(e.nodeValue);for(var t=e.firstChild;t;t=t.nextSibling)o(t,n),r.test(e.nodeType)&&n.push("\n")}var r=/^(p|li|div|h\\d|pre|blockquote|td)$/;e.colorize=function(r,n){r||(r=document.body.getElementsByTagName("pre"));for(var t=0;t<r.length;++t){var i=r[t],d=i.getAttribute("data-lang")||n;if(d){var u=[];o(i,u),i.innerHTML="",e.runMode(u.join(""),d,i),i.className+=" cm-s-default"}}}});
//# sourceMappingURL=colorize.js.map