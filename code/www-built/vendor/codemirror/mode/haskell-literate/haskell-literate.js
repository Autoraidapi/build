// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../haskell/haskell")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../haskell/haskell"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("haskell-literate",function(t,n){var o=e.getMode(t,n&&n.base||"haskell");return{startState:function(){return{inCode:!1,baseState:e.startState(o)}},token:function(e,t){return e.sol()&&(t.inCode=e.eat(">"))?"meta":t.inCode?o.token(e,t.baseState):(e.skipToEnd(),"comment")},innerMode:function(e){return e.inCode?{state:e.baseState,mode:o}:null}}},"haskell"),e.defineMIME("text/x-literate-haskell","haskell-literate")});
//# sourceMappingURL=haskell-literate.js.map