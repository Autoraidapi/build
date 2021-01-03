// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("rpm-changes",function(){var e=/^-+$/,r=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /,t=/^[\w+.-]+@[\w.-]+/;return{token:function(n){if(n.sol()){if(n.match(e))return"tag";if(n.match(r))return"tag"}return n.match(t)?"string":(n.next(),null)}}}),e.defineMIME("text/x-rpm-changes","rpm-changes"),e.defineMode("rpm-spec",function(){var e=/^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/,r=/^[a-zA-Z0-9()]+:/,t=/^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/,n=/^%(ifnarch|ifarch|if)/,o=/^%(else|endif)/,a=/^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;return{startState:function(){return{controlFlow:!1,macroParameters:!1,section:!1}},token:function(i,c){if("#"==i.peek())return i.skipToEnd(),"comment";if(i.sol()){if(i.match(r))return"header";if(i.match(t))return"atom"}if(i.match(/^\$\w+/))return"def";if(i.match(/^\$\{\w+\}/))return"def";if(i.match(o))return"keyword";if(i.match(n))return c.controlFlow=!0,"keyword";if(c.controlFlow){if(i.match(a))return"operator";if(i.match(/^(\d+)/))return"number";i.eol()&&(c.controlFlow=!1)}if(i.match(e))return i.eol()&&(c.controlFlow=!1),"number";if(i.match(/^%[\w]+/))return i.match(/^\(/)&&(c.macroParameters=!0),"keyword";if(c.macroParameters){if(i.match(/^\d+/))return"number";if(i.match(/^\)/))return c.macroParameters=!1,"keyword"}return i.match(/^%\{\??[\w \-\:\!]+\}/)?(i.eol()&&(c.controlFlow=!1),"def"):(i.next(),null)}}}),e.defineMIME("text/x-rpm-spec","rpm-spec")});
//# sourceMappingURL=rpm.js.map