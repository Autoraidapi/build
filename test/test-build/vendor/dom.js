(function(){var e=this,n=function(e){return e instanceof n?e:this instanceof n?void(this._wrapped=e):new n(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports.$=n):e.$=n,n.VERSION="0.0.1",DocumentFragment.prototype.append=function(e){return this.appendChild(e)},DocumentFragment.prototype.render=function(e){return e.appendChild(this)};const t=new DocumentFragment;!function(e){[].slice.call(arguments,1).forEach(function(n){for(var t in n)void 0!==n[t]&&(e[t]=n[t])})}(n,t),n.id=document.getElementById.bind(document),n.qs=function(e,n){return(n||document).querySelector(e)},n.qsa=function(e,n){return(n||document).querySelectorAll(e)},n.closest=function(e,n){return e.closest(n)},n.listen=function(e,n,t,o){e.addEventListener(n,t,!!o)},n.delegate=function(e,t,o,r){function d(o){var d=o.target,i=n.qsa(t,e);[].indexOf.call(i,d)>=0&&r.call(d,o)}var i="blur"===o||"focus"===o;n.listen(e,o,d,i)},n.parent=function(e,t){if(e.parentNode)return e.parentNode.tagName.toLowerCase()===t.toLowerCase()?e.parentNode:n.parent(e.parentNode,t)},n.closest=function(e,t){return n.qs(e).closest(t)},n.create=function(e,n,o){o=o||{};const r=document.createElement(n);return o.class&&(r.className=o.class),o.text?r.appendChild(document.createTextNode(o.text)):o.html&&(r.innerHTML=o.html),t.appendChild(r),e.appendChild(t)},n.append=function(e,n){return t.appendChild(n),e.appendChild(t)},n.prototype.wrapped=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("dom",[],function(){return n})}).call(this);