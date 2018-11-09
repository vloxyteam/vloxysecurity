// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/components/ToggleIconButtons","../../../kernel ../../../lang dijit/_WidgetBase dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-style dojo/dom-construct dojo/has dojo/on dojo/Evented".split(" "),function(k,d,l,c,m,f,r,e,t,g,n,p,q){d=m([l,q],{declaredClass:"esri.dijit.analysis.components.ToggleIconButtons",buttons:[],isHorizontal:!0,selectedButton:"",postMixInProperties:function(){this.inherited(arguments)},buildRendering:function(){this.createElements()},
postCreate:function(){this.inherited(arguments)},createElements:function(){this.domNode=g.create("div",{"class":"class"});this.elements=[];c.forEach(this.buttons,f.hitch(this,function(a,b){a=this.createElement(a,b);this.elements.push(a);this.domNode.appendChild(a)}))},createElement:function(a,b){var h=a.title||a.label,d=a.value||a.label,c=a.label,e=this.isHorizontal&&"left";a=g.create("div",{id:c+b,"class":"bufferIcon "+a.icon,title:h});h=g.create("label",{id:c+b,"class":"esriSelectLabel",title:h,
innerHTML:c});b=g.create("div",{id:"toggleButton"+b,value:d,"class":"bufferSelector esriLeadingMargin2 "+e});p(b,"click",f.hitch(this,this.onElementClick));b.appendChild(a);b.appendChild(h);return b},reset:function(){c.forEach(this.elements,function(a){e.remove(a,"selected")})},setSpecificButton:function(a){this.reset();c.forEach(this.elements,f.hitch(this,function(b){b.value===a&&(e.add(b,"selected"),this.emitChange(a))}))},onElementClick:function(a){this.reset();e.add(a.target.parentElement,"selected");
this.emitChange(a.target.parentElement.value)},emitChange:function(a){this.emit("change",{value:a})},_setIsHorizontalAttr:function(a){this.isHorizontal=a},_getIsHorizontalAttr:function(a){return this.isHorizontal},_setButtonsAttr:function(a){this.buttons=a},_getButtonsAttr:function(a){return this.buttons},_setSelectedButtonAttr:function(a){this.setSpecificButton(a)},_getSelectedButtonAttr:function(){return this.selectedButton}});n("extend-esri")&&f.setObject("dijit.analysis.components.ToggleIconButtons",
d,k);return d});