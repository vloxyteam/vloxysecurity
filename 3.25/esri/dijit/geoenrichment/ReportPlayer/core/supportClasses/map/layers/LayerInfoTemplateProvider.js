// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/layers/LayerInfoTemplateProvider",["esri/dijit/PopupTemplate","esri/dijit/geoenrichment/utils/FieldUtil"],function(e,c){return{provideInfoTemplate:function(a){if(a.fields&&a.fields.length){var d=[];a.fields.map(function(b){if(c.canShowField(b)&&b.alias){var a={fieldName:b.name,label:b.alias,visible:!0};if(b=c.isNumericField(b))a.format={digitSeparator:!0,places:"i"===b?0:2};d.push(a)}});a.infoTemplate=new e({title:a.name||"",fieldInfos:d})}}}});