// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/promiseUtils","require exports dojo/Deferred dojo/when dojo/promise/all ./Error".split(" "),function(n,c,f,h,k,m){function l(a){if(a){if("function"!==typeof a.forEach){var b=Object.keys(a),e=b.map(function(d){return a[d]});return l(e).then(function(a){var d={};b.forEach(function(b,e){return d[b]=a[e]});return d})}var d=new f,g=[],c=a.length;0===c&&d.resolve(g);a.forEach(function(a){var b={promise:a};g.push(b);a.then(function(a){b.value=a}).catch(function(a){b.error=
a}).then(function(){--c;0===c&&d.resolve(g)})});return d.promise}}Object.defineProperty(c,"__esModule",{value:!0});c.all=function(a){return k(a)};c.filter=function(a,b){var e=a.slice();return k(a.map(function(a,e){return b(a,e)})).then(function(a){return e.filter(function(b,d){return a[d]})})};c.eachAlways=l;c.create=function(a,b){var e=new f(b);a(function(a){void 0===a&&(a=null);return h(a).then(e.resolve)},e.reject);return e.promise};c.reject=function(a){var b=new f;b.reject(a);return b.promise};
c.resolve=function(a){void 0===a&&(a=null);var b=new f;b.resolve(a);return b.promise};c.after=function(a,b){void 0===b&&(b=null);var e=0,d=new f(function(){e&&(clearTimeout(e),e=0)}),e=setTimeout(function(){d.resolve(b)},a);return d.promise};c.timeout=function(a,b,e){var d=0,c=new f(a.cancel);a.then(function(a){c.isFulfilled()||(c.resolve(a),d&&(clearTimeout(d),d=0))});a.catch(function(a){c.isFulfilled()||(c.reject(a),d&&(clearTimeout(d),d=0))});d=setTimeout(function(){c.reject(e||m("promiseUtils:timeout",
"The wrapped promise did not resolve within "+b+" ms"))},b);return c.promise};c.wrapCallback=function(a){var b=!1,c=new f(function(){return b=!0});a(function(a){b||c.resolve(a)});return c.promise};c.isThenable=function(a){return a&&"function"===typeof a.then};c.when=function(a){return h(a)}});