// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/base/templates/ElementHeader.html":'\x3cdiv class\x3d"gxeElementHeader"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"labelNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/metadata/base/ElementHeader","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../../../kernel ./Templated ./LabelMixin dojo/text!./templates/ElementHeader.html".split(" "),function(b,c,d,g,m,e,f,h,k,l){b=b([h,k],{label:null,parentElement:null,templateString:l,postCreate:function(){this.inherited(arguments)},initialize:function(a){this.parentElement=a;g.place(this.domNode,a.containerNode,"before");d.add(a.domNode,"single gxeIndent");this.label=
a.getLabelString();var b=0===a.minOccurs,c=a.preferOpen,e=this.labelNode,f=a.containerNode;a.noToggle||!b?(this.labelNode.innerHTML=this.label,b?d.add(this.labelNode,"gxeOptionalLabel"):d.add(this.labelNode,"gxeMandatoryLabel")):this.initializeLabel(this.label,b,c,e,f)},whenOptionalContentToggled:function(a){this.parentElement._isOptionallyOff=a}});e("extend-esri")&&c.setObject("dijit.metadata.base.ElementHeader",b,f);return b});