// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(o){"object"==typeof exports&&"object"==typeof module?o(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],o):o(CodeMirror)}(function(o){"use strict";o.registerHelper("lint","json",function(n){var r=[];if(!window.jsonlint)return window.console&&window.console.error("Error: window.jsonlint not defined, CodeMirror JSON linting cannot run."),r;var e=window.jsonlint.parser||window.jsonlint;e.parseError=function(n,e){var i=e.loc;r.push({from:o.Pos(i.first_line-1,i.first_column),to:o.Pos(i.last_line-1,i.last_column),message:n})};try{e.parse(n)}catch(o){}return r})});
//# sourceMappingURL=json-lint.js.map