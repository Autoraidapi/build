// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript"],t):t(CodeMirror)}(function(t){"use strict";function e(t,e,n,r){this.state=t,this.mode=e,this.depth=n,this.prev=r}function n(r){return new e(t.copyState(r.mode,r.state),r.mode,r.depth,r.prev&&n(r.prev))}t.defineMode("jsx",function(r,i){function a(t){var e=t.tagName;t.tagName=null;var n=p.indent(t,"","");return t.tagName=e,n}function o(t,e){return e.context.mode==p?s(t,e,e.context):c(t,e,e.context)}function s(n,i,s){if(2==s.depth)return n.match(/^.*?\*\//)?s.depth=1:n.skipToEnd(),"comment";if("{"==n.peek()){p.skipAttribute(s.state);var c=a(s.state),u=s.state.context;if(u&&n.match(/^[^>]*>\s*$/,!1)){for(;u.prev&&!u.startOfLine;)u=u.prev;u.startOfLine?c-=r.indentUnit:s.prev.state.lexical&&(c=s.prev.state.lexical.indented)}else 1==s.depth&&(c+=r.indentUnit);return i.context=new e(t.startState(d,c),d,0,i.context),null}if(1==s.depth){if("<"==n.peek())return p.skipAttribute(s.state),i.context=new e(t.startState(p,a(s.state)),p,0,i.context),null;if(n.match("//"))return n.skipToEnd(),"comment";if(n.match("/*"))return s.depth=2,o(n,i)}var x,f=p.token(n,s.state),l=n.current();return/\btag\b/.test(f)?/>$/.test(l)?s.state.context?s.depth=0:i.context=i.context.prev:/^</.test(l)&&(s.depth=1):!f&&(x=l.indexOf("{"))>-1&&n.backUp(l.length-x),f}function c(n,r,i){if("<"==n.peek()&&d.expressionAllowed(n,i.state))return d.skipExpression(i.state),r.context=new e(t.startState(p,d.indent(i.state,"","")),p,0,r.context),null;var a=d.token(n,i.state);if(!a&&null!=i.depth){var o=n.current();"{"==o?i.depth++:"}"==o&&0==--i.depth&&(r.context=r.context.prev)}return a}var p=t.getMode(r,{name:"xml",allowMissing:!0,multilineTagIndentPastTag:!1,allowMissingTagName:!0}),d=t.getMode(r,i&&i.base||"javascript");return{startState:function(){return{context:new e(t.startState(d),d)}},copyState:function(t){return{context:n(t.context)}},token:o,indent:function(t,e,n){return t.context.mode.indent(t.context.state,e,n)},innerMode:function(t){return t.context}}},"xml","javascript"),t.defineMIME("text/jsx","jsx"),t.defineMIME("text/typescript-jsx",{name:"jsx",base:{name:"javascript",typescript:!0}})});
//# sourceMappingURL=jsx.js.map