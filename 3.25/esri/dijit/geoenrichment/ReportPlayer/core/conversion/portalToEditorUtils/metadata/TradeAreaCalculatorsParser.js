// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/metadata/TradeAreaCalculatorsParser",["esri/dijit/geoenrichment/utils/JsonXmlConverter","./VariableScriptCollector"],function(a,c){return{parseTradeAreaCalculators:function(d,b){a.queryJson(d,"SpecialTradeAreaFields").forEach(function(a){b.variableProvider.isPlayerOnly&&c.getObjects(a,!0).variableObjects.forEach(function(a){b.variableProvider.addVariable(a)})})}}});