// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(){CodeMirror.defineMode("markdown_with_stex",function(){var e=CodeMirror.getMode({},"stex"),o=CodeMirror.getMode({},"markdown"),r={open:"$",close:"$",mode:e,delimStyle:"delim",innerStyle:"inner"};return CodeMirror.multiplexingMode(o,r)});var e=CodeMirror.getMode({},"markdown_with_stex");!function(o){test.mode(o,e,Array.prototype.slice.call(arguments,1),"multiplexing")}("stexInsideMarkdown","[strong **Equation:**] [delim&delim-open $][inner&tag \\pi][delim&delim-close $]")}();
//# sourceMappingURL=multiplex_test.js.map