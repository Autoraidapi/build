// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.registerHelper("lint","coffeescript",function(o){var r=[];if(!window.coffeelint)return window.console&&window.console.error("Error: window.coffeelint not defined, CodeMirror CoffeeScript linting cannot run."),r;try{for(var i=coffeelint.lint(o),n=0;n<i.length;n++)!function(o){var i=o.lineNumber;r.push({from:e.Pos(i-1,0),to:e.Pos(i,0),severity:o.level,message:o.message})}(i[n])}catch(o){r.push({from:e.Pos(o.location.first_line,0),to:e.Pos(o.location.last_line,o.location.last_column),severity:"error",message:o.message})}return r})});
//# sourceMappingURL=coffeescript-lint.js.map