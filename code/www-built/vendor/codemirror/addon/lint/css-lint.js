// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.registerHelper("lint","css",function(o,r){var n=[];if(!window.CSSLint)return window.console&&window.console.error("Error: window.CSSLint not defined, CodeMirror CSS linting cannot run."),n;for(var i=CSSLint.verify(o,r),t=i.messages,s=null,c=0;c<t.length;c++){s=t[c];var d=s.line-1,f=s.line-1,l=s.col-1,u=s.col;n.push({from:e.Pos(d,l),to:e.Pos(f,u),message:s.message,severity:s.type})}return n})});
//# sourceMappingURL=css-lint.js.map