// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(e){"use strict";"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(window.CodeMirror)}(function(e){"use strict";e.defineMode("powershell",function(){function e(e,t){t=t||{};for(var r=void 0!==t.prefix?t.prefix:"^",n=void 0!==t.suffix?t.suffix:"\\b",o=0;o<e.length;o++)e[o]instanceof RegExp?e[o]=e[o].source:e[o]=e[o].replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");return new RegExp(r+"("+e.join("|")+")"+n,"i")}function t(e,t){var o=t.returnStack[t.returnStack.length-1];if(o&&o.shouldReturnFrom(t))return t.tokenize=o.tokenize,t.returnStack.pop(),t.tokenize(e,t);if(e.eatSpace())return null;if(e.eat("("))return t.bracketNesting+=1,"punctuation";if(e.eat(")"))return t.bracketNesting-=1,"punctuation";for(var i in E)if(e.match(E[i]))return i;var a=e.next();if("'"===a)return r(e,t);if("$"===a)return c(e,t);if('"'===a)return n(e,t);if("<"===a&&e.eat("#"))return t.tokenize=u,u(e,t);if("#"===a)return e.skipToEnd(),"comment";if("@"===a){var s=e.eat(/["']/);if(s&&e.eol())return t.tokenize=p,t.startQuote=s[0],p(e,t);if(e.eol())return"error";if(e.peek().match(/[({]/))return"punctuation";if(e.peek().match(m))return c(e,t)}return"error"}function r(e,r){for(var n;null!=(n=e.peek());)if(e.next(),"'"===n&&!e.eat("'"))return r.tokenize=t,"string";return"error"}function n(e,r){for(var n;null!=(n=e.peek());){if("$"===n)return r.tokenize=o,"string";if(e.next(),"`"!==n){if('"'===n&&!e.eat('"'))return r.tokenize=t,"string"}else e.next()}return"error"}function o(e,t){return s(e,t,n)}function i(e,t){return t.tokenize=p,t.startQuote='"',p(e,t)}function a(e,t){return s(e,t,i)}function s(e,r,n){if(e.match("$(")){var o=r.bracketNesting;return r.returnStack.push({shouldReturnFrom:function(e){return e.bracketNesting===o},tokenize:n}),r.tokenize=t,r.bracketNesting+=1,"punctuation"}return e.next(),r.returnStack.push({shouldReturnFrom:function(){return!0},tokenize:n}),r.tokenize=c,r.tokenize(e,r)}function u(e,r){for(var n,o=!1;null!=(n=e.next());){if(o&&">"==n){r.tokenize=t;break}o="#"===n}return"comment"}function c(e,r){var n=e.peek();return e.eat("{")?(r.tokenize=l,l(e,r)):void 0!=n&&n.match(m)?(e.eatWhile(m),r.tokenize=t,"variable-2"):(r.tokenize=t,"error")}function l(e,r){for(var n;null!=(n=e.next());)if("}"===n){r.tokenize=t;break}return"variable-2"}function p(e,r){var n=r.startQuote;if(e.sol()&&e.match(new RegExp(n+"@")))r.tokenize=t;else if('"'===n)for(;!e.eol();){var o=e.peek();if("$"===o)return r.tokenize=a,"string";e.next(),"`"===o&&e.next()}else e.skipToEnd();return"string"}var m=/[\w\-:]/,f=e([/begin|break|catch|continue|data|default|do|dynamicparam/,/else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,/param|process|return|switch|throw|trap|try|until|where|while/],{suffix:"(?=[^A-Za-z\\d\\-_]|$)"}),S=/[\[\]{},;`\\\.]|@[({]/,d=e(["f",/b?not/,/[ic]?split/,"join",/is(not)?/,"as",/[ic]?(eq|ne|[gl][te])/,/[ic]?(not)?(like|match|contains)/,/[ic]?replace/,/b?(and|or|xor)/],{prefix:"-"}),P=/[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/,b=e([d,P],{suffix:""}),g=/^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i,v=/^[A-Za-z\_][A-Za-z\-\_\d]*\b/,C=/[A-Z]:|%|\?/i,k=e([/Add-(Computer|Content|History|Member|PSSnapin|Type)/,/Checkpoint-Computer/,/Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,/Compare-Object/,/Complete-Transaction/,/Connect-PSSession/,/ConvertFrom-(Csv|Json|SecureString|StringData)/,/Convert-Path/,/ConvertTo-(Csv|Html|Json|SecureString|Xml)/,/Copy-Item(Property)?/,/Debug-Process/,/Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/Disconnect-PSSession/,/Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/(Enter|Exit)-PSSession/,/Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,/ForEach-Object/,/Format-(Custom|List|Table|Wide)/,new RegExp("Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)"),/Group-Object/,/Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,/ImportSystemModules/,/Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,/Join-Path/,/Limit-EventLog/,/Measure-(Command|Object)/,/Move-Item(Property)?/,new RegExp("New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)"),/Out-(Default|File|GridView|Host|Null|Printer|String)/,/Pause/,/(Pop|Push)-Location/,/Read-Host/,/Receive-(Job|PSSession)/,/Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,/Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,/Rename-(Computer|Item(Property)?)/,/Reset-ComputerMachinePassword/,/Resolve-Path/,/Restart-(Computer|Service)/,/Restore-Computer/,/Resume-(Job|Service)/,/Save-Help/,/Select-(Object|String|Xml)/,/Send-MailMessage/,new RegExp("Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)"),/Show-(Command|ControlPanelItem|EventLog)/,/Sort-Object/,/Split-Path/,/Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,/Stop-(Computer|Job|Process|Service|Transcript)/,/Suspend-(Job|Service)/,/TabExpansion2/,/Tee-Object/,/Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,/Trace-Command/,/Unblock-File/,/Undo-Transaction/,/Unregister-(Event|PSSessionConfiguration)/,/Update-(FormatData|Help|List|TypeData)/,/Use-Transaction/,/Wait-(Event|Job|Process)/,/Where-Object/,/Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,/cd|help|mkdir|more|oss|prompt/,/ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,/echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,/group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,/measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,/rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,/sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/],{prefix:"",suffix:""}),h=e([/[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,/FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,/MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,/PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,/PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,/WarningPreference|WhatIfPreference/,/Event|EventArgs|EventSubscriber|Sender/,/Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,/true|false|null/],{prefix:"\\$",suffix:""}),x=e([C,k,h],{suffix:"(?=[^A-Za-z\\d\\-_]|$)"}),E={keyword:f,number:g,operator:b,builtin:x,punctuation:S,identifier:v};return{startState:function(){return{returnStack:[],bracketNesting:0,tokenize:t}},token:function(e,t){return t.tokenize(e,t)},blockCommentStart:"<#",blockCommentEnd:"#>",lineComment:"#",fold:"brace"}}),e.defineMIME("application/x-powershell","powershell")});
//# sourceMappingURL=powershell.js.map