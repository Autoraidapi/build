// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(o){"object"==typeof exports&&"object"==typeof module?o(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],o):o(CodeMirror)}(function(o){"use strict";o.registerHelper("lint","yaml",function(e){var r=[];if(!window.jsyaml)return window.console&&window.console.error("Error: window.jsyaml not defined, CodeMirror YAML linting cannot run."),r;try{jsyaml.loadAll(e)}catch(e){var n=e.mark,i=n?o.Pos(n.line,n.column):o.Pos(0,0),t=i;r.push({from:i,to:t,message:e.message})}return r})});
//# sourceMappingURL=yaml-lint.js.map