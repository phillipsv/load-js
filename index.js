/*! load-js v3.0.3 - Wed Apr 22 2020 21:50:02 GMT-0400 (Eastern Daylight Time). (c) 2020 Miguel Castillo <manchagnu@gmail.com>. Licensed under MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).loadJS=e()}}(function(){return require=_bb$iter=function(e,r){var t={};function o(r){if(!t.hasOwnProperty(r)){var a={exports:{}},i=e[r][0],d=e[r][1];t[r]=a.exports,i((l=d,function(e){var r=l[e];if(n(r))return o(r);for(var t=o.next;t;t=t.next)if(t.has(r))return t.get(r);for(var a=o.prev;a;a=a.prev)if(a.has(r))return a.get(r);throw new Error("Module '"+e+"' with id "+r+" was not found")}),a,a.exports),t[r]=a.exports}var l;return t[r]}function n(r){return e[r]}if(o.get=o,o.has=n,o.next="undefined"==typeof _bb$iter?null:_bb$iter,r.length)for(var a=o,i=o.next;i;)i.prev=a,a=i,i=i.next;return r.forEach(o),o}({1:[function(e,r,t){var o={};r.exports.load=function(e){var r=document.getElementsByTagName("head")[0]||document.documentElement;function t(e){if("string"==typeof e&&(e={url:e,id:function(e){for(var r="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=t.length,n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*o));return r}(8),debug:!1}),!e.id)throw new Error("load-js: must provide a id for load js");var t=e.id,n=o[t];if(n)return e.debug&&console.log("load-js: cache hit",t),n;if(!1!==e.allowExternal){var a=function(e){var r=e&&document.getElementById(e);if(r&&"watermark"!==r.loadJS)return console.warn("load-js: duplicate script with id:",e),r}(e.id)||function(e){var r=e&&document.querySelector("script[src='"+e+"']");if(r&&"watermark"!==r.loadJS)return console.warn("load-js: duplicate script with url:",e),r}(e.url);if(a){var i=Promise.resolve(a);return t&&(o[t]=i),i}}if(!e.url&&!e.text)throw new Error("load-js: must provide a url or text to load");e.selector&&(element=document.querySelector(e.selector),element&&(r=element));var d=(e.url?function(e,r){return new Promise(function(t,o){var n=!1;r.onload=r.onreadystatechange=function(){n||r.readyState&&"loaded"!==r.readyState&&"complete"!==r.readyState||(n=!0,r.onload=r.onreadystatechange=null,t(r))},r.onerror=o,e.appendChild(r)})}:function(e,r){return e.appendChild(r),Promise.resolve(r)})(r,function(e){var r=document.createElement("script");return r.charset=e.charset||"utf-8",r.type=e.type||"text/javascript",r.async=!!e.async,r.id=e.id||e.url,r.loadJS="watermark",e.url&&(r.src=e.url),e.text&&(r.text=e.text),r}(e));return t&&!1!==e.cache&&(o[t]=d),d}return console.log(o),e instanceof Array?Promise.all(e.map(t)):t(e)},r.exports.unload=function(e){function r(e){if("string"==typeof e&&(e={id:e}),!e.id)throw new Error("load-js: must provide a id or array ids to unload");return Array.prototype.slice.call(document.querySelectorAll(`script[id="${e.id}"]`)).forEach(e=>{delete o[e.id],e.parentNode.removeChild(e)}),console.log(o),!0}return e instanceof Array?e.map(r):r(e)}},{}]},[1]),_bb$iter(1)});
//# sourceMappingURL=index.js.map
