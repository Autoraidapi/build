// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function t(e,t,n){var i=t/a;return"tlv-"+e.tlvIndentationStyle[i]+"-"+n}function n(e){var t;return(t=e.match(o,!1))&&t[2].length>0}e.defineMode("verilog",function(t,n){function i(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}function r(e,t){var n,i=e.peek();if(b[i]&&0!=(n=b[i](e,t)))return n;if(b.tokenBase&&0!=(n=b.tokenBase(e,t)))return n;if(/[,;:\.]/.test(i))return u=e.next(),null;if(x.test(i))return u=e.next(),"bracket";if("`"==i){if(e.next(),e.eatWhile(/[\w\$_]/)){var r=e.current();if(m=r,r.startsWith("`uvm_")&&r.endsWith("_begin")){var l=m.substr(0,m.length-5)+"end";U[r]=l,u="newblock"}else{e.eatSpace(),"("==e.peek()&&(u="newmacro");var s=e.current();e.backUp(s.length-r.length)}return"def"}return null}if("$"==i)return e.next(),e.eatWhile(/[\w\$_]/)?"meta":null;if("#"==i)return e.next(),e.eatWhile(/[\d_.]/),"def";if("@"==i)return e.next(),e.eatWhile(/[@]/),"def";if('"'==i)return e.next(),t.tokenize=a(i),t.tokenize(e,t);if("/"==i){if(e.next(),e.eat("*"))return t.tokenize=o,o(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}if(e.match(E)||e.match(z)||e.match(C)||e.match(S)||e.match(j)||e.match(I)||e.match(E))return"number";if(e.eatWhile(_))return u=e.current(),"meta";if(e.eatWhile(/[\w\$_]/)){var r=e.current();return w[r]?(U[r]&&(u="newblock","fork"===r&&(e.eatSpace(),";"==e.peek()&&(u="newstatement"),e.backUp(e.current().length-r.length))),T[r]&&(u="newstatement"),m=r,"keyword"):"variable"}return e.next(),null}function a(e){return function(t,n){for(var i,a=!1,o=!1;null!=(i=t.next());){if(i==e&&!a){o=!0;break}a=!a&&"\\"==i}return(o||!a&&!k)&&(n.tokenize=r),"string"}}function o(e,t){for(var n,i=!1;n=e.next();){if("/"==n&&i){t.tokenize=r;break}i="*"==n}return"comment"}function l(e,t,n,i,r,a){this.indented=e,this.column=t,this.type=n,this.scopekind=i,this.align=r,this.prev=a}function s(e,t,n,i){var r=e.indented,a=new l(r,t,n,i||"",null,e.context);return e.context=a}function c(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function d(e,t){if(e==t)return!0;var n=t.split(";");for(var i in n)if(e==n[i])return!0;return!1}function f(e,t){return null!=e&&(e.scopekind===t||f(e.prev,t))}var u,m,p=t.indentUnit,v=n.statementIndentUnit||p,g=n.dontAlignCalls,h=n.compilerDirectivesUseRegularIndentation,y=n.noIndentKeywords||[],k=n.multiLineStrings,b=n.hooks||{},w=i("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),_=/[\+\-\*\/!~&|^%=?:<>]/,x=/[\[\]{}()]/,I=/\d[0-9_]*/,z=/\d*\s*'s?d\s*\d[0-9_]*/i,C=/\d*\s*'s?b\s*[xz01][xz01_]*/i,S=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,j=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,E=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,M=/^((`?\w+)|[)}\]])/,$=/[)}\]]/,q=new RegExp("^(`(?:ifdef|ifndef|elsif|else|endif|undef|undefineall|define|include|begin_keywords|celldefine|default|nettype|end_keywords|endcelldefine|line|nounconnected_drive|pragma|resetall|timescale|unconnected_drive))\\b"),A=/^(`(?:ifdef|ifndef|elsif|else))\b/,B=/^(`(?:elsif|else|endif))\b/,W=i("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),U={};for(var D in W)U[D]="end"+D;U.begin="end",U.casex="endcase",U.casez="endcase",U.do="while",U.fork="join;join_any;join_none",U.covergroup="endgroup",U.macro_begin="macro_end";for(var L in y){var D=y[L];U[D]&&(U[D]=void 0)}var T=i("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while extern typedef");return{electricInput:function(){var e=[];for(var t in U)if(U[t]){var n=U[t].split(";");for(var i in n)e.push(n[i])}return new RegExp("[{}()\\[\\]]|("+e.join("|")+")$")}(),startState:function(e){var t={tokenize:null,context:new l((e||0)-p,0,"top","top",!1),indented:0,compilerDirectiveIndented:0,startOfLine:!0};return b.startState&&b.startState(t),t},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),b.token){var i=b.token(e,t);if(void 0!==i)return i}if(e.eatSpace())return null;u=null,m=null;var i=(t.tokenize||r)(e,t);if("comment"==i||"meta"==i||"variable"==i)return"="!==u&&"<="!==u||f(n,"assignment")||(s(t,e.column()+u.length,"assignment","assignment"),null==n.align&&(n.align=!0)),i;null==n.align&&(n.align=!0);var a="assignment"==n.type&&$.test(u)&&n.prev&&n.prev.type===u;if(u==n.type||a){if(a&&(n=c(t)),n=c(t),")"==u){if(n&&"macro"===n.type)for(n=c(t);n&&("statement"==n.type||"assignment"==n.type);)n=c(t)}else if("}"==u&&n&&"statement"===n.type)for(;n&&"statement"==n.type;)n=c(t)}else if((";"==u||","==u)&&("statement"==n.type||"assignment"==n.type)||n.type&&d(m,n.type))for(n=c(t);n&&("statement"==n.type||"assignment"==n.type);)n=c(t);else if("{"==u)s(t,e.column(),"}");else if("["==u)s(t,e.column(),"]");else if("("==u)s(t,e.column(),")");else if(n&&"endcase"==n.type&&":"==u)s(t,e.column(),"statement","case");else if("newstatement"==u)s(t,e.column(),"statement",m);else if("newblock"==u)if("function"!=m||!n||"statement"!=n.type&&"endgroup"!=n.type)if("task"==m&&n&&"statement"==n.type);else if("class"==m&&n&&"statement"==n.type);else{var o=U[m];s(t,e.column(),o,m)}else;else("newmacro"==u||m&&m.match(q))&&("newmacro"==u&&s(t,e.column(),"macro","macro"),m.match(B)&&(t.compilerDirectiveIndented-=v),m.match(A)&&(t.compilerDirectiveIndented+=v));return t.startOfLine=!1,i},indent:function(t,n){if(t.tokenize!=r&&null!=t.tokenize)return e.Pass;if(b.indent){var i=b.indent(t);if(i>=0)return i}var a=t.context,o=n&&n.charAt(0);"statement"==a.type&&"}"==o&&(a=a.prev);var l=!1,s=n.match(M);return s&&(l=d(s[0],a.type)),!h&&n.match(q)?n.match(B)?t.compilerDirectiveIndented-v:t.compilerDirectiveIndented:"statement"==a.type?a.indented+("{"==o?0:v):!$.test(a.type)&&"assignment"!=a.type||!a.align||g?")"!=a.type||l?a.indented+(l?0:p):a.indented+v:a.column+(l?0:1)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"indent"}}),e.defineMIME("text/x-verilog",{name:"verilog"}),e.defineMIME("text/x-systemverilog",{name:"verilog"});var i={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"hr","/":"property","/-":"property","@":"variable-3","@-":"variable-3","@++":"variable-3","@+=":"variable-3","@+=-":"variable-3","@--":"variable-3","@-=":"variable-3","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable-2","**":"variable-2","\\":"keyword",'"':"comment"},r={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},a=3,o=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,l=/^[! ]  /,s=/^[! ] */,c=/^\/[\/\*]/;e.defineMIME("text/x-tlv",{name:"verilog",hooks:{electricInput:!1,token:function(e,d){var f,u=void 0;if(e.sol()&&!d.tlvInBlockComment){"\\"==e.peek()&&(u="def",e.skipToEnd(),e.string.match(/\\SV/)?d.tlvCodeActive=!1:e.string.match(/\\TLV/)&&(d.tlvCodeActive=!0)),d.tlvCodeActive&&0==e.pos&&0==d.indented&&(f=e.match(s,!1))&&(d.indented=f[0].length);var m=d.indented,p=m/a;if(p<=d.tlvIndentationStyle.length){var v=e.string.length==m,g=p*a;if(g<e.string.length){var h=e.string.slice(g),y=h[0];r[y]&&(f=h.match(o))&&i[f[1]]&&(m+=a,"\\"==y&&g>0||(d.tlvIndentationStyle[p]=r[y],p++))}if(!v)for(;d.tlvIndentationStyle.length>p;)d.tlvIndentationStyle.pop()}d.tlvNextIndent=m}if(d.tlvCodeActive){var f,k=!1;if(void 0!==u)u+=" "+t(d,0,"scope-ident");else if(e.pos/a<d.tlvIndentationStyle.length&&(f=e.match(e.sol()?l:/^   /)))u="tlv-indent-"+(e.pos%2==0?"even":"odd")+" "+t(d,e.pos-a,"indent"),"!"==f[0].charAt(0)&&(u+=" tlv-alert-line-prefix"),n(e)&&(u+=" "+t(d,e.pos,"before-scope-ident"));else if(d.tlvInBlockComment)e.match(/^.*?\*\//)?d.tlvInBlockComment=!1:e.skipToEnd(),u="comment";else if((f=e.match(c))&&!d.tlvInBlockComment)"//"==f[0]?e.skipToEnd():d.tlvInBlockComment=!0,u="comment";else if(f=e.match(o)){var b=f[1],w=f[2];i.hasOwnProperty(b)&&(w.length>0||e.eol())?(u=i[b],e.column()==d.indented&&(u+=" "+t(d,e.column(),"scope-ident"))):(e.backUp(e.current().length-1),u="tlv-default")}else e.match(/^\t+/)?u="tlv-tab":e.match(/^[\[\]{}\(\);\:]+/)?u="meta":(f=e.match(/^[mM]4([\+_])?[\w\d_]*/))?u="+"==f[1]?"tlv-m4-plus":"tlv-m4":e.match(/^ +/)?u=e.eol()?"error":"tlv-default":e.match(/^[\w\d_]+/)?u="number":(e.next(),u="tlv-default");k&&(u+=" tlv-statement")}else e.match(/^[mM]4([\w\d_]*)/)&&(u="tlv-m4");return u},indent:function(e){return 1==e.tlvCodeActive?e.tlvNextIndent:-1},startState:function(e){e.tlvIndentationStyle=[],e.tlvCodeActive=!0,e.tlvNextIndent=-1,e.tlvInBlockComment=!1}}})});
//# sourceMappingURL=verilog.js.map