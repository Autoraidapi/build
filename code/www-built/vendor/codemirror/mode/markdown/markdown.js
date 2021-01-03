// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../meta")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../meta"],t):t(CodeMirror)}(function(t){"use strict";t.defineMode("markdown",function(e,i){function n(i){if(t.findModeByName){var n=t.findModeByName(i);n&&(i=n.mime||n.mimes[0])}var u=t.getMode(e,i);return"null"==u.name?null:u}function u(t,e,i){return e.f=e.inline=i,i(t,e)}function r(t,e,i){return e.f=e.block=i,i(t,e)}function a(t){return!t||!/\S/.test(t.string)}function o(e){if(e.linkTitle=!1,e.linkHref=!1,e.linkText=!1,e.em=!1,e.strong=!1,e.strikethrough=!1,e.quote=0,e.indentedCode=!1,e.f==h){var i=x;if(!i){var n=t.innerMode(E,e.htmlState);i="xml"==n.mode.name&&null===n.state.tagStart&&!n.state.context&&n.state.tokenize.isInText}i&&(e.f=f,e.block=l,e.htmlState=null)}return e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.prevLine=e.thisLine,e.thisLine={stream:null},null}function l(e,r){var o=e.column()===r.indentation,l=a(r.prevLine.stream),h=r.indentedCode,m=r.prevLine.hr,f=!1!==r.list,d=(r.listStack[r.listStack.length-1]||0)+3;r.indentedCode=!1;var c=r.indentation;if(null===r.indentationDiff&&(r.indentationDiff=r.indentation,f)){for(r.list=null;c<r.listStack[r.listStack.length-1];)r.listStack.pop(),r.listStack.length?r.indentation=r.listStack[r.listStack.length-1]:r.list=!1;!1!==r.list&&(r.indentationDiff=c-r.listStack[r.listStack.length-1])}var k=!(l||m||r.prevLine.header||f&&h||r.prevLine.fencedCodeEnd),D=(!1===r.list||m||l)&&r.indentation<=d&&e.match(v),p=null;if(r.indentationDiff>=4&&(h||r.prevLine.fencedCodeEnd||r.prevLine.header||l))return e.skipToEnd(),r.indentedCode=!0,A.code;if(e.eatSpace())return null;if(o&&r.indentation<=d&&(p=e.match(L))&&p[1].length<=6)return r.quote=0,r.header=p[1].length,r.thisLine.header=!0,i.highlightFormatting&&(r.formatting="header"),r.f=r.inline,g(r);if(r.indentation<=d&&e.eat(">"))return r.quote=o?1:r.quote+1,i.highlightFormatting&&(r.formatting="quote"),e.eatSpace(),g(r);if(!D&&!r.setext&&o&&r.indentation<=d&&(p=e.match(S))){var E=p[1]?"ol":"ul";return r.indentation=c+e.current().length,r.list=!0,r.quote=0,r.listStack.push(r.indentation),r.em=!1,r.strong=!1,r.code=!1,r.strikethrough=!1,i.taskLists&&e.match(B,!1)&&(r.taskList=!0),r.f=r.inline,i.highlightFormatting&&(r.formatting=["list","list-"+E]),g(r)}return o&&r.indentation<=d&&(p=e.match(q,!0))?(r.quote=0,r.fencedEndRE=new RegExp(p[1]+"+ *$"),r.localMode=i.fencedCodeBlockHighlighting&&n(p[2]||i.fencedCodeBlockDefaultMode),r.localMode&&(r.localState=t.startState(r.localMode)),r.f=r.block=s,i.highlightFormatting&&(r.formatting="code-block"),r.code=-1,g(r)):r.setext||!(k&&f||r.quote||!1!==r.list||r.code||D||b.test(e.string))&&(p=e.lookAhead(1))&&(p=p.match(T))?(r.setext?(r.header=r.setext,r.setext=0,e.skipToEnd(),i.highlightFormatting&&(r.formatting="header")):(r.header="="==p[0].charAt(0)?1:2,r.setext=r.header),r.thisLine.header=!0,r.f=r.inline,g(r)):D?(e.skipToEnd(),r.hr=!0,r.thisLine.hr=!0,A.hr):"["===e.peek()?u(e,r,F):u(e,r,r.inline)}function h(e,i){var n=E.token(e,i.htmlState);if(!x){var u=t.innerMode(E,i.htmlState);("xml"==u.mode.name&&null===u.state.tagStart&&!u.state.context&&u.state.tokenize.isInText||i.md_inside&&e.current().indexOf(">")>-1)&&(i.f=f,i.block=l,i.htmlState=null)}return n}function s(t,e){var n=e.listStack[e.listStack.length-1]||0,u=e.indentation<n,a=n+3;if(e.fencedEndRE&&e.indentation<=a&&(u||t.match(e.fencedEndRE))){i.highlightFormatting&&(e.formatting="code-block");var o;return u||(o=g(e)),e.localMode=e.localState=null,e.block=l,e.f=f,e.fencedEndRE=null,e.code=0,e.thisLine.fencedCodeEnd=!0,u?r(t,e,e.block):o}return e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),A.code)}function g(t){var e=[];if(t.formatting){e.push(A.formatting),"string"==typeof t.formatting&&(t.formatting=[t.formatting]);for(var n=0;n<t.formatting.length;n++)e.push(A.formatting+"-"+t.formatting[n]),"header"===t.formatting[n]&&e.push(A.formatting+"-"+t.formatting[n]+"-"+t.header),"quote"===t.formatting[n]&&(!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(A.formatting+"-"+t.formatting[n]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null;if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null;if(t.linkHref?e.push(A.linkHref,"url"):(t.strong&&e.push(A.strong),t.em&&e.push(A.em),t.strikethrough&&e.push(A.strikethrough),t.emoji&&e.push(A.emoji),t.linkText&&e.push(A.linkText),t.code&&e.push(A.code),t.image&&e.push(A.image),t.imageAltText&&e.push(A.imageAltText,"link"),t.imageMarker&&e.push(A.imageMarker)),t.header&&e.push(A.header,A.header+"-"+t.header),t.quote&&(e.push(A.quote),!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(A.quote+"-"+t.quote):e.push(A.quote+"-"+i.maxBlockquoteDepth)),!1!==t.list){var u=(t.listStack.length-1)%3;u?1===u?e.push(A.list2):e.push(A.list3):e.push(A.list1)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function m(t,e){if(t.match(M,!0))return g(e)}function f(e,n){var u=n.text(e,n);if(void 0!==u)return u;if(n.list)return n.list=null,g(n);if(n.taskList){return" "===e.match(B,!0)[1]?n.taskOpen=!0:n.taskClosed=!0,i.highlightFormatting&&(n.formatting="task"),n.taskList=!1,g(n)}if(n.taskOpen=!1,n.taskClosed=!1,n.header&&e.match(/^#+$/,!0))return i.highlightFormatting&&(n.formatting="header"),g(n);var a=e.next();if(n.linkTitle){n.linkTitle=!1;var o=a;"("===a&&(o=")"),o=(o+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1");var l="^\\s*(?:[^"+o+"\\\\]+|\\\\\\\\|\\\\.)"+o;if(e.match(new RegExp(l),!0))return A.linkHref}if("`"===a){var s=n.formatting;i.highlightFormatting&&(n.formatting="code"),e.eatWhile("`");var m=e.current().length;if(0!=n.code||n.quote&&1!=m){if(m==n.code){var k=g(n);return n.code=0,k}return n.formatting=s,g(n)}return n.code=m,g(n)}if(n.code)return g(n);if("\\"===a&&(e.next(),i.highlightFormatting)){var F=g(n),D=A.formatting+"-escape";return F?F+" "+D:D}if("!"===a&&e.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return n.imageMarker=!0,n.image=!0,i.highlightFormatting&&(n.formatting="image"),g(n);if("["===a&&n.imageMarker&&e.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return n.imageMarker=!1,n.imageAltText=!0,i.highlightFormatting&&(n.formatting="image"),g(n);if("]"===a&&n.imageAltText){i.highlightFormatting&&(n.formatting="image");var F=g(n);return n.imageAltText=!1,n.image=!1,n.inline=n.f=c,F}if("["===a&&!n.image)return n.linkText&&e.match(/^.*?\]/)?g(n):(n.linkText=!0,i.highlightFormatting&&(n.formatting="link"),g(n));if("]"===a&&n.linkText){i.highlightFormatting&&(n.formatting="link");var F=g(n);return n.linkText=!1,n.inline=n.f=e.match(/\(.*?\)| ?\[.*?\]/,!1)?c:f,F}if("<"===a&&e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1)){n.f=n.inline=d,i.highlightFormatting&&(n.formatting="link");var F=g(n);return F?F+=" ":F="",F+A.linkInline}if("<"===a&&e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1)){n.f=n.inline=d,i.highlightFormatting&&(n.formatting="link");var F=g(n);return F?F+=" ":F="",F+A.linkEmail}if(i.xml&&"<"===a&&e.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,!1)){var p=e.string.indexOf(">",e.pos);if(-1!=p){/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(e.string.substring(e.start,p))&&(n.md_inside=!0)}return e.backUp(1),n.htmlState=t.startState(E),r(e,n,h)}if(i.xml&&"<"===a&&e.match(/^\/\w*?>/))return n.md_inside=!1,"tag";if("*"===a||"_"===a){for(var x=1,C=1==e.pos?" ":e.string.charAt(e.pos-2);x<3&&e.eat(a);)x++;var v=e.peek()||" ",S=!/\s/.test(v)&&(!w.test(v)||/\s/.test(C)||w.test(C)),L=!/\s/.test(C)&&(!w.test(C)||/\s/.test(v)||w.test(v)),T=null,M=null;if(x%2&&(n.em||!S||"*"!==a&&L&&!w.test(C)?n.em!=a||!L||"*"!==a&&S&&!w.test(v)||(T=!1):T=!0),x>1&&(n.strong||!S||"*"!==a&&L&&!w.test(C)?n.strong!=a||!L||"*"!==a&&S&&!w.test(v)||(M=!1):M=!0),null!=M||null!=T){i.highlightFormatting&&(n.formatting=null==T?"strong":null==M?"em":"strong em"),!0===T&&(n.em=a),!0===M&&(n.strong=a);var k=g(n);return!1===T&&(n.em=!1),!1===M&&(n.strong=!1),k}}else if(" "===a&&(e.eat("*")||e.eat("_"))){if(" "===e.peek())return g(n);e.backUp(1)}if(i.strikethrough)if("~"===a&&e.eatWhile(a)){if(n.strikethrough){i.highlightFormatting&&(n.formatting="strikethrough");var k=g(n);return n.strikethrough=!1,k}if(e.match(/^[^\s]/,!1))return n.strikethrough=!0,i.highlightFormatting&&(n.formatting="strikethrough"),g(n)}else if(" "===a&&e.match(/^~~/,!0)){if(" "===e.peek())return g(n);e.backUp(2)}if(i.emoji&&":"===a&&e.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)){n.emoji=!0,i.highlightFormatting&&(n.formatting="emoji");var q=g(n);return n.emoji=!1,q}return" "===a&&(e.match(/^ +$/,!1)?n.trailingSpace++:n.trailingSpace&&(n.trailingSpaceNewLine=!0)),g(n)}function d(t,e){if(">"===t.next()){e.f=e.inline=f,i.highlightFormatting&&(e.formatting="link");var n=g(e);return n?n+=" ":n="",n+A.linkInline}return t.match(/^[^>]+/,!0),A.linkInline}function c(t,e){if(t.eatSpace())return null;var n=t.next();return"("===n||"["===n?(e.f=e.inline=k("("===n?")":"]"),i.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,g(e)):"error"}function k(t){return function(e,n){if(e.next()===t){n.f=n.inline=f,i.highlightFormatting&&(n.formatting="link-string");var u=g(n);return n.linkHref=!1,u}return e.match(j[t]),n.linkHref=!0,g(n)}}function F(t,e){return t.match(/^([^\]\\]|\\.)*\]:/,!1)?(e.f=D,t.next(),i.highlightFormatting&&(e.formatting="link"),e.linkText=!0,g(e)):u(t,e,f)}function D(t,e){if(t.match(/^\]:/,!0)){e.f=e.inline=p,i.highlightFormatting&&(e.formatting="link");var n=g(e);return e.linkText=!1,n}return t.match(/^([^\]\\]|\\.)+/,!0),A.linkText}function p(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),e.f=e.inline=f,A.linkHref+" url")}var E=t.getMode(e,"text/html"),x="null"==E.name;void 0===i.highlightFormatting&&(i.highlightFormatting=!1),void 0===i.maxBlockquoteDepth&&(i.maxBlockquoteDepth=0),void 0===i.taskLists&&(i.taskLists=!1),void 0===i.strikethrough&&(i.strikethrough=!1),void 0===i.emoji&&(i.emoji=!1),void 0===i.fencedCodeBlockHighlighting&&(i.fencedCodeBlockHighlighting=!0),void 0===i.fencedCodeBlockDefaultMode&&(i.fencedCodeBlockDefaultMode="text/plain"),void 0===i.xml&&(i.xml=!0),void 0===i.tokenTypeOverrides&&(i.tokenTypeOverrides={});var A={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"};for(var C in A)A.hasOwnProperty(C)&&i.tokenTypeOverrides[C]&&(A[C]=i.tokenTypeOverrides[C]);var v=/^([*\-_])(?:\s*\1){2,}\s*$/,S=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,B=/^\[(x| )\](?=\s)/i,L=i.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,T=/^ {0,3}(?:\={1,}|-{2,})\s*$/,M=/^[^#!\[\]*_\\<>` "'(~:]+/,q=/^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,b=/^\s*\[[^\]]+?\]:.*$/,w=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,j={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/},y={startState:function(){return{f:l,prevLine:{stream:null},thisLine:{stream:null},block:l,htmlState:null,indentation:0,inline:f,text:m,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(e){return{f:e.f,prevLine:e.prevLine,thisLine:e.thisLine,block:e.block,htmlState:e.htmlState&&t.copyState(E,e.htmlState),indentation:e.indentation,localMode:e.localMode,localState:e.localMode?t.copyState(e.localMode,e.localState):null,inline:e.inline,text:e.text,formatting:!1,linkText:e.linkText,linkTitle:e.linkTitle,linkHref:e.linkHref,code:e.code,em:e.em,strong:e.strong,strikethrough:e.strikethrough,emoji:e.emoji,header:e.header,setext:e.setext,hr:e.hr,taskList:e.taskList,list:e.list,listStack:e.listStack.slice(0),quote:e.quote,indentedCode:e.indentedCode,trailingSpace:e.trailingSpace,trailingSpaceNewLine:e.trailingSpaceNewLine,md_inside:e.md_inside,fencedEndRE:e.fencedEndRE}},token:function(t,e){if(e.formatting=!1,t!=e.thisLine.stream){if(e.header=0,e.hr=!1,t.match(/^\s*$/,!0))return o(e),null;if(e.prevLine=e.thisLine,e.thisLine={stream:t},e.taskList=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,!e.localState&&(e.f=e.block,e.f!=h)){var i=t.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length;if(e.indentation=i,e.indentationDiff=null,i>0)return null}}return e.f(t,e)},innerMode:function(t){return t.block==h?{state:t.htmlState,mode:E}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:y}},indent:function(e,i,n){return e.block==h&&E.indent?E.indent(e.htmlState,i,n):e.localState&&e.localMode.indent?e.localMode.indent(e.localState,i,n):t.Pass},blankLine:o,getType:g,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",closeBrackets:"()[]{}''\"\"``",fold:"markdown"};return y},"xml"),t.defineMIME("text/markdown","markdown"),t.defineMIME("text/x-markdown","markdown")});
//# sourceMappingURL=markdown.js.map