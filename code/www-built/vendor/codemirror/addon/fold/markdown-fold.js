// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.registerHelper("fold","markdown",function(n,t){function r(t){var r=n.getTokenTypeAt(e.Pos(t,0));return r&&/\bheader\b/.test(r)}function i(e,n,t){var i=n&&n.match(/^#+/);return i&&r(e)?i[0].length:(i=t&&t.match(/^[=\-]+\s*$/),i&&r(e+1)?"="==t[0]?1:2:o)}var o=100,f=n.getLine(t.line),l=n.getLine(t.line+1),c=i(t.line,f,l);if(c!==o){for(var u=n.lastLine(),d=t.line,a=n.getLine(d+2);d<u&&!(i(d+1,l,a)<=c);)++d,l=a,a=n.getLine(d+2);return{from:e.Pos(t.line,f.length),to:e.Pos(d,n.getLine(d).length)}}})});
//# sourceMappingURL=markdown-fold.js.map