/*!
    localForage -- Offline Storage, Improved
    Version 1.9.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.localforage=e()}}(function(){return function e(n,t,r){function o(a,u){if(!t[a]){if(!n[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var s=t[a]={exports:{}};n[a][0].call(s.exports,function(e){var t=n[a][1][e];return o(t||e)},s,s.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,t){(function(e){function t(){s=!0;for(var e,n,t=l.length;t;){for(n=l,l=[],e=-1;++e<t;)n[e]();t=l.length}s=!1}function r(e){1!==l.push(e)||s||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,u=new i(t),c=e.document.createTextNode("");u.observe(c,{characterData:!0}),o=function(){c.data=a=++a%2}}else if(e.setImmediate||void 0===e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var n=e.document.createElement("script");n.onreadystatechange=function(){t(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},e.document.documentElement.appendChild(n)}:function(){setTimeout(t,0)};else{var f=new e.MessageChannel;f.port1.onmessage=t,o=function(){f.port2.postMessage(0)}}var s,l=[];n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,n,t){function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,e!==r&&c(this,e)}function i(e,n,t){this.promise=e,"function"==typeof n&&(this.onFulfilled=n,this.callFulfilled=this.otherCallFulfilled),"function"==typeof t&&(this.onRejected=t,this.callRejected=this.otherCallRejected)}function a(e,n,t){h(function(){var r;try{r=n(t)}catch(n){return y.reject(e,n)}r===e?y.reject(e,new TypeError("Cannot resolve promise with itself")):y.resolve(e,r)})}function u(e){var n=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof n)return function(){n.apply(e,arguments)}}function c(e,n){function t(n){i||(i=!0,y.reject(e,n))}function r(n){i||(i=!0,y.resolve(e,n))}function o(){n(r,t)}var i=!1,a=f(o);"error"===a.status&&t(a.value)}function f(e,n){var t={};try{t.value=e(n),t.status="success"}catch(e){t.status="error",t.value=e}return t}function s(e){return e instanceof this?e:y.resolve(new this(r),e)}function l(e){var n=new this(r);return y.reject(n,e)}function d(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var t=e.length,o=!1;if(!t)return this.resolve([]);for(var i=new Array(t),a=0,u=-1,c=new this(r);++u<t;)!function(e,r){function u(e){i[r]=e,++a!==t||o||(o=!0,y.resolve(c,i))}n.resolve(e).then(u,function(e){o||(o=!0,y.reject(c,e))})}(e[u],u);return c}function v(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var t=e.length,o=!1;if(!t)return this.resolve([]);for(var i=-1,a=new this(r);++i<t;)!function(e){n.resolve(e).then(function(e){o||(o=!0,y.resolve(a,e))},function(e){o||(o=!0,y.reject(a,e))})}(e[i]);return a}var h=e(1),y={},p=["REJECTED"],b=["FULFILLED"],m=["PENDING"];n.exports=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,n){if("function"!=typeof e&&this.state===b||"function"!=typeof n&&this.state===p)return this;var t=new this.constructor(r);if(this.state!==m){a(t,this.state===b?e:n,this.outcome)}else this.queue.push(new i(t,e,n));return t},i.prototype.callFulfilled=function(e){y.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){y.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},y.resolve=function(e,n){var t=f(u,n);if("error"===t.status)return y.reject(e,t.value);var r=t.value;if(r)c(e,r);else{e.state=b,e.outcome=n;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(n)}return e},y.reject=function(e,n){e.state=p,e.outcome=n;for(var t=-1,r=e.queue.length;++t<r;)e.queue[t].callRejected(n);return e},o.resolve=s,o.reject=l,o.all=d,o.race=v},{1:1}],3:[function(e,n,t){(function(n){"function"!=typeof n.Promise&&(n.Promise=e(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,n,t){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){e=e||[],n=n||{};try{return new Blob(e,n)}catch(i){if("TypeError"!==i.name)throw i;for(var t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new t,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(n.type)}}function i(e,n){n&&e.then(function(e){n(null,e)},function(e){n(e)})}function a(e,n,t){"function"==typeof n&&e.then(n),"function"==typeof t&&e.catch(t)}function u(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function c(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function f(e){for(var n=e.length,t=new ArrayBuffer(n),r=new Uint8Array(t),o=0;o<n;o++)r[o]=e.charCodeAt(o);return t}function s(e){return new be(function(n){var t=e.transaction(me,Se),r=o([""]);t.objectStore(me).put(r,"key"),t.onabort=function(e){e.preventDefault(),e.stopPropagation(),n(!1)},t.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);n(t||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1})}function l(e){return"boolean"==typeof ge?be.resolve(ge):s(e).then(function(e){return ge=e})}function d(e){var n=_e[e.name],t={};t.promise=new be(function(e,n){t.resolve=e,t.reject=n}),n.deferredOperations.push(t),n.dbReady?n.dbReady=n.dbReady.then(function(){return t.promise}):n.dbReady=t.promise}function v(e){var n=_e[e.name],t=n.deferredOperations.pop();if(t)return t.resolve(),t.promise}function h(e,n){var t=_e[e.name],r=t.deferredOperations.pop();if(r)return r.reject(n),r.promise}function y(e,n){return new be(function(t,r){if(_e[e.name]=_e[e.name]||N(),e.db){if(!n)return t(e.db);d(e),e.db.close()}var o=[e.name];n&&o.push(e.version);var i=pe.open.apply(pe,o);n&&(i.onupgradeneeded=function(n){var t=i.result;try{t.createObjectStore(e.storeName),n.oldVersion<=1&&t.createObjectStore(me)}catch(t){if("ConstraintError"!==t.name)throw t;console.warn('The database "'+e.name+'" has been upgraded from version '+n.oldVersion+" to version "+n.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(e){e.preventDefault(),r(i.error)},i.onsuccess=function(){t(i.result),v(e)}})}function p(e){return y(e,!1)}function b(e){return y(e,!0)}function m(e,n){if(!e.db)return!0;var t=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==n&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||t){if(t){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function g(e){return new be(function(n,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){var r=btoa(t.target.result||"");n({__local_forage_encoded_blob:!0,data:r,type:e.type})},r.readAsBinaryString(e)})}function _(e){return o([f(atob(e.data))],{type:e.type})}function w(e){return e&&e.__local_forage_encoded_blob}function I(e){var n=this,t=n._initReady().then(function(){var e=_e[n._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return a(t,e,e),t}function S(e){d(e);for(var n=_e[e.name],t=n.forages,r=0;r<t.length;r++){var o=t[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,p(e).then(function(n){return e.db=n,m(e)?b(e):n}).then(function(r){e.db=n.db=r;for(var o=0;o<t.length;o++)t[o]._dbInfo.db=r}).catch(function(n){throw h(e,n),n})}function E(e,n,t,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,n);t(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return be.resolve().then(function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),b(e)}).then(function(){return S(e).then(function(){E(e,n,t,r-1)})}).catch(t);t(o)}}function N(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function j(e){function n(){return be.resolve()}var t=this,r={db:null};if(e)for(var o in e)r[o]=e[o];var i=_e[r.name];i||(i=N(),_e[r.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=I);for(var a=[],u=0;u<i.forages.length;u++){var c=i.forages[u];c!==t&&a.push(c._initReady().catch(n))}var f=i.forages.slice(0);return be.all(a).then(function(){return r.db=i.db,p(r)}).then(function(e){return r.db=e,m(r,t._defaultConfig.version)?b(r):e}).then(function(e){r.db=i.db=e,t._dbInfo=r;for(var n=0;n<f.length;n++){var o=f[n];o!==t&&(o._dbInfo.db=r.db,o._dbInfo.version=r.version)}})}function R(e,n){var t=this;e=u(e);var r=new be(function(n,r){t.ready().then(function(){E(t._dbInfo,Ie,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=a.get(e);u.onsuccess=function(){var e=u.result;void 0===e&&(e=null),w(e)&&(e=_(e)),n(e)},u.onerror=function(){r(u.error)}}catch(e){r(e)}})}).catch(r)});return i(r,n),r}function A(e,n){var t=this,r=new be(function(n,r){t.ready().then(function(){E(t._dbInfo,Ie,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=a.openCursor(),c=1;u.onsuccess=function(){var t=u.result;if(t){var r=t.value;w(r)&&(r=_(r));var o=e(r,t.key,c++);void 0!==o?n(o):t.continue()}else n()},u.onerror=function(){r(u.error)}}catch(e){r(e)}})}).catch(r)});return i(r,n),r}function O(e,n,t){var r=this;e=u(e);var o=new be(function(t,o){var i;r.ready().then(function(){return i=r._dbInfo,"[object Blob]"===we.call(n)?l(i.db).then(function(e){return e?n:g(n)}):n}).then(function(n){E(r._dbInfo,Se,function(i,a){if(i)return o(i);try{var u=a.objectStore(r._dbInfo.storeName);null===n&&(n=void 0);var c=u.put(n,e);a.oncomplete=function(){void 0===n&&(n=null),t(n)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}})}).catch(o)});return i(o,t),o}function D(e,n){var t=this;e=u(e);var r=new be(function(n,r){t.ready().then(function(){E(t._dbInfo,Se,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=a.delete(e);i.oncomplete=function(){n()},i.onerror=function(){r(u.error)},i.onabort=function(){var e=u.error?u.error:u.transaction.error;r(e)}}catch(e){r(e)}})}).catch(r)});return i(r,n),r}function x(e){var n=this,t=new be(function(e,t){n.ready().then(function(){E(n._dbInfo,Se,function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName),a=i.clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=a.error?a.error:a.transaction.error;t(e)}}catch(e){t(e)}})}).catch(t)});return i(t,e),t}function B(e){var n=this,t=new be(function(e,t){n.ready().then(function(){E(n._dbInfo,Ie,function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName),a=i.count();a.onsuccess=function(){e(a.result)},a.onerror=function(){t(a.error)}}catch(e){t(e)}})}).catch(t)});return i(t,e),t}function k(e,n){var t=this,r=new be(function(n,r){if(e<0)return void n(null);t.ready().then(function(){E(t._dbInfo,Ie,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=!1,c=a.openKeyCursor();c.onsuccess=function(){var t=c.result;if(!t)return void n(null);0===e?n(t.key):u?n(t.key):(u=!0,t.advance(e))},c.onerror=function(){r(c.error)}}catch(e){r(e)}})}).catch(r)});return i(r,n),r}function C(e){var n=this,t=new be(function(e,t){n.ready().then(function(){E(n._dbInfo,Ie,function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName),a=i.openKeyCursor(),u=[];a.onsuccess=function(){var n=a.result;if(!n)return void e(u);u.push(n.key),n.continue()},a.onerror=function(){t(a.error)}}catch(e){t(e)}})}).catch(t)});return i(t,e),t}function T(e,n){n=c.apply(this,arguments);var t=this.config();e="function"!=typeof e&&e||{},e.name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var r,o=this;if(e.name){var a=e.name===t.name&&o._dbInfo.db,u=a?be.resolve(o._dbInfo.db):p(e).then(function(n){var t=_e[e.name],r=t.forages;t.db=n;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=n;return n});r=e.storeName?u.then(function(n){if(n.objectStoreNames.contains(e.storeName)){var t=n.version+1;d(e);var r=_e[e.name],o=r.forages;n.close();for(var i=0;i<o.length;i++){var a=o[i];a._dbInfo.db=null,a._dbInfo.version=t}return new be(function(n,r){var o=pe.open(e.name,t);o.onerror=function(e){o.result.close(),r(e)},o.onupgradeneeded=function(){o.result.deleteObjectStore(e.storeName)},o.onsuccess=function(){var e=o.result;e.close(),n(e)}}).then(function(e){r.db=e;for(var n=0;n<o.length;n++){var t=o[n];t._dbInfo.db=e,v(t._dbInfo)}}).catch(function(n){throw(h(e,n)||be.resolve()).catch(function(){}),n})}}):u.then(function(n){d(e);var t=_e[e.name],r=t.forages;n.close();for(var o=0;o<r.length;o++){r[o]._dbInfo.db=null}return new be(function(n,t){var r=pe.deleteDatabase(e.name);r.onerror=r.onblocked=function(e){var n=r.result;n&&n.close(),t(e)},r.onsuccess=function(){var e=r.result;e&&e.close(),n(e)}}).then(function(e){t.db=e;for(var n=0;n<r.length;n++)v(r[n]._dbInfo)}).catch(function(n){throw(h(e,n)||be.resolve()).catch(function(){}),n})})}else r=be.reject("Invalid arguments");return i(r,n),r}function F(e){var n,t,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(n=0;n<u;n+=4)t=Ne.indexOf(e[n]),r=Ne.indexOf(e[n+1]),o=Ne.indexOf(e[n+2]),i=Ne.indexOf(e[n+3]),s[c++]=t<<2|r>>4,s[c++]=(15&r)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function L(e){var n,t=new Uint8Array(e),r="";for(n=0;n<t.length;n+=3)r+=Ne[t[n]>>2],r+=Ne[(3&t[n])<<4|t[n+1]>>4],r+=Ne[(15&t[n+1])<<2|t[n+2]>>6],r+=Ne[63&t[n+2]];return t.length%3==2?r=r.substring(0,r.length-1)+"=":t.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}function M(e,n){var t="";if(e&&(t=Ue.call(e)),e&&("[object ArrayBuffer]"===t||e.buffer&&"[object ArrayBuffer]"===Ue.call(e.buffer))){var r,o=Ae;e instanceof ArrayBuffer?(r=e,o+=De):(r=e.buffer,"[object Int8Array]"===t?o+=Be:"[object Uint8Array]"===t?o+=ke:"[object Uint8ClampedArray]"===t?o+=Ce:"[object Int16Array]"===t?o+=Te:"[object Uint16Array]"===t?o+=Le:"[object Int32Array]"===t?o+=Fe:"[object Uint32Array]"===t?o+=Me:"[object Float32Array]"===t?o+=ze:"[object Float64Array]"===t?o+=Pe:n(new Error("Failed to get type for BinaryArray"))),n(o+L(r))}else if("[object Blob]"===t){var i=new FileReader;i.onload=function(){var t=je+e.type+"~"+L(this.result);n(Ae+xe+t)},i.readAsArrayBuffer(e)}else try{n(JSON.stringify(e))}catch(t){console.error("Couldn't convert value into a JSON string: ",e),n(null,t)}}function z(e){if(e.substring(0,Oe)!==Ae)return JSON.parse(e);var n,t=e.substring(qe),r=e.substring(Oe,qe);if(r===xe&&Re.test(t)){var i=t.match(Re);n=i[1],t=t.substring(i[0].length)}var a=F(t);switch(r){case De:return a;case xe:return o([a],{type:n});case Be:return new Int8Array(a);case ke:return new Uint8Array(a);case Ce:return new Uint8ClampedArray(a);case Te:return new Int16Array(a);case Le:return new Uint16Array(a);case Fe:return new Int32Array(a);case Me:return new Uint32Array(a);case ze:return new Float32Array(a);case Pe:return new Float64Array(a);default:throw new Error("Unkown type: "+r)}}function P(e,n,t,r){e.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],t,r)}function q(e){var n=this,t={db:null};if(e)for(var r in e)t[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new be(function(e,r){try{t.db=openDatabase(t.name,String(t.version),t.description,t.size)}catch(e){return r(e)}t.db.transaction(function(o){P(o,t,function(){n._dbInfo=t,e()},function(e,n){r(n)})},r)});return t.serializer=We,o}function U(e,n,t,r,o,i){e.executeSql(t,r,o,function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[n.storeName],function(e,u){u.rows.length?i(e,a):P(e,n,function(){e.executeSql(t,r,o,i)},i)},i):i(e,a)},i)}function W(e,n){var t=this;e=u(e);var r=new be(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){U(t,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],function(e,t){var r=t.rows.length?t.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),n(r)},function(e,n){r(n)})})}).catch(r)});return i(r,n),r}function K(e,n){var t=this,r=new be(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){U(t,o,"SELECT * FROM "+o.storeName,[],function(t,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1)))return void n(f)}n()},function(e,n){r(n)})})}).catch(r)});return i(r,n),r}function H(e,n,t,r){var o=this;e=u(e);var a=new be(function(i,a){o.ready().then(function(){void 0===n&&(n=null);var u=n,c=o._dbInfo;c.serializer.serialize(n,function(n,f){f?a(f):c.db.transaction(function(t){U(t,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,n],function(){i(u)},function(e,n){a(n)})},function(n){if(n.code===n.QUOTA_ERR){if(r>0)return void i(H.apply(o,[e,u,t,r-1]));a(n)}})})}).catch(a)});return i(a,t),a}function Q(e,n,t){return H.apply(this,[e,n,t,1])}function X(e,n){var t=this;e=u(e);var r=new be(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){U(t,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],function(){n()},function(e,n){r(n)})})}).catch(r)});return i(r,n),r}function G(e){var n=this,t=new be(function(e,t){n.ready().then(function(){var r=n._dbInfo;r.db.transaction(function(n){U(n,r,"DELETE FROM "+r.storeName,[],function(){e()},function(e,n){t(n)})})}).catch(t)});return i(t,e),t}function J(e){var n=this,t=new be(function(e,t){n.ready().then(function(){var r=n._dbInfo;r.db.transaction(function(n){U(n,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],function(n,t){var r=t.rows.item(0).c;e(r)},function(e,n){t(n)})})}).catch(t)});return i(t,e),t}function V(e,n){var t=this,r=new be(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){U(t,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,t){var r=t.rows.length?t.rows.item(0).key:null;n(r)},function(e,n){r(n)})})}).catch(r)});return i(r,n),r}function Y(e){var n=this,t=new be(function(e,t){n.ready().then(function(){var r=n._dbInfo;r.db.transaction(function(n){U(n,r,"SELECT key FROM "+r.storeName,[],function(n,t){for(var r=[],o=0;o<t.rows.length;o++)r.push(t.rows.item(o).key);e(r)},function(e,n){t(n)})})}).catch(t)});return i(t,e),t}function Z(e){return new be(function(n,t){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(t,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);n({db:e,storeNames:o})},function(e,n){t(n)})},function(e){t(e)})})}function $(e,n){n=c.apply(this,arguments);var t=this.config();e="function"!=typeof e&&e||{},e.name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var r,o=this;return r=e.name?new be(function(n){var r;r=e.name===t.name?o._dbInfo.db:openDatabase(e.name,"","",0),n(e.storeName?{db:r,storeNames:[e.storeName]}:Z(r))}).then(function(e){return new be(function(n,t){e.db.transaction(function(r){for(var o=[],i=0,a=e.storeNames.length;i<a;i++)o.push(function(e){return new be(function(n,t){r.executeSql("DROP TABLE IF EXISTS "+e,[],function(){n()},function(e,n){t(n)})})}(e.storeNames[i]));be.all(o).then(function(){n()}).catch(function(e){t(e)})},function(e){t(e)})})}):be.reject("Invalid arguments"),i(r,n),r}function ee(e,n){var t=e.name+"/";return e.storeName!==n.storeName&&(t+=e.storeName+"/"),t}function ne(){try{return localStorage.setItem("_localforage_support_test",!0),localStorage.removeItem("_localforage_support_test"),!1}catch(e){return!0}}function te(){return!ne()||localStorage.length>0}function re(e){var n=this,t={};if(e)for(var r in e)t[r]=e[r];return t.keyPrefix=ee(e,n._defaultConfig),te()?(n._dbInfo=t,t.serializer=We,be.resolve()):be.reject()}function oe(e){var n=this,t=n.ready().then(function(){for(var e=n._dbInfo.keyPrefix,t=localStorage.length-1;t>=0;t--){var r=localStorage.key(t);0===r.indexOf(e)&&localStorage.removeItem(r)}});return i(t,e),t}function ie(e,n){var t=this;e=u(e);var r=t.ready().then(function(){var n=t._dbInfo,r=localStorage.getItem(n.keyPrefix+e);return r&&(r=n.serializer.deserialize(r)),r});return i(r,n),r}function ae(e,n){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,r=n.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var f=localStorage.getItem(c);if(f&&(f=n.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}});return i(r,n),r}function ue(e,n){var t=this,r=t.ready().then(function(){var n,r=t._dbInfo;try{n=localStorage.key(e)}catch(e){n=null}return n&&(n=n.substring(r.keyPrefix.length)),n});return i(r,n),r}function ce(e){var n=this,t=n.ready().then(function(){for(var e=n._dbInfo,t=localStorage.length,r=[],o=0;o<t;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r});return i(t,e),t}function fe(e){var n=this,t=n.keys().then(function(e){return e.length});return i(t,e),t}function se(e,n){var t=this;e=u(e);var r=t.ready().then(function(){var n=t._dbInfo;localStorage.removeItem(n.keyPrefix+e)});return i(r,n),r}function le(e,n,t){var r=this;e=u(e);var o=r.ready().then(function(){void 0===n&&(n=null);var t=n;return new be(function(o,i){var a=r._dbInfo;a.serializer.serialize(n,function(n,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,n),o(t)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}})})});return i(o,t),o}function de(e,n){if(n=c.apply(this,arguments),e="function"!=typeof e&&e||{},!e.name){var t=this.config();e.name=e.name||t.name,e.storeName=e.storeName||t.storeName}var r,o=this;return r=e.name?new be(function(n){n(e.storeName?ee(e,o._defaultConfig):e.name+"/")}).then(function(e){for(var n=localStorage.length-1;n>=0;n--){var t=localStorage.key(n);0===t.indexOf(e)&&localStorage.removeItem(t)}}):be.reject("Invalid arguments"),i(r,n),r}function ve(e,n){e[n]=function(){var t=arguments;return e.ready().then(function(){return e[n].apply(e,t)})}}function he(){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var t in n)n.hasOwnProperty(t)&&(Ge(n[t])?arguments[0][t]=n[t].slice():arguments[0][t]=n[t])}return arguments[0]}var ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();"undefined"==typeof Promise&&e(3);var be=Promise,me="local-forage-detect-blob-support",ge=void 0,_e={},we=Object.prototype.toString,Ie="readonly",Se="readwrite",Ee={_driver:"asyncStorage",_initStorage:j,_support:function(){try{if(!pe||!pe.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),n="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||n)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:A,getItem:R,setItem:O,removeItem:D,clear:x,length:B,key:k,keys:C,dropInstance:T},Ne="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",je="~~local_forage_type~",Re=/^~~local_forage_type~([^~]+)~/,Ae="__lfsc__:",Oe=Ae.length,De="arbf",xe="blob",Be="si08",ke="ui08",Ce="uic8",Te="si16",Fe="si32",Le="ur16",Me="ui32",ze="fl32",Pe="fl64",qe=Oe+De.length,Ue=Object.prototype.toString,We={serialize:M,deserialize:z,stringToBuffer:F,bufferToString:L},Ke={_driver:"webSQLStorage",_initStorage:q,_support:function(){return"function"==typeof openDatabase}(),iterate:K,getItem:W,setItem:Q,removeItem:X,clear:G,length:J,key:V,keys:Y,dropInstance:$},He={_driver:"localStorageWrapper",_initStorage:re,_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:ae,getItem:ie,setItem:le,removeItem:se,clear:oe,length:fe,key:ue,keys:ce,dropInstance:de},Qe=function(e,n){return e===n||"number"==typeof e&&"number"==typeof n&&isNaN(e)&&isNaN(n)},Xe=function(e,n){for(var t=e.length,r=0;r<t;){if(Qe(e[r],n))return!0;r++}return!1},Ge=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Je={},Ve={},Ye={INDEXEDDB:Ee,WEBSQL:Ke,LOCALSTORAGE:He},Ze=[Ye.INDEXEDDB._driver,Ye.WEBSQL._driver,Ye.LOCALSTORAGE._driver],$e=["dropInstance"],en=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat($e),nn={description:"",driver:Ze.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},tn=function(){function e(n){r(this,e);for(var t in Ye)if(Ye.hasOwnProperty(t)){var o=Ye[t],i=o._driver;this[t]=i,Je[i]||this.defineDriver(o)}this._defaultConfig=he({},nn),this._config=he({},this._defaultConfig,n),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":ye(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var n in e){if("storeName"===n&&(e[n]=e[n].replace(/\W/g,"_")),"version"===n&&"number"!=typeof e[n])return new Error("Database version must be a number.");this._config[n]=e[n]}return!("driver"in e&&e.driver)||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,n,t){var r=new be(function(n,t){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void t(o);for(var a=en.concat("_initStorage"),u=0,c=a.length;u<c;u++){var f=a[u];if((!Xe($e,f)||e[f])&&"function"!=typeof e[f])return void t(o)}!function(){for(var n=0,t=$e.length;n<t;n++){var r=$e[n];e[r]||(e[r]=function(e){return function(){var n=new Error("Method "+e+" is not implemented by the current driver"),t=be.reject(n);return i(t,arguments[arguments.length-1]),t}}(r))}}();var s=function(t){Je[r]&&console.info("Redefining LocalForage driver: "+r),Je[r]=e,Ve[r]=t,n()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(s,t):s(!!e._support):s(!0)}catch(e){t(e)}});return a(r,n,t),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,n,t){var r=Je[e]?be.resolve(Je[e]):be.reject(new Error("Driver not found."));return a(r,n,t),r},e.prototype.getSerializer=function(e){var n=be.resolve(We);return a(n,e),n},e.prototype.ready=function(e){var n=this,t=n._driverSet.then(function(){return null===n._ready&&(n._ready=n._initDriver()),n._ready});return a(t,e,e),t},e.prototype.setDriver=function(e,n,t){function r(){u._config.driver=u.driver()}function o(e){return u._extend(e),r(),u._ready=u._initStorage(u._config),u._ready}function i(e){return function(){function n(){for(;t<e.length;){var i=e[t];return t++,u._dbInfo=null,u._ready=null,u.getDriver(i).then(o).catch(n)}r();var a=new Error("No available storage method found.");return u._driverSet=be.reject(a),u._driverSet}var t=0;return n()}}var u=this;Ge(e)||(e=[e]);var c=this._getSupportedDrivers(e),f=null!==this._driverSet?this._driverSet.catch(function(){return be.resolve()}):be.resolve();return this._driverSet=f.then(function(){var e=c[0];return u._dbInfo=null,u._ready=null,u.getDriver(e).then(function(e){u._driver=e._driver,r(),u._wrapLibraryMethodsWithReady(),u._initDriver=i(c)})}).catch(function(){r();var e=new Error("No available storage method found.");return u._driverSet=be.reject(e),u._driverSet}),a(this._driverSet,n,t),this._driverSet},e.prototype.supports=function(e){return!!Ve[e]},e.prototype._extend=function(e){he(this,e)},e.prototype._getSupportedDrivers=function(e){for(var n=[],t=0,r=e.length;t<r;t++){var o=e[t];this.supports(o)&&n.push(o)}return n},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,n=en.length;e<n;e++)ve(this,en[e])},e.prototype.createInstance=function(n){return new e(n)},e}(),rn=new tn;n.exports=rn},{3:3}]},{},[4])(4)});
//# sourceMappingURL=localforage.js.map