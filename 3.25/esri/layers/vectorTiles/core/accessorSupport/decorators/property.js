// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/decorators/property","require exports dojo/has ../../lang ../../Logger ../metadata".split(" "),function(n,e,g,h,m,k){Object.defineProperty(e,"__esModule",{value:!0});var l=m.getLogger("esri.core.accessorSupport.decorators.property");e.property=function(a){void 0===a&&(a={});return function(b,c){var e=b.constructor.prototype;if(e===Function.prototype)g("dojo-debug-messages")&&l.error("Inappropriate use of @property() on a static field: "+b.name+
"."+c+". Accessor does not support static properties.");else{var d=Object.getOwnPropertyDescriptor(b,c);d&&(d.get||d.set)?(a=h.clone(a),d.set&&(a.set=d.set),d.get&&(a.get=d.get)):d&&d.hasOwnProperty("value")&&(a=h.clone(a),g("dojo-debug-messages")&&a.hasOwnProperty("value")&&l.warn('@property() will redefine the value of "'+c+'" on "'+b.constructor.name+'" already defined in the metadata',a),a.value=d.value);b=k.getPropertyMetadata(e,c);for(var f in a)c=a[f],Array.isArray(c)?b[f]=(b[f]||[]).concat(c):
b[f]=c}}};e.propertyJSONMeta=function(a,b,c){a=k.getPropertyMetadata(a.constructor.prototype,c);a.json||(a.json={});a=a.json;void 0!==b&&(a.origins||(a.origins={}),a.origins[b]||(a.origins[b]={}),a=a.origins[b]);return a}});