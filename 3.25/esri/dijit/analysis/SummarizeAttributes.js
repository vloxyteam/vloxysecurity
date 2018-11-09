// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/SummarizeAttributes.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"sumAttributesIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.summarizeAttributes}\x3c/label\x3e\r\n              \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.summarizeAttributes}\x3c/a\x3e\r\n              \x3c/nav\x3e               \r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable" style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_toolDescription" \x3e\x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputFeatures}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.fieldLabel}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e  \r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"fields"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n                 \x3cdiv data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_allFeaturesCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n                 ${i18n.allFeaturesToOne}\r\n              \x3c/label\x3e \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n                 \x3cdiv data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_byFieldsCheck" data-dojo-props\x3d"checked:true" data-dojo-attach-event\x3d"onChange:_handleFieldsCheckChange"\x3e\x3c/div\x3e\r\n                 ${i18n.byFields}\r\n              \x3c/label\x3e \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect multiple\x3d"true"  class\x3d"esriLeadingMargin1" style\x3d"width:100%;margin-top:10px;" data-dojo-props\x3d"required:true" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-attach-point\x3d"_fieldSelect"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.addStatsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"summaryFields"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_afterStatsRow"\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3c!--\x3ctr data-dojo-attach-point\x3d"_datastoreLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_datastoreLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.datastoreLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"dataStore"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e \r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_selectDataStore"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_datastoreSelect"\x3e\r\n                \x3coption value\x3d"relational"\x3e${i18n.relationalDS}\x3c/option\x3e\r\n                \x3coption value\x3d"spatialtemporal" selected\x3d"true"\x3e${i18n.spatialDS}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e --\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"_exprDialog" class\x3d"esriBufExpressDialog"\x3e\r\n      \x3cdiv style\x3d"width:30em;height:15em;"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"_expressionCtr"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/SummarizeAttributes","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog dojox/form/CheckedMultiSelect ../../kernel ../../lang ./AnalysisBase ./utils ./CreditEstimator ./_AnalysisOptions dojo/i18n!../../nls/jsapi dojo/text!./templates/SummarizeAttributes.html".split(" "),
function(v,l,e,m,n,f,w,J,p,k,K,h,x,y,z,A,B,C,D,E,q,L,M,N,r,O,P,Q,R,S,T,F,t,G,g,U,H,u,I){l=l([A,B,C,D,E,H,G],{declaredClass:"esri.dijit.analysis.SummarizeAttributes",templateString:I,widgetsInTemplate:!0,inputLayer:null,fields:[],summaryFields:null,outputLayerName:null,i18n:null,toolName:"SummarizeAttributes",helpFileName:"SummarizeAttributes",resultParameter:"output",doRefreshItem:!1,constructor:function(a){this._pbConnects=[];this._statsRows=[];a.fields&&"string"===typeof a.fields&&(a.fields=a.fields.split(","));
a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);m.forEach(this._pbConnects,n.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,u.aggregatePointsTool);e.mixin(this.i18n,u.summarizeAttributesTool)},postCreate:function(){this.inherited(arguments);y.add(this._form.domNode,"esriSimpleForm");k.set(this._fieldSelect.selectNode,"width","90%");this._outputLayerInput.set("validator",e.hitch(this,this.validateServiceName));
this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},b={},c=this.constructAnalysisInputLyrObj(this.inputLayer,!0);a.inputLayer=c;a.fields=!0===this._byFieldsCheck.get("checked")?this._fieldSelect.get("value").toString():"[]";a.summaryFields=f.toJson(this.get("summaryFields"));this.returnFeatureCollection||(a.OutputName=
f.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=f.toJson({extent:this.map.extent._normalize(!0)}));b.jobParams=a;b.itemParams={description:p.substitute(this.i18n.itemDescription,{inputLayername:this.inputLayer.name}),tags:p.substitute(this.i18n.itemTags,{inputLayername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.showGeoAnalyticsParams&&
(b.isSpatioTemporalDataStore=!0);this.execute(b)}},_handleShowCreditsClick:function(a){a.preventDefault();a={};this._form.validate()&&(a.inputLayer=f.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),a.fields=!0===this._byFieldsCheck.get("checked")?this._fieldSelect.get("value").toString():"[]",a.summaryFields=f.toJson(this.get("summaryFields")),this.returnFeatureCollection||(a.OutputName=f.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&
(a.context=f.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(e.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleBrowseItemsSelect:function(a){a&&a.selection&&g.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,widget:this}).always(e.hitch(this,this._updateAnalysisLayerUI,!0))},_handleAttrSelectChange:function(a){var b;"0"!==
a&&(b=this.get("statisticSelect"),(a=this.getOptions(a))&&a.type&&g.addStatisticsOptions({selectWidget:b,type:a.type,showGeoAnalyticsParams:this.showGeoAnalyticsParams}),"0"===b.get("value")||b.get("isnewRowAdded")||(a=b.get("removeTd"),k.set(a,"display","block"),a=b.get("referenceWidget"),e.hitch(a,a._createStatsRow)(),b.set("isnewRowAdded",!0)))},_handleStatsValueUpdate:function(a,b,c){this.get("attributeSelect")&&(a=this.get("attributeSelect"),a.get("value")&&"0"!==a.get("value")&&c&&"0"!==c&&
!this.get("isnewRowAdded")&&(c=this.get("removeTd"),k.set(c,"display","block"),c=this.get("referenceWidget"),e.hitch(c,c._createStatsRow)(),this.set("isnewRowAdded",!0)))},_handleFieldsCheckChange:function(){this._fieldSelect.set("disabled",!0!==this._byFieldsCheck.get("checked"))},_save:function(){},_buildUI:function(){var a=!0;g.initHelpLinks(this.domNode,this.showHelp);this.inputLayers&&this.inputLayer&&!g.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer);
this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]);g.populateAnalysisLayers(this,"inputLayer","inputLayers");g.addReadyToUseLayerOption(this,[this._analysisSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.fields&&0<this.fields.length&&(a=!1);this.summaryFields&&(a=!1,this._createStatsRow(!a),m.forEach(this.summaryFields,function(a){this._currentAttrSelect.set("value",a.onStatisticField);this._currentStatsSelect.set("value",
a.statisticType)},this));k.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(e.hitch(this,function(a){this.folderStore=a;g.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));k.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");k.set(this._showCreditsLink,
"display",!0===this.showCredits?"block":"none");this._updateAnalysisLayerUI(a);this._loadConnections()},_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",e.hitch(this,"_onClose",!1))},_createStatsRow:function(a){var b,c,d,f;b=h.create("tr",null,this._afterStatsRow,"before");d=h.create("td",{style:{width:"45%",maxWidth:"100px"}},b);c=h.create("td",{style:{width:"55%",maxWidth:"104px"}},b);d=new r({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",
style:{tableLayout:"fixed",overflowX:"hidden"}},h.create("select",null,d));g.addAttributeOptions({selectWidget:d,layer:this.inputLayer,allowStringType:this.showGeoAnalyticsParams});c=new r({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},h.create("select",null,c));g.addStatisticsOptions({selectWidget:c,showGeoAnalyticsParams:!0});d.set("statisticSelect",c);d.set("showGeoAnalyticsParams",this.showGeoAnalyticsParams);d._onChangeHandle=z.pausable(d,"change",this._handleAttrSelectChange);
a?d._onChangeHandle.pause():d._onChangeHandle.resume();this.showGeoAnalyticsParams&&d.watch("value",this._handleAtrrValueUpdate);f=h.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},b);a=h.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+v.toUrl("./images/close.gif")+"' border\x3d'0''/\x3e"},f);n.connect(a,"onclick",e.hitch(this,this._removeStatsRow,b));this._statsRows.push(b);c.set("attributeSelect",d);
c.set("removeTd",f);c.set("isnewRowAdded",!1);c.set("referenceWidget",this);c.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=c;this._currentAttrSelect=d;return!0},_removeStatsRow:function(a){m.forEach(q.findWidgets(a),function(a){a.destroyRecursive()});h.destroy(a)},_removeStatsRows:function(){m.forEach(this._statsRows,this._removeStatsRow,this);this._statsRows=[]},_handleAnalysisLayerChange:function(a){"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),
this._isAnalysisSelect=!0,this._browsedlg.show()):"browselayers"===a?(this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),a.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",a),this._browseLyrsdlg.browseItems.plugIn.checkGeometryType=!1,this._browseLyrsdlg.browseItems.plugIn.checkLayerType=!0),this._isAnalysisSelect=!0,this._browseLyrsdlg.show()):(this.inputLayer=this.inputLayers[a],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(a){this.inputLayer&&
(g.addAttributeOptions({selectWidget:this._fieldSelect,layer:this.inputLayer,allowStringType:this.showGeoAnalyticsParams,allowSelectLabel:!1}),!a&&this.fields&&0<this.fields.length&&this._fieldSelect.set("value",this.fields),a&&(this._removeStatsRows(),this._createStatsRow(),this.outputLayerName=p.substitute(this.i18n.outputLayerName,{inputLayername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",
this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){t.isDefined(a)&&(this.inputLayer=a)},_setSummaryFieldsAttr:function(a){this.summaryFields=a},_getSummaryFieldsAttr:function(){var a=[],b,c;x(".statsSelect",this.domNode).forEach(function(d,e){b=q.byNode(d);c=b.get("attributeSelect");"0"!==c.get("value")&&"0"!==b.get("value")&&(d={},d.statisticType=b.get("value"),d.onStatisticField=c.get("value"),a.push(d))});return a},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",
a)},validateServiceName:function(a){return g.validateServiceName(a,{textInput:this._outputLayerInput})},_setInputLayersAttr:function(a){t.isDefined(a)&&(this.inputLayers=a)},_connect:function(a,b,c){this._pbConnects.push(n.connect(a,b,c))}});w("extend-esri")&&e.setObject("dijit.analysis.SummarizeAttributes",l,F);return l});