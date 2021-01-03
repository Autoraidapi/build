// CodeMirror, copyright (c) by Marijn Haverbeke and others

// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(){"use strict";function t(t,e,n){e||(e={});for(var r in t)!t.hasOwnProperty(r)||!1===n&&e.hasOwnProperty(r)||(e[r]=t[r]);return e}function e(t,e,n,r,i){null==e&&-1==(e=t.search(/[^\s\u00a0]/))&&(e=t.length);for(var o=r||0,s=i||0;;){var a=t.indexOf("\t",o);if(a<0||a>=e)return s+(e-o);s+=a-o,s+=n-s%n,o=a+1}}function n(){}function r(e,r){var i;return Object.create?i=Object.create(e):(n.prototype=e,i=new n),r&&t(r,i),i}function i(t,e){arguments.length>2&&(e.dependencies=Array.prototype.slice.call(arguments,2)),c[t]=e}function o(t,e){d[t]=e}function s(t){if("string"==typeof t&&d.hasOwnProperty(t))t=d[t];else if(t&&"string"==typeof t.name&&d.hasOwnProperty(t.name)){var e=d[t.name];"string"==typeof e&&(e={name:e}),t=r(e,t),t.name=e.name}else{if("string"==typeof t&&/^[\w\-]+\/[\w\-]+\+xml$/.test(t))return s("application/xml");if("string"==typeof t&&/^[\w\-]+\/[\w\-]+\+json$/.test(t))return s("application/json")}return"string"==typeof t?{name:t}:t||{name:"null"}}function a(t,e){e=s(e);var n=c[e.name];if(!n)return a(t,"text/plain");var r=n(t,e);if(m.hasOwnProperty(e.name)){var i=m[e.name];for(var o in i)i.hasOwnProperty(o)&&(r.hasOwnProperty(o)&&(r["_"+o]=r[o]),r[o]=i[o])}if(r.name=e.name,e.helperType&&(r.helperType=e.helperType),e.modeProps)for(var p in e.modeProps)r[p]=e.modeProps[p];return r}function p(e,n){t(n,m.hasOwnProperty(e)?m[e]:m[e]={})}function u(t,e){if(!0===e)return e;if(t.copyState)return t.copyState(e);var n={};for(var r in e){var i=e[r];i instanceof Array&&(i=i.concat([])),n[r]=i}return n}function l(t,e){for(var n;t.innerMode&&(n=t.innerMode(e))&&n.mode!=t;)e=n.state,t=n.mode;return n||{mode:t,state:e}}function h(t,e,n){return!t.startState||t.startState(e,n)}var f=function(t,e,n){this.pos=this.start=0,this.string=t,this.tabSize=e||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=n};f.prototype.eol=function(){return this.pos>=this.string.length},f.prototype.sol=function(){return this.pos==this.lineStart},f.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},f.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},f.prototype.eat=function(t){var e=this.string.charAt(this.pos);if("string"==typeof t?e==t:e&&(t.test?t.test(e):t(e)))return++this.pos,e},f.prototype.eatWhile=function(t){for(var e=this.pos;this.eat(t););return this.pos>e},f.prototype.eatSpace=function(){for(var t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>t},f.prototype.skipToEnd=function(){this.pos=this.string.length},f.prototype.skipTo=function(t){var e=this.string.indexOf(t,this.pos);if(e>-1)return this.pos=e,!0},f.prototype.backUp=function(t){this.pos-=t},f.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=e(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?e(this.string,this.lineStart,this.tabSize):0)},f.prototype.indentation=function(){return e(this.string,null,this.tabSize)-(this.lineStart?e(this.string,this.lineStart,this.tabSize):0)},f.prototype.match=function(t,e,n){if("string"!=typeof t){var r=this.string.slice(this.pos).match(t);return r&&r.index>0?null:(r&&!1!==e&&(this.pos+=r[0].length),r)}var i=function(t){return n?t.toLowerCase():t};if(i(this.string.substr(this.pos,t.length))==i(t))return!1!==e&&(this.pos+=t.length),!0},f.prototype.current=function(){return this.string.slice(this.start,this.pos)},f.prototype.hideFirstChars=function(t,e){this.lineStart+=t;try{return e()}finally{this.lineStart-=t}},f.prototype.lookAhead=function(t){var e=this.lineOracle;return e&&e.lookAhead(t)},f.prototype.baseToken=function(){var t=this.lineOracle;return t&&t.baseToken(this.pos)};var c={},d={},m={},y={__proto__:null,modes:c,mimeModes:d,defineMode:i,defineMIME:o,resolveMode:s,getMode:a,modeExtensions:m,extendMode:p,copyState:u,innerMode:l,startState:h};("undefined"!=typeof globalThis?globalThis:window).CodeMirror={},CodeMirror.StringStream=f;for(var g in y)CodeMirror[g]=y[g];CodeMirror.defineMode("null",function(){return{token:function(t){return t.skipToEnd()}}}),CodeMirror.defineMIME("text/plain","null"),CodeMirror.registerHelper=CodeMirror.registerGlobalHelper=Math.min,CodeMirror.splitLines=function(t){return t.split(/\r?\n|\r/)},CodeMirror.defaults={indentUnit:2},function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){t.runMode=function(e,n,r,i){var o=t.getMode(t.defaults,n),s=i&&i.tabSize||t.defaults.tabSize;if(r.appendChild){var a=/MSIE \d/.test(navigator.userAgent),p=a&&(null==document.documentMode||document.documentMode<9),u=r,l=0;u.innerHTML="",r=function(t,e){if("\n"==t)return u.appendChild(document.createTextNode(p?"\r":t)),void(l=0);for(var n="",r=0;;){var i=t.indexOf("\t",r);if(-1==i){n+=t.slice(r),l+=t.length-r;break}l+=i-r,n+=t.slice(r,i);var o=s-l%s;l+=o;for(var a=0;a<o;++a)n+=" ";r=i+1}if(e){var h=u.appendChild(document.createElement("span"));h.className="cm-"+e.replace(/ +/g," cm-"),h.appendChild(document.createTextNode(n))}else u.appendChild(document.createTextNode(n))}}for(var h=t.splitLines(e),f=i&&i.state||t.startState(o),c=0,d=h.length;c<d;++c){c&&r("\n");var m=new t.StringStream(h[c],null,{lookAhead:function(t){return h[c+t]},baseToken:function(){}});for(!m.string&&o.blankLine&&o.blankLine(f);!m.eol();){var y=o.token(m,f);r(m.current(),y,c,m.start,f),m.start=m.pos}}}})}();
//# sourceMappingURL=runmode-standalone.js.map