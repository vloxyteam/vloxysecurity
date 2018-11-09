// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/LayerSwipe.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv title\x3d"${_i18n.widgets.layerSwipe.title}" data-dojo-attach-point\x3d"_moveableNode"\x3e\r\n        \x3cdiv class\x3d"${_css.handleContainer}"\x3e\r\n            \x3cdiv class\x3d"${_css.handle}"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/LayerSwipe","dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel dijit/_WidgetBase dijit/_TemplatedMixin dojo/on dojo/text!./templates/LayerSwipe.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style dojo/dnd/move dojo/dnd/Mover dojo/sniff dojo/dom-geometry ../geometry/Point dojo/Deferred dojo/promise/all".split(" "),function(n,q,f,u,v,w,x,k,y,z,p,m,A,B,r,l,C,t,D){var E=q([B],{onFirstMove:function(a){var b=this.node.style,d,e=this.host;switch(b.position){case "relative":case "absolute":d=
Math.round(parseFloat(b.left))||0;b=Math.round(parseFloat(b.top))||0;break;default:b.position="absolute",b=l.getMarginBox(this.node),d=b.l,b=b.t}this.marginBox.l=d-this.marginBox.l;this.marginBox.t=b-this.marginBox.t;if(e&&e.onFirstMove)e.onFirstMove(this,a);this.events.shift().remove()}});n=q("esri.dijit.LayerSwipe",[w,x,n],{templateString:y,options:{theme:"LayerSwipe",layers:[],enabled:!0,type:"vertical",invertPlacement:!1,clip:9},constructor:function(a,b){a=f.mixin({},this.options,a);this.domNode=
b;this._i18n=z;this.set("map",a.map);this.set("layers",a.layers);this.set("top",a.top);this.set("left",a.left);this.set("theme",a.theme);this.set("enabled",a.enabled);this.set("type",a.type);this.set("clip",a.clip);this.set("invertPlacement",a.invertPlacement);this.watch("theme",this._updateThemeWatch);this.watch("enabled",this._enabled);this.watch("type",this._type);this.watch("invertPlacement",this._invertPlacement);this._css={handleContainer:"handleContainer",handle:"handle"};this._listeners=[]},
startup:function(){this.inherited(arguments);this.map||(this.destroy(),console.log("LayerSwipe::map required"));this.set("layers",this.layers);this.layers.length||(this.destroy(),console.log("LayerSwipe::layer required"));this._allLoaded().then(f.hitch(this,function(){this._init()}),function(a){console.log("LayerSwipe::"+a.message)})},destroy:function(){this._removeEvents();this._unclipLayers();this.inherited(arguments)},swipe:function(){this._swipe()},enable:function(){this.set("enabled",!0)},disable:function(){this.set("enabled",
!1)},_allLoaded:function(){for(var a=[],b=0;b<this.layers.length;b++){"string"===typeof this.layers[b]&&(this.layers[b]=this.map.getLayer(this.layers[b]),this.layers[b]||console.log("LayerSwipe::Could not get layer by ID"));var d=new t;this.layers[b].loaded?d.resolve("layer loaded"):this._layerLoadedPromise(b,d);a.push(d.promise)}var e=new t;if(this.map.loaded)e.resolve("map loaded");else k.once(this.map,"load",f.hitch(this,function(){e.resolve("map loaded")}));a.push(e.promise);return D(a)},_layerLoadedPromise:function(a,
b){k.once(this.layers[a],"load",function(){b.resolve("layer loaded")})},_mb:function(){var a=l.getMarginBox(this.map.root);return{t:0,l:0,w:a.l+a.w,h:a.h+a.t}},_setInitialPosition:function(){var a,b,d,e,g,h,f;b=a=0;e=l.getMarginBox(this._moveableNode);d=this.get("type");g=this.get("top");h=this.get("left");f=this.get("invertPlacement");"scope"===d?(b="undefined"!==typeof g?g:this.map.height/2-e.h/2,a="undefined"!==typeof h?h:this.map.width/2-e.w/2):"horizontal"===d?(b=this.map.height/4-e.h/2,b="undefined"!==
typeof g?g:f?this.map.height-b:b):(a=this.map.width/4-e.w/2,a="undefined"!==typeof h?h:f?this.map.width-a:a);m.set(this._moveableNode,{top:b+"px",left:a+"px"})},_setSwipeType:function(){var a=this.get("moveable"),b=this.get("type");b&&(a&&a.destroy(),p.add(this._moveableNode,b),a=new A.parentConstrainedMoveable(this._moveableNode,{area:"content",within:!0,handle:this._moveableNode,constraints:f.hitch(this,this._mb),mover:E}),this.set("moveable",a),this._setInitialPosition())},_init:function(){this._setSwipeType();
this._setupEvents();this._enabled();this.set("loaded",!0);this.emit("load",{});this.swipe()},_removeEvents:function(){if(this._listeners&&this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a]&&this._listeners[a].remove();this._listeners=[]},_repositionMover:function(){var a=l.getMarginBox(this._moveableNode);a&&(a.t>this.map.height||0>a.t||a.l>this.map.width||0>a.l)&&this._setInitialPosition()},_setupEvents:function(){this._removeEvents();this._mapResize=k.pausable(this.map,
"resize",f.hitch(this,function(){this._repositionMover()}));this._listeners.push(this._mapResize);this._swipeMove=k.pausable(this.moveable,"Move",f.hitch(this,function(){this.swipe()}));this._listeners.push(this._swipeMove);this._swipePanEnd=k.pausable(this.map,"pan-end",f.hitch(this,function(){this._swipe()}));this._listeners.push(this._swipePanEnd);this._mapUpdateStart=k.pausable(this.map,"update-start",f.hitch(this,function(){this._swipe()}));this._listeners.push(this._mapUpdateStart);this._mapUpdateEnd=
k.pausable(this.map,"update-end",f.hitch(this,function(){this._swipe()}));this._listeners.push(this._mapUpdateEnd);this._swipePan=k.pausable(this.map,"pan",f.hitch(this,function(){this._swipe()}));this._listeners.push(this._swipePan);this._toolClick=k.pausable(this._moveableNode,"click",f.hitch(this,function(a){if("scope"===this.get("type")){a=this._clickPosition(a);try{this.map.onClick(a,"other")}catch(b){console.log("LayerSwipe::scope click error")}this._clickCoords=null}}));this._listeners.push(this._toolClick);
this._toolDblClick=k.pausable(this._moveableNode,"dblclick",f.hitch(this,function(a){if("scope"===this.get("type")){a=this._clickPosition(a);try{this.map.navigationManager.mouseEvents.onDblClick(a,"other")}catch(b){console.log("LayerSwipe::scope dblclick error")}this._clickCoords=null}}));this._listeners.push(this._toolDblClick);this._evtCoords=k.pausable(this.moveable,"MouseDown",f.hitch(this,function(a){"scope"===this.get("type")&&(this._clickCoords={x:a.x,y:a.y})}));this._listeners.push(this._evtCoords)},
_clickPosition:function(a){if(this._clickCoords&&this._clickCoords.x===a.x&&this._clickCoords.y===a.y){var b=l.position(this.map.root,!0),d=a.pageX-b.x,b=a.pageY-b.y;a.x=d;a.y=b;a.screenPoint={x:d,y:b};a.mapPoint=this.map.toMap(new C(d,b,this.map.spatialReference))}return a},_getLayerNode:function(a){return a._heatmapManager&&a._heatmapManager.imageLayer&&a._heatmapManager.imageLayer._div||a._div},_positionValues:function(a){var b,d,e,g,h,f,c={layer:a,layerNode:this._getLayerNode(a),layerGraphics:a._heatmapManager?
null:a.graphics,swipeType:this.get("type"),l:0,r:0,t:0,b:0};e=this.get("clip");f=this.get("invertPlacement");a=l.getMarginBox(this._moveableNode);if("vertical"===c.swipeType||"horizontal"===c.swipeType)c.layerNode&&(b=l.getMarginBox(c.layerNode),g=Math.abs(b.t),h=Math.abs(b.l)),d=l.getMarginBox(this.map.root);"vertical"===c.swipeType?(f?b&&0<b.l?(c.l=a.l-h,c.r=this.map.width-h):b&&0>b.l?(c.l=a.l+h,c.r=this.map.width+h):(c.l=a.l,c.r=this.map.width):b&&0<b.l?(c.l=0-h,c.r=a.l-h):b&&0>b.l?(c.l=0+h,c.r=
a.l+h):(c.l=0,c.r=a.l),b&&0<b.t?(c.t=0-g,c.b=d.h-g):b&&0>b.t?(c.t=0+g,c.b=d.h+g):(c.t=0,c.b=d.h)):"horizontal"===c.swipeType?(f?b&&0<b.t?(c.t=a.t-g,c.b=this.map.height-g):b&&0>b.t?(c.t=a.t+g,c.b=this.map.height+g):(c.t=a.t,c.b=this.map.height):b&&0<b.t?(c.t=0-g,c.b=a.t-g):b&&0>b.t?(c.t=0+g,c.b=a.t+g):(c.t=0,c.b=a.t),b&&0<b.l?(c.l=0-h,c.r=d.w-h):b&&0>b.l?(c.l=0+h,c.r=d.w+h):(c.l=0,c.r=d.w)):"scope"===c.swipeType&&(c.layerGraphics?(c.l=a.l,c.r=a.w,c.t=a.t,c.b=a.h,"undefined"!==typeof e&&(c.l+=e,c.r+=
-(2*e),c.t+=e,c.b+=-(2*e))):(c.l=a.l,c.r=c.l+a.w,c.t=a.t,c.b=c.t+a.h,"undefined"!==typeof e&&(c.l+=e,c.r+=-e,c.t+=e,c.b+=-e)));return c},_clipLayer:function(a){if(a.layerNode)if(a.layerGraphics){var b=a.layer._getTransform();b&&(b.hasOwnProperty("dx")&&(a.l+=-b.dx),b.hasOwnProperty("dy")&&(a.t+=-b.dy));a.layerNode.setClip({x:a.l,y:a.t,width:a.r,height:a.b})}else{if(b=a.layerNode.style,a&&b&&a.hasOwnProperty("r")&&a.hasOwnProperty("l")&&a.hasOwnProperty("t")&&a.hasOwnProperty("b"))"css-transforms"===
this.map.navigationMode?b&&(b=this._getTransformValue(b))&&(b=this._parseTransformValue(b),a.l-=b.x,a.r-=b.x,a.t-=b.y,a.b-=b.y):b&&"scope"===a.swipeType&&(b=this._parseScopeStyle(b),a.l-=b.x,a.r-=b.x,a.t-=b.y,a.b-=b.y),b=r("ie"),m.set(a.layerNode,"clip",b&&8>b?"rect("+a.t+"px "+a.r+"px "+a.b+"px "+a.l+"px)":"rect("+a.t+"px, "+a.r+"px, "+a.b+"px, "+a.l+"px)")}else console.log("LayerSwipe::Invalid layer type")},_swipe:function(){if(this.get("loaded")&&this.get("enabled")){var a={layers:[]};if(this.layers&&
this.layers.length)for(var b=0;b<this.layers.length;b++){var d=this._positionValues(this.layers[b]);this._clipLayer(d);a.layers.push({layer:this.layers[b],left:d.l,right:d.r,top:d.t,bottom:d.b})}this.emit("swipe",a)}},_getTransformValue:function(a){var b,d;if(a){d=["transform","-webkit-transform","-ms-transform","-moz-transform","-o-transform"];for(var e=0;e<d.length&&!(b=a[d[e]]);e++){try{b=a.getPropertyValue(d[e])}catch(g){}if(b)break}}return b},_parseTransformValue:function(a){var b={x:0,y:0};
-1!==a.toLowerCase().indexOf("translate3d")?a=a.replace("translate3d(","").replace(")","").replace(/px/ig,"").replace(/\s/i,"").split(","):-1!==a.toLowerCase().indexOf("translate")&&(a=a.replace("translate(","").replace(")","").replace(/px/ig,"").replace(/\s/i,"").split(","));try{b.x=parseFloat(a[0]),b.y=parseFloat(a[1])}catch(d){console.log("LayerSwipe::Error parsing transform number")}return b},_parseScopeStyle:function(a){var b={x:0,y:0};try{b.x=parseFloat(a.left.replace(/px/ig,"").replace(/\s/i,
"")),b.y=parseFloat(a.top.replace(/px/ig,"").replace(/\s/i,""))}catch(d){console.log("LayerSwipe::Error parsing div style float")}return b},_updateThemeWatch:function(a,b,d){p.remove(this.domNode,b);p.add(this.domNode,d)},_type:function(a,b){b&&p.remove(this._moveableNode,b);this._setSwipeType();this._setupEvents();this.swipe()},_pauseEvents:function(){if(this._listeners&&this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a].pause()},_resumeEvents:function(){if(this._listeners&&
this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a].resume()},_unclipLayers:function(){if(this.get("loaded")&&this.layers&&this.layers.length)for(var a=0;a<this.layers.length;a++){var b=this._getLayerNode(this.layers[a]),d=this.layers[a].graphics;b&&(d?(b.setClip&&b.setClip(null),m.set(b.rawNode||b,"clip","")):(d=r("ie"),m.set(b,"clip",d&&8>d?"rect(auto auto auto auto)":"auto")))}},_invertPlacement:function(){this.swipe()},_enabled:function(){this.get("enabled")?(m.set(this.domNode,
"display","block"),this._resumeEvents(),this.swipe()):(this._pauseEvents(),m.set(this.domNode,"display","none"),this._unclipLayers())}});u("extend-esri")&&f.setObject("dijit.LayerSwipe",n,v);return n});