// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("xquery",function(){function e(e,t,n){return t.tokenize=n,n(e,t)}function t(t,o){var f=t.next(),d=!1,x=p(t);if("<"==f){if(t.match("!--",!0))return e(t,o,s);if(t.match("![CDATA",!1))return o.tokenize=c,"tag";if(t.match("?",!1))return e(t,o,u);var v=t.eat("/");t.eatSpace();for(var k,b="";k=t.eat(/[^\s\u00a0=<>\"\'\/?]/);)b+=k;return e(t,o,a(b,v))}if("{"==f)return g(o,{type:"codeblock"}),null;if("}"==f)return y(o),null;if(l(o))return">"==f?"tag":"/"==f&&t.eat(">")?(y(o),"tag"):"variable";if(/\d/.test(f))return t.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===f&&t.eat(":"))return g(o,{type:"comment"}),e(t,o,n);if(x||'"'!==f&&"'"!==f){if("$"===f)return e(t,o,i);if(":"===f&&t.eat("="))return"keyword";if("("===f)return g(o,{type:"paren"}),null;if(")"===f)return y(o),null;if("["===f)return g(o,{type:"bracket"}),null;if("]"===f)return y(o),null;var z=h.propertyIsEnumerable(f)&&h[f];if(x&&'"'===f)for(;'"'!==t.next(););if(x&&"'"===f)for(;"'"!==t.next(););z||t.eatWhile(/[\w\$_-]/);var w=t.eat(":");!t.eat(":")&&w&&t.eatWhile(/[\w\$_-]/),t.match(/^[ \t]*\(/,!1)&&(d=!0);var I=t.current();return z=h.propertyIsEnumerable(I)&&h[I],d&&!z&&(z={type:"function_call",style:"variable def"}),m(o)?(y(o),"variable"):("element"!=I&&"attribute"!=I&&"axis_specifier"!=z.type||g(o,{type:"xmlconstructor"}),z?z.style:"variable")}return e(t,o,r(f))}function n(e,t){for(var n,r=!1,i=!1,a=0;n=e.next();){if(")"==n&&r){if(!(a>0)){y(t);break}a--}else":"==n&&i&&a++;r=":"==n,i="("==n}return"comment"}function r(e,n){return function(i,a){var o;if(d(a)&&i.current()==e)return y(a),n&&(a.tokenize=n),"string";if(g(a,{type:"string",name:e,tokenize:r(e,n)}),i.match("{",!1)&&f(a))return a.tokenize=t,"string";for(;o=i.next();){if(o==e){y(a),n&&(a.tokenize=n);break}if(i.match("{",!1)&&f(a))return a.tokenize=t,"string"}return"string"}}function i(e,n){var r=/[\w\$_-]/;if(e.eat('"')){for(;'"'!==e.next(););e.eat(":")}else e.eatWhile(r),e.match(":=",!1)||e.eat(":");return e.eatWhile(r),n.tokenize=t,"variable"}function a(e,n){return function(r,i){return r.eatSpace(),n&&r.eat(">")?(y(i),i.tokenize=t,"tag"):(r.eat("/")||g(i,{type:"tag",name:e,tokenize:t}),r.eat(">")?(i.tokenize=t,"tag"):(i.tokenize=o,"tag"))}}function o(n,i){var a=n.next();return"/"==a&&n.eat(">")?(f(i)&&y(i),l(i)&&y(i),"tag"):">"==a?(f(i)&&y(i),"tag"):"="==a?null:'"'==a||"'"==a?e(n,i,r(a,o)):(f(i)||g(i,{type:"attribute",tokenize:o}),n.eat(/[a-zA-Z_:]/),n.eatWhile(/[-a-zA-Z0-9_:.]/),n.eatSpace(),(n.match(">",!1)||n.match("/",!1))&&(y(i),i.tokenize=t),"attribute")}function s(e,n){for(var r;r=e.next();)if("-"==r&&e.match("->",!0))return n.tokenize=t,"comment"}function c(e,n){for(var r;r=e.next();)if("]"==r&&e.match("]",!0))return n.tokenize=t,"comment"}function u(e,n){for(var r;r=e.next();)if("?"==r&&e.match(">",!0))return n.tokenize=t,"comment meta"}function l(e){return x(e,"tag")}function f(e){return x(e,"attribute")}function m(e){return x(e,"xmlconstructor")}function d(e){return x(e,"string")}function p(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1)}function x(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function g(e,t){e.stack.push(t)}function y(e){e.stack.pop();var n=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=n||t}var h=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"punctuation",style:null},i={type:"axis_specifier",style:"qualifier"},a={",":r},o=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],s=0,c=o.length;s<c;s++)a[o[s]]=e(o[s]);for(var u=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"],s=0,c=u.length;s<c;s++)a[u[s]]=n;for(var l=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"],s=0,c=l.length;s<c;s++)a[l[s]]=t;for(var f=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"],s=0,c=f.length;s<c;s++)a[f[s]]=i;return a}();return{startState:function(){return{tokenize:t,cc:[],stack:[]}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(:",blockCommentEnd:":)"}}),e.defineMIME("application/xquery","xquery")});
//# sourceMappingURL=xquery.js.map