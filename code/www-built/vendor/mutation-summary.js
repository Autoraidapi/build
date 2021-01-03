// Copyright 2011 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


function enteredOrExited(e){return e===Movement.ENTERED||e===Movement.EXITED}function escapeQuotes(e){return'"'+e.replace(/"/,'\\"')+'"'}function validateAttribute(e){if("string"!=typeof e)throw Error("Invalid request opion. attribute must be a non-zero length string.");if(!(e=e.trim()))throw Error("Invalid request opion. attribute must be a non-zero length string.");if(!e.match(attributeFilterPattern))throw Error("Invalid request option. invalid attribute name: "+e);return e}function validateElementAttributes(e){if(!e.trim().length)throw Error("Invalid request option: elementAttributes must contain at least one attribute.");for(var t={},r={},a=e.split(/\s+/),i=0;i<a.length;i++){var n=a[i];if(n){var n=validateAttribute(n),o=n.toLowerCase();if(t[o])throw Error("Invalid request option: observing multiple case variations of the same attribute is not supported.");r[n]=!0,t[o]=!0}}return Object.keys(r)}function elementFilterAttributes(e){var t={};return e.forEach(function(e){e.qualifiers.forEach(function(e){t[e.attrName]=!0})}),Object.keys(t)}var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);r.prototype=t.prototype,e.prototype=new r},MutationObserverCtor;if(void 0===(MutationObserverCtor="undefined"!=typeof WebKitMutationObserver?WebKitMutationObserver:MutationObserver))throw console.error("DOM Mutation Observers are required."),console.error("https://developer.mozilla.org/en-US/docs/DOM/MutationObserver"),Error("DOM Mutation Observers are required");var NodeMap=function(){function e(){this.nodes=[],this.values=[]}return e.prototype.isIndex=function(e){return+e==e>>>0},e.prototype.nodeId=function(t){var r=t[e.ID_PROP];return r||(r=t[e.ID_PROP]=e.nextId_++),r},e.prototype.set=function(e,t){var r=this.nodeId(e);this.nodes[r]=e,this.values[r]=t},e.prototype.get=function(e){var t=this.nodeId(e);return this.values[t]},e.prototype.has=function(e){return this.nodeId(e)in this.nodes},e.prototype.delete=function(e){var t=this.nodeId(e);delete this.nodes[t],this.values[t]=void 0},e.prototype.keys=function(){var e=[];for(var t in this.nodes)this.isIndex(t)&&e.push(this.nodes[t]);return e},e.ID_PROP="__mutation_summary_node_map_id__",e.nextId_=1,e}(),Movement;!function(e){e[e.STAYED_OUT=0]="STAYED_OUT",e[e.ENTERED=1]="ENTERED",e[e.STAYED_IN=2]="STAYED_IN",e[e.REPARENTED=3]="REPARENTED",e[e.REORDERED=4]="REORDERED",e[e.EXITED=5]="EXITED"}(Movement||(Movement={}));var NodeChange=function(){function e(e,t,r,a,i,n,o,s){void 0===t&&(t=!1),void 0===r&&(r=!1),void 0===a&&(a=!1),void 0===i&&(i=null),void 0===n&&(n=!1),void 0===o&&(o=null),void 0===s&&(s=null),this.node=e,this.childList=t,this.attributes=r,this.characterData=a,this.oldParentNode=i,this.added=n,this.attributeOldValues=o,this.characterDataOldValue=s,this.isCaseInsensitive=this.node.nodeType===Node.ELEMENT_NODE&&this.node instanceof HTMLElement&&this.node.ownerDocument instanceof HTMLDocument}return e.prototype.getAttributeOldValue=function(e){if(this.attributeOldValues)return this.isCaseInsensitive&&(e=e.toLowerCase()),this.attributeOldValues[e]},e.prototype.getAttributeNamesMutated=function(){var e=[];if(!this.attributeOldValues)return e;for(var t in this.attributeOldValues)e.push(t);return e},e.prototype.attributeMutated=function(e,t){this.attributes=!0,this.attributeOldValues=this.attributeOldValues||{},e in this.attributeOldValues||(this.attributeOldValues[e]=t)},e.prototype.characterDataMutated=function(e){this.characterData||(this.characterData=!0,this.characterDataOldValue=e)},e.prototype.removedFromParent=function(e){this.childList=!0,this.added||this.oldParentNode?this.added=!1:this.oldParentNode=e},e.prototype.insertedIntoParent=function(){this.childList=!0,this.added=!0},e.prototype.getOldParent=function(){if(this.childList){if(this.oldParentNode)return this.oldParentNode;if(this.added)return null}return this.node.parentNode},e}(),ChildListChange=function(){function e(){this.added=new NodeMap,this.removed=new NodeMap,this.maybeMoved=new NodeMap,this.oldPrevious=new NodeMap,this.moved=void 0}return e}(),TreeChanges=function(e){function t(t,r){e.call(this),this.rootNode=t,this.reachableCache=void 0,this.wasReachableCache=void 0,this.anyParentsChanged=!1,this.anyAttributesChanged=!1,this.anyCharacterDataChanged=!1;for(var a=0;a<r.length;a++){var i=r[a];switch(i.type){case"childList":this.anyParentsChanged=!0;for(var n=0;n<i.removedNodes.length;n++){var o=i.removedNodes[n];this.getChange(o).removedFromParent(i.target)}for(var n=0;n<i.addedNodes.length;n++){var o=i.addedNodes[n];this.getChange(o).insertedIntoParent()}break;case"attributes":this.anyAttributesChanged=!0;var s=this.getChange(i.target);s.attributeMutated(i.attributeName,i.oldValue);break;case"characterData":this.anyCharacterDataChanged=!0;var s=this.getChange(i.target);s.characterDataMutated(i.oldValue)}}}return __extends(t,e),t.prototype.getChange=function(e){var t=this.get(e);return t||(t=new NodeChange(e),this.set(e,t)),t},t.prototype.getOldParent=function(e){var t=this.get(e);return t?t.getOldParent():e.parentNode},t.prototype.getIsReachable=function(e){if(e===this.rootNode)return!0;if(!e)return!1;this.reachableCache=this.reachableCache||new NodeMap;var t=this.reachableCache.get(e);return void 0===t&&(t=this.getIsReachable(e.parentNode),this.reachableCache.set(e,t)),t},t.prototype.getWasReachable=function(e){if(e===this.rootNode)return!0;if(!e)return!1;this.wasReachableCache=this.wasReachableCache||new NodeMap;var t=this.wasReachableCache.get(e);return void 0===t&&(t=this.getWasReachable(this.getOldParent(e)),this.wasReachableCache.set(e,t)),t},t.prototype.reachabilityChange=function(e){return this.getIsReachable(e)?this.getWasReachable(e)?Movement.STAYED_IN:Movement.ENTERED:this.getWasReachable(e)?Movement.EXITED:Movement.STAYED_OUT},t}(NodeMap),MutationProjection=function(){function e(e,t,r,a,i){this.rootNode=e,this.mutations=t,this.selectors=r,this.calcReordered=a,this.calcOldPreviousSibling=i,this.treeChanges=new TreeChanges(e,t),this.entered=[],this.exited=[],this.stayedIn=new NodeMap,this.visited=new NodeMap,this.childListChangeMap=void 0,this.characterDataOnly=void 0,this.matchCache=void 0,this.processMutations()}return e.prototype.processMutations=function(){if(this.treeChanges.anyParentsChanged||this.treeChanges.anyAttributesChanged)for(var e=this.treeChanges.keys(),t=0;t<e.length;t++)this.visitNode(e[t],void 0)},e.prototype.visitNode=function(e,t){if(!this.visited.has(e)){this.visited.set(e,!0);var r=this.treeChanges.get(e),a=t;if((r&&r.childList||void 0==a)&&(a=this.treeChanges.reachabilityChange(e)),a!==Movement.STAYED_OUT){if(this.matchabilityChange(e),a===Movement.ENTERED)this.entered.push(e);else if(a===Movement.EXITED)this.exited.push(e),this.ensureHasOldPreviousSiblingIfNeeded(e);else if(a===Movement.STAYED_IN){var i=Movement.STAYED_IN;r&&r.childList&&(r.oldParentNode!==e.parentNode?(i=Movement.REPARENTED,this.ensureHasOldPreviousSiblingIfNeeded(e)):this.calcReordered&&this.wasReordered(e)&&(i=Movement.REORDERED)),this.stayedIn.set(e,i)}if(a!==Movement.STAYED_IN)for(var n=e.firstChild;n;n=n.nextSibling)this.visitNode(n,a)}}},e.prototype.ensureHasOldPreviousSiblingIfNeeded=function(e){if(this.calcOldPreviousSibling){this.processChildlistChanges();var t=e.parentNode,r=this.treeChanges.get(e);r&&r.oldParentNode&&(t=r.oldParentNode);var a=this.childListChangeMap.get(t);a||(a=new ChildListChange,this.childListChangeMap.set(t,a)),a.oldPrevious.has(e)||a.oldPrevious.set(e,e.previousSibling)}},e.prototype.getChanged=function(e,t,r){this.selectors=t,this.characterDataOnly=r;for(var a=0;a<this.entered.length;a++){var i=this.entered[a],n=this.matchabilityChange(i);n!==Movement.ENTERED&&n!==Movement.STAYED_IN||e.added.push(i)}for(var o=this.stayedIn.keys(),a=0;a<o.length;a++){var i=o[a],n=this.matchabilityChange(i);if(n===Movement.ENTERED)e.added.push(i);else if(n===Movement.EXITED)e.removed.push(i);else if(n===Movement.STAYED_IN&&(e.reparented||e.reordered)){var s=this.stayedIn.get(i);e.reparented&&s===Movement.REPARENTED?e.reparented.push(i):e.reordered&&s===Movement.REORDERED&&e.reordered.push(i)}}for(var a=0;a<this.exited.length;a++){var i=this.exited[a],n=this.matchabilityChange(i);n!==Movement.EXITED&&n!==Movement.STAYED_IN||e.removed.push(i)}},e.prototype.getOldParentNode=function(e){var t=this.treeChanges.get(e);if(t&&t.childList)return t.oldParentNode?t.oldParentNode:null;var r=this.treeChanges.reachabilityChange(e);if(r===Movement.STAYED_OUT||r===Movement.ENTERED)throw Error("getOldParentNode requested on invalid node.");return e.parentNode},e.prototype.getOldPreviousSibling=function(e){var t=e.parentNode,r=this.treeChanges.get(e);r&&r.oldParentNode&&(t=r.oldParentNode);var a=this.childListChangeMap.get(t);if(!a)throw Error("getOldPreviousSibling requested on invalid node.");return a.oldPrevious.get(e)},e.prototype.getOldAttribute=function(e,t){var r=this.treeChanges.get(e);if(!r||!r.attributes)throw Error("getOldAttribute requested on invalid node.");var a=r.getAttributeOldValue(t);if(void 0===a)throw Error("getOldAttribute requested for unchanged attribute name.");return a},e.prototype.attributeChangedNodes=function(e){if(!this.treeChanges.anyAttributesChanged)return{};var t,r;if(e){t={},r={};for(var a=0;a<e.length;a++){var i=e[a];t[i]=!0,r[i.toLowerCase()]=i}}for(var n={},o=this.treeChanges.keys(),a=0;a<o.length;a++){var s=o[a],h=this.treeChanges.get(s);if(h.attributes&&(Movement.STAYED_IN===this.treeChanges.reachabilityChange(s)&&Movement.STAYED_IN===this.matchabilityChange(s)))for(var d=s,u=h.getAttributeNamesMutated(),c=0;c<u.length;c++){var i=u[c];if(!t||t[i]||h.isCaseInsensitive&&r[i]){var l=h.getAttributeOldValue(i);l!==d.getAttribute(i)&&(r&&h.isCaseInsensitive&&(i=r[i]),n[i]=n[i]||[],n[i].push(d))}}}return n},e.prototype.getOldCharacterData=function(e){var t=this.treeChanges.get(e);if(!t||!t.characterData)throw Error("getOldCharacterData requested on invalid node.");return t.characterDataOldValue},e.prototype.getCharacterDataChanged=function(){if(!this.treeChanges.anyCharacterDataChanged)return[];for(var e=this.treeChanges.keys(),t=[],r=0;r<e.length;r++){var a=e[r];if(Movement.STAYED_IN===this.treeChanges.reachabilityChange(a)){var i=this.treeChanges.get(a);i.characterData&&a.textContent!=i.characterDataOldValue&&t.push(a)}}return t},e.prototype.computeMatchabilityChange=function(e,t){this.matchCache||(this.matchCache=[]),this.matchCache[e.uid]||(this.matchCache[e.uid]=new NodeMap);var r=this.matchCache[e.uid],a=r.get(t);return void 0===a&&(a=e.matchabilityChange(t,this.treeChanges.get(t)),r.set(t,a)),a},e.prototype.matchabilityChange=function(e){var t=this;if(this.characterDataOnly)switch(e.nodeType){case Node.COMMENT_NODE:case Node.TEXT_NODE:return Movement.STAYED_IN;default:return Movement.STAYED_OUT}if(!this.selectors)return Movement.STAYED_IN;if(e.nodeType!==Node.ELEMENT_NODE)return Movement.STAYED_OUT;for(var r=e,a=this.selectors.map(function(e){return t.computeMatchabilityChange(e,r)}),i=Movement.STAYED_OUT,n=0;i!==Movement.STAYED_IN&&n<a.length;){switch(a[n]){case Movement.STAYED_IN:i=Movement.STAYED_IN;break;case Movement.ENTERED:i=i===Movement.EXITED?Movement.STAYED_IN:Movement.ENTERED;break;case Movement.EXITED:i=i===Movement.ENTERED?Movement.STAYED_IN:Movement.EXITED}n++}return i},e.prototype.getChildlistChange=function(e){var t=this.childListChangeMap.get(e);return t||(t=new ChildListChange,this.childListChangeMap.set(e,t)),t},e.prototype.processChildlistChanges=function(){function e(e,t){!e||a.oldPrevious.has(e)||a.added.has(e)||a.maybeMoved.has(e)||t&&(a.added.has(t)||a.maybeMoved.has(t))||a.oldPrevious.set(e,t)}if(!this.childListChangeMap){this.childListChangeMap=new NodeMap;for(var t=0;t<this.mutations.length;t++){var r=this.mutations[t];if("childList"==r.type&&(this.treeChanges.reachabilityChange(r.target)===Movement.STAYED_IN||this.calcOldPreviousSibling)){for(var a=this.getChildlistChange(r.target),i=r.previousSibling,n=0;n<r.removedNodes.length;n++){var o=r.removedNodes[n];e(o,i),a.added.has(o)?a.added.delete(o):(a.removed.set(o,!0),a.maybeMoved.delete(o)),i=o}e(r.nextSibling,i);for(var n=0;n<r.addedNodes.length;n++){var o=r.addedNodes[n];a.removed.has(o)?(a.removed.delete(o),a.maybeMoved.set(o,!0)):a.added.set(o,!0)}}}}},e.prototype.wasReordered=function(e){function t(e){if(!e)return!1;if(!o.maybeMoved.has(e))return!1;var t=o.moved.get(e);return void 0!==t?t:(s.has(e)?t=!0:(s.set(e,!0),t=a(e)!==r(e)),s.has(e)?(s.delete(e),o.moved.set(e,t)):t=o.moved.get(e),t)}function r(e){var a=h.get(e);if(void 0!==a)return a;for(a=o.oldPrevious.get(e);a&&(o.removed.has(a)||t(a));)a=r(a);return void 0===a&&(a=e.previousSibling),h.set(e,a),a}function a(e){if(d.has(e))return d.get(e);for(var r=e.previousSibling;r&&(o.added.has(r)||t(r));)r=r.previousSibling;return d.set(e,r),r}if(!this.treeChanges.anyParentsChanged)return!1;this.processChildlistChanges();var i=e.parentNode,n=this.treeChanges.get(e);n&&n.oldParentNode&&(i=n.oldParentNode);var o=this.childListChangeMap.get(i);if(!o)return!1;if(o.moved)return o.moved.get(e);o.moved=new NodeMap;var s=new NodeMap,h=new NodeMap,d=new NodeMap;return o.maybeMoved.keys().forEach(t),o.moved.get(e)},e}(),Summary=function(){function e(e,t){var r=this;if(this.projection=e,this.added=[],this.removed=[],this.reparented=t.all||t.element||t.characterData?[]:void 0,this.reordered=t.all?[]:void 0,e.getChanged(this,t.elementFilter,t.characterData),t.all||t.attribute||t.attributeList){var a=t.attribute?[t.attribute]:t.attributeList,i=e.attributeChangedNodes(a);t.attribute?this.valueChanged=i[t.attribute]||[]:(this.attributeChanged=i,t.attributeList&&t.attributeList.forEach(function(e){r.attributeChanged.hasOwnProperty(e)||(r.attributeChanged[e]=[])}))}if(t.all||t.characterData){var n=e.getCharacterDataChanged();t.characterData?this.valueChanged=n:this.characterDataChanged=n}this.reordered&&(this.getOldPreviousSibling=e.getOldPreviousSibling.bind(e))}return e.prototype.getOldParentNode=function(e){return this.projection.getOldParentNode(e)},e.prototype.getOldAttribute=function(e,t){return this.projection.getOldAttribute(e,t)},e.prototype.getOldCharacterData=function(e){return this.projection.getOldCharacterData(e)},e.prototype.getOldPreviousSibling=function(e){return this.projection.getOldPreviousSibling(e)},e}(),validNameInitialChar=/[a-zA-Z_]+/,validNameNonInitialChar=/[a-zA-Z0-9_\-]+/,Qualifier=function(){function e(){}return e.prototype.matches=function(e){if(null===e)return!1;if(void 0===this.attrValue)return!0;if(!this.contains)return this.attrValue==e;for(var t=e.split(" "),r=0;r<t.length;r++)if(this.attrValue===t[r])return!0;return!1},e.prototype.toString=function(){return"class"===this.attrName&&this.contains?"."+this.attrValue:"id"!==this.attrName||this.contains?this.contains?"["+this.attrName+"~="+escapeQuotes(this.attrValue)+"]":"attrValue"in this?"["+this.attrName+"="+escapeQuotes(this.attrValue)+"]":"["+this.attrName+"]":"#"+this.attrValue},e}(),Selector=function(){function e(){this.uid=e.nextUid++,this.qualifiers=[]}return Object.defineProperty(e.prototype,"caseInsensitiveTagName",{get:function(){return this.tagName.toUpperCase()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectorString",{get:function(){return this.tagName+this.qualifiers.join("")},enumerable:!0,configurable:!0}),e.prototype.isMatching=function(t){return t[e.matchesSelector](this.selectorString)},e.prototype.wasMatching=function(e,t,r){if(!t||!t.attributes)return r;var a=t.isCaseInsensitive?this.caseInsensitiveTagName:this.tagName;if("*"!==a&&a!==e.tagName)return!1;for(var i=[],n=!1,o=0;o<this.qualifiers.length;o++){var s=this.qualifiers[o],h=t.getAttributeOldValue(s.attrName);i.push(h),n=n||void 0!==h}if(!n)return r;for(var o=0;o<this.qualifiers.length;o++){var s=this.qualifiers[o],h=i[o];if(void 0===h&&(h=e.getAttribute(s.attrName)),!s.matches(h))return!1}return!0},e.prototype.matchabilityChange=function(e,t){var r=this.isMatching(e);return r?this.wasMatching(e,t,r)?Movement.STAYED_IN:Movement.ENTERED:this.wasMatching(e,t,r)?Movement.EXITED:Movement.STAYED_OUT},e.parseSelectors=function(t){function r(){i&&(n&&(i.qualifiers.push(n),n=void 0),s.push(i)),i=new e}function a(){n&&i.qualifiers.push(n),n=new Qualifier}for(var i,n,o,s=[],h=/\s/,d="Invalid or unsupported selector syntax.",u=1,c=0;c<t.length;){var l=t[c++];switch(u){case 1:if(l.match(validNameInitialChar)){r(),i.tagName=l,u=2;break}if("*"==l){r(),i.tagName="*",u=3;break}if("."==l){r(),a(),i.tagName="*",n.attrName="class",n.contains=!0,u=4;break}if("#"==l){r(),a(),i.tagName="*",n.attrName="id",u=4;break}if("["==l){r(),a(),i.tagName="*",n.attrName="",u=6;break}if(l.match(h))break;throw Error(d);case 2:if(l.match(validNameNonInitialChar)){i.tagName+=l;break}if("."==l){a(),n.attrName="class",n.contains=!0,u=4;break}if("#"==l){a(),n.attrName="id",u=4;break}if("["==l){a(),n.attrName="",u=6;break}if(l.match(h)){u=14;break}if(","==l){u=1;break}throw Error(d);case 3:if("."==l){a(),n.attrName="class",n.contains=!0,u=4;break}if("#"==l){a(),n.attrName="id",u=4;break}if("["==l){a(),n.attrName="",u=6;break}if(l.match(h)){u=14;break}if(","==l){u=1;break}throw Error(d);case 4:if(l.match(validNameInitialChar)){n.attrValue=l,u=5;break}throw Error(d);case 5:if(l.match(validNameNonInitialChar)){n.attrValue+=l;break}if("."==l){a(),n.attrName="class",n.contains=!0,u=4;break}if("#"==l){a(),n.attrName="id",u=4;break}if("["==l){a(),u=6;break}if(l.match(h)){u=14;break}if(","==l){u=1;break}throw Error(d);case 6:if(l.match(validNameInitialChar)){n.attrName=l,u=7;break}if(l.match(h))break;throw Error(d);case 7:if(l.match(validNameNonInitialChar)){n.attrName+=l;break}if(l.match(h)){u=8;break}if("~"==l){n.contains=!0,u=9;break}if("="==l){n.attrValue="",u=11;break}if("]"==l){u=3;break}throw Error(d);case 8:if("~"==l){n.contains=!0,u=9;break}if("="==l){n.attrValue="",u=11;break}if("]"==l){u=3;break}if(l.match(h))break;throw Error(d);case 9:if("="==l){n.attrValue="",u=11;break}throw Error(d);case 10:if("]"==l){u=3;break}if(l.match(h))break;throw Error(d);case 11:if(l.match(h))break;if('"'==l||"'"==l){o=l,u=13;break}n.attrValue+=l,u=12;break;case 12:if(l.match(h)){u=10;break}if("]"==l){u=3;break}if("'"==l||'"'==l)throw Error(d);n.attrValue+=l;break;case 13:if(l==o){u=10;break}n.attrValue+=l;break;case 14:if(l.match(h))break;if(","==l){u=1;break}throw Error(d)}}switch(u){case 1:case 2:case 3:case 5:case 14:r();break;default:throw Error(d)}if(!s.length)throw Error(d);return s},e.nextUid=1,e.matchesSelector=function(){var e=document.createElement("div");return"function"==typeof e.webkitMatchesSelector?"webkitMatchesSelector":"function"==typeof e.mozMatchesSelector?"mozMatchesSelector":"function"==typeof e.msMatchesSelector?"msMatchesSelector":"matchesSelector"}(),e}(),attributeFilterPattern=/^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/,MutationSummary=function(){function e(t){var r=this;this.connected=!1,this.options=e.validateOptions(t),this.observerOptions=e.createObserverOptions(this.options.queries),this.root=this.options.rootNode,this.callback=this.options.callback,this.elementFilter=Array.prototype.concat.apply([],this.options.queries.map(function(e){return e.elementFilter?e.elementFilter:[]})),this.elementFilter.length||(this.elementFilter=void 0),this.calcReordered=this.options.queries.some(function(e){return e.all}),this.queryValidators=[],e.createQueryValidator&&(this.queryValidators=this.options.queries.map(function(t){return e.createQueryValidator(r.root,t)})),this.observer=new MutationObserverCtor(function(e){r.observerCallback(e)}),this.reconnect()}return e.createObserverOptions=function(e){function t(e){if(!a.attributes||r){if(a.attributes=!0,a.attributeOldValue=!0,!e)return void(r=void 0);r=r||{},e.forEach(function(e){r[e]=!0,r[e.toLowerCase()]=!0})}}var r,a={childList:!0,subtree:!0};return e.forEach(function(e){if(e.characterData)return a.characterData=!0,void(a.characterDataOldValue=!0);if(e.all)return t(),a.characterData=!0,void(a.characterDataOldValue=!0);if(e.attribute)return void t([e.attribute.trim()]);var r=elementFilterAttributes(e.elementFilter).concat(e.attributeList||[]);r.length&&t(r)}),r&&(a.attributeFilter=Object.keys(r)),a},e.validateOptions=function(t){for(var r in t)if(!(r in e.optionKeys))throw Error("Invalid option: "+r);if("function"!=typeof t.callback)throw Error("Invalid options: callback is required and must be a function");if(!t.queries||!t.queries.length)throw Error("Invalid options: queries must contain at least one query request object.");for(var a={callback:t.callback,rootNode:t.rootNode||document,observeOwnChanges:!!t.observeOwnChanges,oldPreviousSibling:!!t.oldPreviousSibling,queries:[]},i=0;i<t.queries.length;i++){var n=t.queries[i];if(n.all){if(Object.keys(n).length>1)throw Error("Invalid request option. all has no options.");a.queries.push({all:!0})}else if("attribute"in n){var o={attribute:validateAttribute(n.attribute)};if(o.elementFilter=Selector.parseSelectors("*["+o.attribute+"]"),Object.keys(n).length>1)throw Error("Invalid request option. attribute has no options.");a.queries.push(o)}else if("element"in n){var s=Object.keys(n).length,o={element:n.element,elementFilter:Selector.parseSelectors(n.element)};if(n.hasOwnProperty("elementAttributes")&&(o.attributeList=validateElementAttributes(n.elementAttributes),s--),s>1)throw Error("Invalid request option. element only allows elementAttributes option.");a.queries.push(o)}else{if(!n.characterData)throw Error("Invalid request option. Unknown query request.");if(Object.keys(n).length>1)throw Error("Invalid request option. characterData has no options.");a.queries.push({characterData:!0})}}return a},e.prototype.createSummaries=function(e){if(!e||!e.length)return[];for(var t=new MutationProjection(this.root,e,this.elementFilter,this.calcReordered,this.options.oldPreviousSibling),r=[],a=0;a<this.options.queries.length;a++)r.push(new Summary(t,this.options.queries[a]));return r},e.prototype.checkpointQueryValidators=function(){this.queryValidators.forEach(function(e){e&&e.recordPreviousState()})},e.prototype.runQueryValidators=function(e){this.queryValidators.forEach(function(t,r){t&&t.validate(e[r])})},e.prototype.changesToReport=function(e){return e.some(function(e){if(["added","removed","reordered","reparented","valueChanged","characterDataChanged"].some(function(t){return e[t]&&e[t].length}))return!0;if(e.attributeChanged){if(Object.keys(e.attributeChanged).some(function(t){return!!e.attributeChanged[t].length}))return!0}return!1})},e.prototype.observerCallback=function(e){this.options.observeOwnChanges||this.observer.disconnect();var t=this.createSummaries(e);this.runQueryValidators(t),this.options.observeOwnChanges&&this.checkpointQueryValidators(),this.changesToReport(t)&&this.callback(t),!this.options.observeOwnChanges&&this.connected&&(this.checkpointQueryValidators(),this.observer.observe(this.root,this.observerOptions))},e.prototype.reconnect=function(){if(this.connected)throw Error("Already connected");this.observer.observe(this.root,this.observerOptions),this.connected=!0,this.checkpointQueryValidators()},e.prototype.takeSummaries=function(){if(!this.connected)throw Error("Not connected");var e=this.createSummaries(this.observer.takeRecords());return this.changesToReport(e)?e:void 0},e.prototype.disconnect=function(){var e=this.takeSummaries();return this.observer.disconnect(),this.connected=!1,e},e.NodeMap=NodeMap,e.parseElementFilter=Selector.parseSelectors,e.optionKeys={callback:!0,queries:!0,rootNode:!0,oldPreviousSibling:!0,observeOwnChanges:!0},e}();
//# sourceMappingURL=mutation-summary.js.map