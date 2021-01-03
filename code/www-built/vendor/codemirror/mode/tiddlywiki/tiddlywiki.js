// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

/***
    |''Name''|tiddlywiki.js|
    |''Description''|Enables TiddlyWikiy syntax highlighting using CodeMirror|
    |''Author''|PMario|
    |''Version''|0.1.7|
    |''Status''|''stable''|
    |''Source''|[[GitHub|https://github.com/pmario/CodeMirror2/blob/tw-syntax/mode/tiddlywiki]]|
    |''Documentation''|https://codemirror.tiddlyspace.com/|
    |''License''|[[MIT License|http://www.opensource.org/licenses/mit-license.php]]|
    |''CoreVersion''|2.5.0|
    |''Requires''|codemirror.js|
    |''Keywords''|syntax highlighting color code mirror codemirror|
    ! Info
    CoreVersion parameter is needed for TiddlyWiki only!
***/


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("tiddlywiki",function(){function e(e,t,r){return t.tokenize=r,r(e,t)}function t(t,m){var x=t.sol(),z=t.peek();if(m.block=!1,x&&/[<\/\*{}\-]/.test(z)){if(t.match(w))return m.block=!0,e(t,m,i);if(t.match(s))return"quote";if(t.match(d)||t.match(h))return"comment";if(t.match(b)||t.match(p)||t.match($)||t.match(v))return"comment";if(t.match(k))return"hr"}if(t.next(),x&&/[\/\*!#;:>|]/.test(z)){if("!"==z)return t.skipToEnd(),"header";if("*"==z)return t.eatWhile("*"),"comment";if("#"==z)return t.eatWhile("#"),"comment";if(";"==z)return t.eatWhile(";"),"comment";if(":"==z)return t.eatWhile(":"),"comment";if(">"==z)return t.eatWhile(">"),"quote";if("|"==z)return"header"}if("{"==z&&t.match(/\{\{/))return e(t,m,i);if(/[hf]/i.test(z)&&/[ti]/i.test(t.peek())&&t.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==z)return"string";if("~"==z)return"brace";if(/[\[\]]/.test(z)&&t.match(z))return"brace";if("@"==z)return t.eatWhile(l),"link";if(/\d/.test(z))return t.eatWhile(/\d/),"number";if("/"==z){if(t.eat("%"))return e(t,m,r);if(t.eat("/"))return e(t,m,o)}if("_"==z&&t.eat("_"))return e(t,m,u);if("-"==z&&t.eat("-")){if(" "!=t.peek())return e(t,m,a);if(" "==t.peek())return"brace"}return"'"==z&&t.eat("'")?e(t,m,n):"<"==z&&t.eat("<")?e(t,m,f):(t.eatWhile(/[\w\$_]/),c.propertyIsEnumerable(t.current())?"keyword":null)}function r(e,r){for(var n,i=!1;n=e.next();){if("/"==n&&i){r.tokenize=t;break}i="%"==n}return"comment"}function n(e,r){for(var n,i=!1;n=e.next();){if("'"==n&&i){r.tokenize=t;break}i="'"==n}return"strong"}function i(e,r){var n=r.block;return n&&e.current()?"comment":!n&&e.match(z)?(r.tokenize=t,"comment"):n&&e.sol()&&e.match(x)?(r.tokenize=t,"comment"):(e.next(),"comment")}function o(e,r){for(var n,i=!1;n=e.next();){if("/"==n&&i){r.tokenize=t;break}i="/"==n}return"em"}function u(e,r){for(var n,i=!1;n=e.next();){if("_"==n&&i){r.tokenize=t;break}i="_"==n}return"underlined"}function a(e,r){for(var n,i=!1;n=e.next();){if("-"==n&&i){r.tokenize=t;break}i="-"==n}return"strikethrough"}function f(e,r){if("<<"==e.current())return"macro";var n=e.next();return n?">"==n&&">"==e.peek()?(e.next(),r.tokenize=t,"macro"):(e.eatWhile(/[\w\$_]/),m.propertyIsEnumerable(e.current())?"keyword":null):(r.tokenize=t,null)}var c={},m={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},l=/[\w_\-]/i,k=/^\-\-\-\-+$/,d=/^\/\*\*\*$/,h=/^\*\*\*\/$/,s=/^<<<$/,b=/^\/\/\{\{\{$/,p=/^\/\/\}\}\}$/,$=/^<!--\{\{\{-->$/,v=/^<!--\}\}\}-->$/,w=/^\{\{\{$/,x=/^\}\}\}$/,z=/.*?\}\}\}/;return{startState:function(){return{tokenize:t}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}),e.defineMIME("text/x-tiddlywiki","tiddlywiki")});
//# sourceMappingURL=tiddlywiki.js.map