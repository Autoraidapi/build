// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function n(n,t){var i=n.getLine(t),o=i.search(/\S/);return-1==o||/\bcomment\b/.test(n.getTokenTypeAt(e.Pos(t,o+1)))?-1:e.countColumn(i,null,n.getOption("tabSize"))}e.registerHelper("fold","indent",function(t,i){var o=n(t,i.line);if(!(o<0)){for(var r=null,l=i.line+1,f=t.lastLine();l<=f;++l){var u=n(t,l);if(-1==u);else{if(!(u>o))break;r=l}}return r?{from:e.Pos(i.line,t.getLine(i.line).length),to:e.Pos(r,t.getLine(r).length)}:void 0}})});
//# sourceMappingURL=indent-fold.js.map