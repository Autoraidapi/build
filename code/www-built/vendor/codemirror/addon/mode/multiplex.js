// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.multiplexingMode=function(n){function i(e,n,i,t){if("string"==typeof n){var r=e.indexOf(n,i);return t&&r>-1?r+n.length:r}var o=n.exec(i?e.slice(i):e);return o?o.index+i+(t?o[0].length:0):-1}var t=Array.prototype.slice.call(arguments,1);return{startState:function(){return{outer:e.startState(n),innerActive:null,inner:null}},copyState:function(i){return{outer:e.copyState(n,i.outer),innerActive:i.innerActive,inner:i.innerActive&&e.copyState(i.innerActive.mode,i.inner)}},token:function(r,o){if(o.innerActive){var c=o.innerActive,l=r.string;if(!c.close&&r.sol())return o.innerActive=o.inner=null,this.token(r,o);var s=c.close?i(l,c.close,r.pos,c.parseDelimiters):-1;if(s==r.pos&&!c.parseDelimiters)return r.match(c.close),o.innerActive=o.inner=null,c.delimStyle&&c.delimStyle+" "+c.delimStyle+"-close";s>-1&&(r.string=l.slice(0,s));var a=c.mode.token(r,o.inner);return s>-1&&(r.string=l),s==r.pos&&c.parseDelimiters&&(o.innerActive=o.inner=null),c.innerStyle&&(a=a?a+" "+c.innerStyle:c.innerStyle),a}for(var u=1/0,l=r.string,v=0;v<t.length;++v){var d=t[v],s=i(l,d.open,r.pos);if(s==r.pos){d.parseDelimiters||r.match(d.open),o.innerActive=d;var f=0;if(n.indent){var m=n.indent(o.outer,"","");m!==e.Pass&&(f=m)}return o.inner=e.startState(d.mode,f),d.delimStyle&&d.delimStyle+" "+d.delimStyle+"-open"}-1!=s&&s<u&&(u=s)}u!=1/0&&(r.string=l.slice(0,u));var p=n.token(r,o.outer);return u!=1/0&&(r.string=l),p},indent:function(i,t,r){var o=i.innerActive?i.innerActive.mode:n;return o.indent?o.indent(i.innerActive?i.inner:i.outer,t,r):e.Pass},blankLine:function(i){var r=i.innerActive?i.innerActive.mode:n;if(r.blankLine&&r.blankLine(i.innerActive?i.inner:i.outer),i.innerActive)"\n"===i.innerActive.close&&(i.innerActive=i.inner=null);else for(var o=0;o<t.length;++o){var c=t[o];"\n"===c.open&&(i.innerActive=c,i.inner=e.startState(c.mode,r.indent?r.indent(i.outer,"",""):0))}},electricChars:n.electricChars,innerMode:function(e){return e.inner?{state:e.inner,mode:e.innerActive.mode}:{state:e.outer,mode:n}}}}});
//# sourceMappingURL=multiplex.js.map