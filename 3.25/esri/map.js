// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/map","require dojo/_base/kernel dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/event dojo/on dojo/aspect dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dijit/a11yclick dijit/registry ./kernel ./config ./sniff ./lang ./_coremap ./MapNavigationManager dojo/i18n!./nls/jsapi".split(" "),function(z,q,N,C,l,r,D,E,O,F,G,h,v,P,Q,t,R,u,H,g,n,S,T,I){var A={up:"panUp",right:"panRight",down:"panDown",left:"panLeft"},J=
{upperRight:"panUpperRight",lowerRight:"panLowerRight",lowerLeft:"panLowerLeft",upperLeft:"panUpperLeft"},f=C.connect,k=C.disconnect,m=v.create,p=Q.set,K=l.hitch,w=P.getMarginBox,L=q.deprecated,B=l.mixin,M=0;q=N(S,{declaredClass:"esri.Map",constructor:function(a,b){b=b||{};B(this,{_slider:null,_navDiv:null,_mapParams:B({attributionWidth:.45,slider:!0,nav:!1,logo:!0,sliderStyle:"small",sliderPosition:"top-left",sliderOrientation:"vertical",autoResize:!0},b)});B(this,{isMapNavigation:null!=b.isMapNavigation?
b.isMapNavigation:!0,isDoubleClickZoom:null!=b.isDoubleClickZoom?b.isDoubleClickZoom:!0,isClickRecenter:null!=b.isClickRecenter?b.isClickRecenter:!0,isPan:null!=b.isPan?b.isPan:!0,isRubberBandZoom:null!=b.isRubberBandZoom?b.isRubberBandZoom:!0,isPinchZoom:null!=b.isPinchZoom?b.isPinchZoom:!0,isKeyboardNavigation:null!=b.isKeyboardNavigation?b.isKeyboardNavigation:!0,isScrollWheel:null!=b.isScrollWheel?b.isScrollWheel:!0,isShiftDoubleClickZoom:!1,isScrollWheelZoom:!1,isPanArrows:!1,isZoomSlider:!1});
l.isFunction(u._css)&&(u._css=u._css(this._mapParams.force3DTransforms),this.force3DTransforms=this._mapParams.force3DTransforms);a=g("esri-transforms")&&g("esri-transitions");this.navigationMode=this._mapParams.navigationMode||a&&"css-transforms"||"classic";"css-transforms"!==this.navigationMode||a||(this.navigationMode="classic");this.fadeOnZoom=n.isDefined(this._mapParams.fadeOnZoom)?this._mapParams.fadeOnZoom:"css-transforms"===this.navigationMode;"css-transforms"!==this.navigationMode&&(this.fadeOnZoom=
!1);this.setMapCursor("default");this.smartNavigation=b&&b.smartNavigation;if(!(n.isDefined(this.smartNavigation)||!g("mac")||g("esri-touch")||g("esri-pointer")||3.5>=g("ff"))){var c=navigator.userAgent.match(/Mac\s+OS\s+X\s+([\d]+)(\.|\_)([\d]+)\D/i);c&&n.isDefined(c[1])&&n.isDefined(c[3])&&(a=parseInt(c[1],10),c=parseInt(c[3],10),this.smartNavigation=10<a||10===a&&6<=c)}this.showAttribution=n.isDefined(this._mapParams.showAttribution)?this._mapParams.showAttribution:!0;this._onLoadHandler_connect=
f(this,"onLoad",this,"_onLoadInitNavsHandler");var e=m("div",{class:"esriControlsBR"+(this._mapParams.nav?" withPanArrows":"")},this.root);if(this.showAttribution)if(a=l.getObject("esri.dijit.Attribution",!1))this._initAttribution(a,e);else{var d=M++,x=this;this._rids&&this._rids.push(d);z(["./dijit/Attribution"],function(a){var b=x._rids?r.indexOf(x._rids,d):-1;-1!==b&&(x._rids.splice(b,1),x._initAttribution(a,e))})}this._mapParams.logo&&(a={},6===g("ie")&&(a.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled\x3d'true', sizingMethod\x3d'crop', src\x3d'"+
z.toUrl("./images/map/logo-med.png")+"')"),this._ogol=m("div",{style:a,tabIndex:"0",title:"Esri"},e),this._setLogoSize(),this._onMapResizeLogo_connect=f(this,"onResize",this,"_setLogoSize"),this._ogol_connect=f(this._ogol,t,this,"_openLogoLink"));this.navigationManager=new T(this);b&&b.basemap&&(this._onLoadFix=!0,this.setBasemap(b.basemap),this._onLoadFix=!1);if(this.autoResize=this._mapParams.autoResize)b=this._getEnclosingResizableWidget(this.container)||window,a=this.resize,this._rszSignal=E.pausable(b,
"resize",a),this._oriSignal=E.pausable(window,"orientationchange",a),O.after(b,"resize",a,!0),this._startResizeTimer()},_startResizeTimer:function(){clearTimeout(this._persistentTimer);this._persistentTimer=setTimeout(this._timedResize,2*this.resizeDelay)},_getEnclosingResizableWidget:function(a){var b=R.getEnclosingWidget(a);return b?b.resize?b:this._getEnclosingResizableWidget(a.parentNode):b},_setLogoSize:function(){this._ogol&&(25E4>this.root.clientWidth*this.root.clientHeight?(h.remove(this._ogol,
"logo-med"),h.add(this._ogol,"logo-sm")):(h.remove(this._ogol,"logo-sm"),h.add(this._ogol,"logo-med")))},_initAttribution:function(a,b){b=m("span",{class:"esriAttribution"},b,"first");p(b,"maxWidth",Math.floor(this.width*this._mapParams.attributionWidth)+"px");this._connects.push(f(b,t,function(){h.contains(this,"esriAttributionOpen")?h.remove(this,"esriAttributionOpen"):this.scrollWidth>this.clientWidth&&h.add(this,"esriAttributionOpen")}));this.attribution=new a({map:this},b)},_cleanUp:function(){this.disableMapNavigation();
this.navigationManager.destroy();var a=this._slider;a&&a.destroy&&!a._destroyed&&a.destroy();var a=this._navDiv,b=this.attribution;a&&v.destroy(a);b&&b.destroy();this._connects.push(this._slider_connect,this._ogol_connect,this._rszSignal,this._oriSignal);r.forEach(this._connects,k);clearInterval(this._persistentTimer);this.attribution=this.navigationManager=this._rids=this._connects=this._slider_connect=this._ogol_connect=this._rszSignal=this._oriSignal=this._persistentTimer=null;this.inherited("_cleanUp",
arguments)},_isPanningOrZooming:function(){return this.__panning||this.__zooming},_canZoom:function(a){var b=this.getLevel();return!this.__tileInfo||!(b===this.getMinZoom()&&0>a||b===this.getMaxZoom()&&0<a)},_onLoadInitNavsHandler:function(){this._evalMapNavigation();this._createNav();if("small"===this._mapParams.sliderStyle||!this._createSlider)this._createSimpleSlider();else if(this._mapParams.slider){var a=-1!==this._getSliderClass(!0).indexOf("Horizontal"),a=[a?"dijit.form.HorizontalSlider":"dijit.form.VerticalSlider",
a?"dijit.form.HorizontalRule":"dijit.form.VerticalRule",a?"dijit.form.HorizontalRuleLabels":"dijit.form.VerticalRuleLabels"];if(r.some(a,function(a){return!l.getObject(a,!1)})){var a=r.map(a,function(a){return a.replace(/\./g,"/")}),b=M++,c=this;this._rids&&this._rids.push(b);z(a,function(){var a=c._rids?r.indexOf(c._rids,b):-1;-1!==a&&(c._rids.splice(a,1),c._createSlider.apply(c,arguments))})}else a=r.map(a,function(a){return l.getObject(a,!1)}),this._createSlider.apply(this,a)}k(this._onLoadHandler_connect)},
_createNav:function(){if(this._mapParams.nav){var a,b,c,e=h.add,d=this.id;this._navDiv=m("div",{id:d+"_navdiv"},this.root);e(this._navDiv,"navDiv");var x=this.width/2,U=this.height/2,g;for(c in A)b=A[c],a=m("div",{id:d+"_pan_"+c},this._navDiv),e(a,"fixedPan "+b),"up"===c||"down"===c?(g=parseInt(w(a).w,10)/2,p(a,{left:x-g+"px",zIndex:30})):(g=parseInt(w(a).h,10)/2,p(a,{top:U-g+"px",zIndex:30})),this._connects.push(f(a,"onclick",K(this,this[b])));this._onMapResizeNavHandler_connect=f(this,"onResize",
this,"_onMapResizeNavHandler");for(c in J)b=J[c],a=m("div",{id:d+"_pan_"+c,style:{zIndex:30}},this._navDiv),e(a,"fixedPan "+b),this._connects.push(f(a,"onclick",K(this,this[b])));this.isPanArrows=!0}},_onMapResizeNavHandler:function(a,b,c){a=this.id;b/=2;c/=2;var e=F.byId,d,f,g;for(d in A)f=e(a+"_pan_"+d),"up"===d||"down"===d?(g=parseInt(w(f).w,10)/2,p(f,"left",b-g+"px")):(g=parseInt(w(f).h,10)/2,p(f,"top",c-g+"px"))},_createSimpleSlider:function(){if(this._mapParams.slider){var a=this._slider=m("div",
{id:this.id+"_zoom_slider",class:this._getSliderClass(),style:{zIndex:30}}),b=m("div",{class:"esriSimpleSliderIncrementButton",tabIndex:"0",role:"button"},a),c=m("div",{class:"esriSimpleSliderDecrementButton",tabIndex:"0",role:"button"},a);this._addZoomButtonTooltips(b,c);this._incButton=b;this._decButton=c;this._simpleSliderZoomHandler(null,null,null,this.getLevel());var e=I.widgets.zoomSlider;this._addZoomButtonIcon(b,"+",e.zoomIn);this._addZoomButtonIcon(c,"\x26minus;",e.zoomOut);8>g("ie")&&h.add(c,
"dj_ie67Fix");this._connects.push(f(b,t,this,this._simpleSliderChangeHandler));this._connects.push(f(c,t,this,this._simpleSliderChangeHandler));(-1<this.getMaxZoom()||-1<this.getMinZoom())&&this._connects.push(f(this,"onZoomEnd",this,this._simpleSliderZoomHandler));10>g("ie")&&F.setSelectable(a,!1);this.root.appendChild(a);this.isZoomSlider=!0}},_simpleSliderChangeHandler:function(a){D.stop(a);a=-1!==a.currentTarget.className.indexOf("IncrementButton")?!0:!1;this._extentUtil({numLevels:a?1:-1})},
_simpleSliderZoomHandler:function(a,b,c,e){var d;a=this._incButton;b=this._decButton;-1<e&&e===this.getMaxZoom()?d=a:-1<e&&e===this.getMinZoom()&&(d=b);d?(h.add(d,"esriSimpleSliderDisabledButton"),h.remove(d===a?b:a,"esriSimpleSliderDisabledButton")):(h.remove(a,"esriSimpleSliderDisabledButton"),h.remove(b,"esriSimpleSliderDisabledButton"))},_getSliderClass:function(a){a=a?"Large":"Simple";var b=this._mapParams.sliderOrientation,c=this._mapParams.sliderPosition||"",b=b&&"horizontal"===b.toLowerCase()?
"esri"+a+"SliderHorizontal":"esri"+a+"SliderVertical";if(c)switch(c.toLowerCase()){case "top-left":c="esri"+a+"SliderTL";break;case "top-right":c="esri"+a+"SliderTR";break;case "bottom-left":c="esri"+a+"SliderBL";break;case "bottom-right":c="esri"+a+"SliderBR"}return"esri"+a+"Slider "+b+" "+c},_addZoomButtonIcon:function(a,b,c){v.create("span",{"aria-hidden":"true",role:"presentation",innerHTML:b},a);v.create("span",{class:"esriIconFallbackText",innerHTML:c},a)},_addZoomButtonTooltips:function(a,
b){var c=I.widgets.zoomSlider;G.set(a,"title",c.zoomIn);G.set(b,"title",c.zoomOut)},_createSlider:function(a,b,c){if(this._mapParams.slider){var e=m("div",{id:this.id+"_zoom_slider"},this.root),d=H.defaults.map,h=this._getSliderClass(!0),k=-1!==h.indexOf("Horizontal"),l=this.getNumLevels();if(0<l){var n,q,y=this._mapParams.sliderLabels,v=!!y,t=!1!==y;if(t){var u=k?"bottomDecoration":"rightDecoration";if(!y)for(y=[],d=0;d<l;d++)y[d]="";r.forEach([{class:"esriLargeSliderTicks",container:u,count:l,dijitClass:b},
{class:v&&"esriLargeSliderLabels",container:u,count:l,labels:y,dijitClass:c}],function(a){var c=m("div"),d=a.dijitClass;delete a.dijitClass;e.appendChild(c);d===b?n=new d(a,c):q=new d(a,c)})}a=this._slider=new a({id:e.id,class:h,minimum:this.getMinZoom(),maximum:this.getMaxZoom(),discreteValues:l,value:this.getLevel(),clickSelect:!0,intermediateChanges:!0,style:"z-index:30;"},e);a.startup();t&&(n.startup(),q.startup());this._slider_connect=f(a,"onChange",this,"_onSliderChangeHandler");this._connects.push(f(this,
"onExtentChange",this,"_onExtentChangeSliderHandler"));this._connects.push(f(a._movable,"onFirstMove",this,"_onSliderMoveStartHandler"))}else{a=this._slider=new a({id:e.id,class:h,minimum:0,maximum:2,discreteValues:3,value:1,clickSelect:!0,intermediateChanges:d.sliderChangeImmediate,style:"height:50px; z-index:30;"},e);c=a.domNode.firstChild.childNodes;for(d=1;3>=d;d++)p(c[d],"visibility","hidden");a.startup();this._slider_connect=f(a,"onChange",this,"_onDynSliderChangeHandler");this._connects.push(f(this,
"onExtentChange",this,"_onExtentChangeDynSliderHandler"))}d=a.incrementButton;c=a.decrementButton;k?this._addZoomButtonTooltips(d,c):this._addZoomButtonTooltips(c,d);d.style.outline="none";c.style.outline="none";a.sliderHandle.style.outline="none";a._onKeyPress=function(){};if(k=a._movable){var w=k.onMouseDown;k.onMouseDown=function(a){9>g("ie")&&1!==a.button||w.apply(this,arguments)}}this.isZoomSlider=!0}},_onSliderMoveStartHandler:function(){k(this._slider_connect);k(this._slidermovestop_connect);
this._slider_connect=f(this._slider,"onChange",this,"_onSliderChangeDragHandler");this._slidermovestop_connect=f(this._slider._movable,"onMoveStop",this,"_onSliderMoveEndHandler")},_onSliderChangeDragHandler:function(a){this._extentUtil({targetLevel:a})},_onSliderMoveEndHandler:function(){k(this._slider_connect);k(this._slidermovestop_connect)},_onSliderChangeHandler:function(a){this.setLevel(a)},_updateSliderValue:function(a,b){k(this._slider_connect);var c=this._slider,e=c._onChangeActive;c._onChangeActive=
!1;c.set("value",a);c._onChangeActive=e;this._slider_connect=f(c,"onChange",this,b)},_onExtentChangeSliderHandler:function(a,b,c,e){k(this._slidermovestop_connect);this._updateSliderValue(e.level,"_onSliderChangeHandler")},_onDynSliderChangeHandler:function(a){this._extentUtil({numLevels:0<a?1:-1})},_onExtentChangeDynSliderHandler:function(){this._updateSliderValue(1,"_onDynSliderChangeHandler")},_openLogoLink:function(a){window.open(H.defaults.map.logoLink,"_blank");D.stop(a)},enableMapNavigation:function(){this.isMapNavigation||
(this.isMapNavigation=!0,this._evalMapNavigation())},disableMapNavigation:function(){this.isMapNavigation&&(this.isMapNavigation=!1,this._evalMapNavigation())},_evalMapNavigation:function(){this.isMapNavigation?this.navigationManager.enableNavigation():this.navigationManager.disableNavigation()},_evalNavigationFeature:function(a){if(this.isMapNavigation&&this["is"+a])this.navigationManager["enable"+a]();else this.navigationManager["disable"+a]()},enableDoubleClickZoom:function(){this.isDoubleClickZoom||
(this.isDoubleClickZoom=!0,this._evalNavigationFeature("DoubleClickZoom"))},disableDoubleClickZoom:function(){this.isDoubleClickZoom&&(this.isDoubleClickZoom=!1,this._evalNavigationFeature("DoubleClickZoom"))},enableShiftDoubleClickZoom:function(){this.isShiftDoubleClickZoom||(L(this.declaredClass+": Map.(enable/disable)ShiftDoubleClickZoom deprecated. Shift-Double-Click zoom behavior will not be supported.",null,"v2.0"),this.navigationManager.enableShiftDoubleClickZoom(),this.isShiftDoubleClickZoom=
!0)},disableShiftDoubleClickZoom:function(){this.isShiftDoubleClickZoom&&(L(this.declaredClass+": Map.(enable/disable)ShiftDoubleClickZoom deprecated. Shift-Double-Click zoom behavior will not be supported.",null,"v2.0"),this.navigationManager.disableShiftDoubleClickZoom(),this.isShiftDoubleClickZoom=!1)},enableClickRecenter:function(){this.isClickRecenter||(this.isClickRecenter=!0,this._evalNavigationFeature("ClickRecenter"))},disableClickRecenter:function(){this.isClickRecenter&&(this.isClickRecenter=
!1,this._evalNavigationFeature("ClickRecenter"))},enablePan:function(){this.isPan||(this.isPan=!0,this._evalNavigationFeature("Pan"))},disablePan:function(){this.isPan&&(this.isPan=!1,this._evalNavigationFeature("Pan"))},enableRubberBandZoom:function(){this.isRubberBandZoom||(this.isRubberBandZoom=!0,this._evalNavigationFeature("RubberBandZoom"))},disableRubberBandZoom:function(){this.isRubberBandZoom&&(this.isRubberBandZoom=!1,this._evalNavigationFeature("RubberBandZoom"))},enablePinchZoom:function(){this.isPinchZoom||
(this.isPinchZoom=!0,this._evalNavigationFeature("PinchZoom"))},disablePinchZoom:function(){this.isPinchZoom&&(this.isPinchZoom=!1,this._evalNavigationFeature("PinchZoom"))},enableKeyboardNavigation:function(){this.isKeyboardNavigation||(this.isKeyboardNavigation=!0,this._evalNavigationFeature("KeyboardNavigation"))},disableKeyboardNavigation:function(){this.isKeyboardNavigation&&(this.isKeyboardNavigation=!1,this._evalNavigationFeature("KeyboardNavigation"))},enableScrollWheel:function(){this.isScrollWheel||
(this.isScrollWheel=!0,this._evalNavigationFeature("ScrollWheel"))},disableScrollWheel:function(){this.isScrollWheel&&(this.isScrollWheel=!1,this._evalNavigationFeature("ScrollWheel"))},enableScrollWheelZoom:function(){this.isScrollWheelZoom||(this.navigationManager.enableScrollWheelZoom(),this.isScrollWheelZoom=!0)},disableScrollWheelZoom:function(){this.isScrollWheelZoom&&(this.navigationManager.disableScrollWheelZoom(),this.isScrollWheelZoom=!1)},enableScrollWheelPan:function(){this.isScrollWheelPan||
this.navigationManager.enableScrollWheelPan()},disableScrollWheelPan:function(){this.isScrollWheelPan&&this.navigationManager.disableScrollWheelPan()},showPanArrows:function(){this._navDiv&&(this._navDiv.style.display="block",this.isPanArrows=!0)},hidePanArrows:function(){this._navDiv&&(this._navDiv.style.display="none",this.isPanArrows=!1)},showZoomSlider:function(){this._slider&&(p(this._slider.domNode||this._slider,"visibility","inherit"),this.isZoomSlider=!0)},hideZoomSlider:function(){this._slider&&
(p(this._slider.domNode||this._slider,"visibility","hidden"),this.isZoomSlider=!1)},onClick:function(a){a.graphic||(a.graphic=this.syncHitTestForWebGL(a))}});g("extend-esri")&&(u.Map=q);return q});