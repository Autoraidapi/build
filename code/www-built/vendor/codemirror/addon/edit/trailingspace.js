// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){e.defineOption("showTrailingSpace",!1,function(i,n,o){o==e.Init&&(o=!1),o&&!n?i.removeOverlay("trailingspace"):!o&&n&&i.addOverlay({token:function(e){for(var i=e.string.length,n=i;n&&/\s/.test(e.string.charAt(n-1));--n);return n>e.pos?(e.pos=n,null):(e.pos=i,"trailingspace")},name:"trailingspace"})})});
//# sourceMappingURL=trailingspace.js.map