// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


function getFile(e,t){postMessage({type:"getFile",name:e,id:++nextId}),pending[nextId]=t}function startServer(e,t,r){r&&importScripts.apply(null,r),server=new tern.Server({getFile:getFile,async:!0,defs:e,plugins:t})}var server;this.onmessage=function(e){var t=e.data;switch(t.type){case"init":return startServer(t.defs,t.plugins,t.scripts);case"add":return server.addFile(t.name,t.text);case"del":return server.delFile(t.name);case"req":return server.request(t.body,function(e,r){postMessage({id:t.id,body:r,err:e&&String(e)})});case"getFile":var r=pending[t.id];return delete pending[t.id],r(t.err,t.text);default:throw new Error("Unknown message type: "+t.type)}};var nextId=0,pending={};this.console={log:function(e){postMessage({type:"debug",message:e})}};
//# sourceMappingURL=worker.js.map