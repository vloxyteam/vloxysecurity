// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputMedDensity","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/etc/docUtil ../../../form/InputNumber".split(" "),function(a,b,c,d,e,f){a=a([f],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(a){this.inherited(arguments);this._informUnits()},_informUnits:function(){try{if(!this.parentXNode.gxeDocument.isViewOnly){var a=e.findInputWidget(this.parentXNode.parentElement.gxePath+"/medDenUnits",
this.parentXNode.parentElement.domNode);a&&a.emitInteractionOccurred()}}catch(g){console.error(g)}}});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.form.InputMedDensity",a,d);return a});