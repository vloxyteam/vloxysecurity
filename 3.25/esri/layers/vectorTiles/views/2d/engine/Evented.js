// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/Evented",["require","exports","../../../core/tsSupport/extendsHelper","dojo/aspect","dojo/on"],function(f,e,h,g,d){Object.defineProperty(e,"__esModule",{value:!0});f=function(){function c(){}c.prototype.on=function(a,b){return g.after(this,"on"+a,b,!0)};c.prototype.once=function(a,b){return d.once(this,a,b)};c.prototype.emit=function(a){d.emit(this,a,this)};c.prototype.hasEventListener=function(a){a="on"+a;return!(!this[a]||!this[a].after)};return c}();
e.Evented=f;e.EventedMixin=function(c){return function(a){function b(){return null!==a&&a.apply(this,arguments)||this}h(b,a);b.prototype.on=function(a,b){return g.after(this,"on"+a,b,!0)};b.prototype.once=function(a,b){return d.once(this,a,b)};b.prototype.emit=function(a,b){d.emit(this,a,b)};b.prototype.hasEventListener=function(a){a="on"+a;return!(!this[a]||!this[a].after)};return b}(c)}});