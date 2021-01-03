// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("./matchesonscrollbar")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./matchesonscrollbar"],t):t(CodeMirror)}(function(t){"use strict";function e(t){this.options={};for(var e in u)this.options[e]=(t&&t.hasOwnProperty(e)?t:u)[e];this.overlay=this.timeout=null,this.matchesonscroll=null,this.active=!1}function o(t){var e=t.state.matchHighlighter;(e.active||t.hasFocus())&&n(t,e)}function i(t){var e=t.state.matchHighlighter;e.active||(e.active=!0,n(t,e))}function n(t,e){clearTimeout(e.timeout),e.timeout=setTimeout(function(){s(t)},e.options.delay)}function r(t,e,o,i){var n=t.state.matchHighlighter;if(t.addOverlay(n.overlay=h(e,o,i)),n.options.annotateScrollbar&&t.showMatchesOnScrollbar){var r=o?new RegExp((/\w/.test(e.charAt(0))?"\\b":"")+e.replace(/[\\\[.+*?(){|^$]/g,"\\$&")+(/\w/.test(e.charAt(e.length-1))?"\\b":"")):e;n.matchesonscroll=t.showMatchesOnScrollbar(r,!1,{className:"CodeMirror-selection-highlight-scrollbar"})}}function a(t){var e=t.state.matchHighlighter;e.overlay&&(t.removeOverlay(e.overlay),e.overlay=null,e.matchesonscroll&&(e.matchesonscroll.clear(),e.matchesonscroll=null))}function s(t){t.operation(function(){var e=t.state.matchHighlighter;if(a(t),!t.somethingSelected()&&e.options.showToken){for(var o=!0===e.options.showToken?/[\w$]/:e.options.showToken,i=t.getCursor(),n=t.getLine(i.line),s=i.ch,l=s;s&&o.test(n.charAt(s-1));)--s;for(;l<n.length&&o.test(n.charAt(l));)++l;return void(s<l&&r(t,n.slice(s,l),o,e.options.style))}var h=t.getCursor("from"),u=t.getCursor("to");if(h.line==u.line&&(!e.options.wordsOnly||c(t,h,u))){var g=t.getRange(h,u);e.options.trim&&(g=g.replace(/^\s+|\s+$/g,"")),g.length>=e.options.minChars&&r(t,g,!1,e.options.style)}})}function c(t,e,o){if(null!==t.getRange(e,o).match(/^\w+$/)){if(e.ch>0){var i={line:e.line,ch:e.ch-1},n=t.getRange(i,e);if(null===n.match(/\W/))return!1}if(o.ch<t.getLine(e.line).length){var i={line:o.line,ch:o.ch+1},n=t.getRange(o,i);if(null===n.match(/\W/))return!1}return!0}return!1}function l(t,e){return!(t.start&&e.test(t.string.charAt(t.start-1))||t.pos!=t.string.length&&e.test(t.string.charAt(t.pos)))}function h(t,e,o){return{token:function(i){if(i.match(t)&&(!e||l(i,e)))return o;i.next(),i.skipTo(t.charAt(0))||i.skipToEnd()}}}var u={style:"matchhighlight",minChars:2,delay:100,wordsOnly:!1,annotateScrollbar:!1,showToken:!1,trim:!0};t.defineOption("highlightSelectionMatches",!1,function(n,r,c){if(c&&c!=t.Init&&(a(n),clearTimeout(n.state.matchHighlighter.timeout),n.state.matchHighlighter=null,n.off("cursorActivity",o),n.off("focus",i)),r){var l=n.state.matchHighlighter=new e(r);n.hasFocus()?(l.active=!0,s(n)):n.on("focus",i),n.on("cursorActivity",o)}})});
//# sourceMappingURL=match-highlighter.js.map