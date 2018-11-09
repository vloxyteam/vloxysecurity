// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/AppendData.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_appenddataToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e\r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"appendDataIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.appendData}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.appendData}\x3c/a\x3e\r\n                \x3c/nav\x3e\r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_appendDataTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1  longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_inputLayerSelect" data-dojo-attach-event\x3d"onChange:_handleInputLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"alert alert-yellow is-active" data-dojo-attach-point\x3d"_alert"\x3e\r\n              ${i18n.inputWarningLabel}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"alert alert-red" data-dojo-attach-point\x3d"_alertHosted"\x3e\r\n              ${i18n.inputHostedLayerWarning}\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.appendLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"appendLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1  longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_appendLayerSelect" data-dojo-attach-event\x3d"onChange:_handleAppendLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.filterLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"filter"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1 esriFloatTrailing"\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.queryLabel}\',iconClass:\'esriAnalysisAttributeFiltercon\',showLabel:false" data-dojo-attach-point\x3d"_filterBtn" data-dojo-attach-event\x3d"onClick:_handleFilterBtnClick"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2" data-dojo-attach-point\x3d"_filterLabel"\x3e\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.fieldMappingLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"fieldMapping"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_dataGridRow" id\x3d"noStripedGrid" class\x3d"no-striped-rows"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1 longInput" style\x3d"max-height:15em;" data-dojo-attach-point\x3d"_dataGridDiv"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_appenddataToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n          \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n        \x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n      ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.expression}" data-dojo-props\x3d"closable:false" data-dojo-attach-point\x3d"_filterDialog" style\x3d"width:65em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_filterForm" data-dojo-type\x3d"esri/dijit/analysis/ExpressionForm" data-dojo-props\x3d"showFirstRow:false,primaryActionButttonClass: \'${primaryActionButttonClass}\'"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"_exprDialog" class\x3d"esriBufExpressDialog"\x3e\r\n      \x3cdiv class\x3d"esriBufExpressionFormCtr"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"_expressionCtr"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n    \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n    \x3c/a\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/AppendData","../../kernel ../../lang ../../layers/FeatureLayer ../../symbols/CartographicLineSymbol ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../symbols/SimpleMarkerSymbol ../../tasks/query ../CalculateField ./_AnalysisOptions ./AnalysisBase ./AnalysisRegistry ./CreditEstimator ./ItemTypes ./storeUtils ./utils dgrid1/Editor dgrid1/extensions/ColumnResizer dgrid1/extensions/DijitRegistry dgrid1/Keyboard dgrid1/OnDemandGrid dgrid1/Selection dgrid1/Selector dijit/_FocusMixin dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/registry dojo/_base/array dojo/_base/Color dojo/_base/connect dojo/_base/declare dojo/_base/fx dojo/_base/json dojo/_base/lang dojo/aspect dojo/data/ObjectStore dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-prop dojo/dom-style dojo/fx/easing dojo/has dojo/i18n!../../nls/jsapi dojo/json dojo/query dojo/store/Memory dojo/store/Observable dojo/string dojo/i18n!./nls/AppendData dojo/text!./templates/AppendData.html require".split(" "),
function(y,g,k,w,z,l,A,B,t,u,H,h,ba,e,x,f,I,J,K,L,M,N,O,P,Q,R,S,T,ca,da,ea,U,fa,ga,ha,ia,d,m,C,D,E,n,c,V,ja,v,p,ka,la,q,F,W,X,ma,na,oa,pa,G,Y,Z,qa){var aa=D([M,I,L,N,O,J,K]);u=D([S,R,T,Q,P,u,H],{declaredClass:"esri.dijit.analysis.AppendData",templateString:Z,widgetsInTemplate:!0,inputLayer:void 0,appendLayer:void 0,appendLayers:[],fieldMapping:[],filter:{},inputLayers:[],isAppendToLayerSelected:!0,primaryActionButttonClass:"btn calcite primary",toolName:"AppendData",helpFileName:"AppendData",resultName:"",
constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);d.forEach(this._pbConnects,C.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,Y);c.mixin(this.i18n,X.expressionGrid)},postCreate:function(){this.inherited(arguments);p.add(this._form.domNode,"esriSimpleForm");this._buildUI();this._outputLayerInput.set("validator",c.hitch(this,this.validateServiceName))},
startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_buildJobParams:function(){var a={};a.inputLayer=n.toJson(this.constructAnalysisInputLyrObj(this.inputLayer,this.showGeoAnalyticsParams));a.appendLayer=this.constructAnalysisInputLyrObj(this.appendLayer,this.showGeoAnalyticsParams);a.fieldMapping=n.toJson(this.getFieldMappingForRest());this.isValidFilter(this.filter)&&!this.checkIfAppendLayerHasFilter()?a.appendLayer.filter=this.filter.expression.where:
this.isValidFilter(this.filter)&&this.appendLayer.filter&&(a.appendLayer.filter+="AND "+this.filter.expression.where);a.appendLayer=n.toJson(a.appendLayer);this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=n.toJson({extent:this.map.extent._normalize(!0)}));if(this.returnFeatureCollection){var b={outSR:this.map.spatialReference};this.showChooseExtent&&this._useExtentCheck.get("checked")&&(b.extent=this.map.extent._normalize(!0));a.context=n.toJson(b)}return a},isValidFilter:function(a){return a&&
a.expression&&a.expression.where},checkIfAppendLayerHasFilter:function(){return this.appendLayer.filter?-1<this.appendLayer.filter.toLowerCase().indexOf(this.filter.expression.where.toLowerCase().trim()):!1},getFieldMappingForRest:function(){return d.map(this.inputLayer.fields,function(a,b){b=this.mappedFields[b];return{inputLayerField:a.name,mappingType:"Expression"===b.alias?"Expression":"AppendField",mappingValue:b.name}},this)},_handleSaveBtnClick:function(a){this._form.validate()&&(a={},this._saveBtn.set("disabled",
!0),a.jobParams=this._buildJobParams(),this.showGeoAnalyticsParams&&(a.isSpatioTemporalDataStore=!0),this.execute(a))},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(c.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))},_save:function(){},_buildUI:function(){this.set("showReadyToUseLayers",!1);this.signInPromise.then(c.hitch(this,f.initHelpLinks,this.domNode,this.showHelp,
{analysisGpServer:this.analysisGpServer}));this.get("showSelectAnalysisLayer")&&(this.inputLayer=this.setDefaultLayer(this.inputLayer,this.inputLayers),f.populateAnalysisLayers(this,"inputLayer","inputLayers",{layerSelect:this._inputLayerSelect}));this.setAlert();this.filterAppendLayers(this.inputLayer);this.appendLayer=this.setDefaultLayer(this.appendLayer,this.appendLayers);f.populateAnalysisLayers(this,"appendLayer","appendLayers",{layerSelect:this._appendLayerSelect,postIncrement:1});this.appendLayer&&
this.setSelectionLayer();f.addReadyToUseLayerOption(this,[this._inputLayerSelect,this._appendLayerSelect]);q.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");q.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.setFilterBtn();this.setFieldMapping();this._loadConnections()},setFilterBtn:function(){this._filterBtn.set("disabled",!g.isDefined(this.appendLayer))},setDefaultLayer:function(a,b){a&&b&&!f.isLayerInLayers(a,b)&&b.push(a);return a||
!b||this.rerun?a:b[0]},setFieldMapping:function(a){a?this.updateMappedFieldsForRerun(a):this.getInputAndAppendFieldMatch();0<this.mappedFields.length&&this.setDataGrid()},updateMappedFieldsForRerun:function(a){this.mappedFields=d.map(a,function(a,r){if("AppendField"===a.appendType)return d.filter(this.appendLayer.fields,function(b){return b.name===a.appendTypeValue},this)[0];if("Expression"===a.appendType)return{name:a.appendTypeValue,alias:a.appendTypeValue}},this)},getInputAndAppendFieldMatch:function(){this.mappedFields=
[];if(g.isDefined(this.inputLayer)&&g.isDefined(this.appendLayer)){this.inputFields=this.inputLayer.fields;var a=this.appendLayer.fields;d.forEach(this.inputFields,function(b){this.mappedFields.push(this.getMappingFieldAndTypes(b,a))},this)}},getMappingFieldAndTypes:function(a,b){b=d.filter(b,function(b){return b.name.toLowerCase()===a.name.toLowerCase()&&b.type===a.type});return 0<b.length?b[0]:{name:"null",alias:"Expression"}},setAlert:function(){g.isDefined(this.inputLayer)?(p.add(this._alert,
"is-active"),this.setAlertHostedLayer(!1)):p.remove(this._alert,"is-active")},setAlertHostedLayer:function(a){a?p.add(this._alertHosted,"is-active"):p.remove(this._alertHosted,"is-active")},_handleInputLayerChange:function(a){this.isAppendToLayerSelected=!0;this._checkBrowseLayer(a,!0)||(this.inputLayer=this.inputLayers[a],this.getUserProfile().then(c.hitch(this,function(a){this.inputLayer&&this.verifyInputLayer(a);this.setAlert();g.isDefined(this.inputLayer)&&(this.filterAppendLayers(this.inputLayer),
this.updateSelectLayerOptions(this.appendLayer,this.appendFilteredLayers,this._appendLayerSelect),this.setFieldMapping())})))},_handleAppendLayerChange:function(a){this.isAppendToLayerSelected=!1;this._checkBrowseLayer(a,!1)||(this.appendLayer=this.appendFilteredLayers[a-1],g.isDefined(this.appendLayer)&&(this.setSelectionLayer(),this.setFilterBtn(),this.clearFilter(),this.isSameLayer(this.inputLayer,this.appendLayer)&&(this.appendLayer=void 0,this.updateSelectLayerOptions(this.appendLayer,this.appendFilteredLayers,
this._appendLayerSelect))));this.setFieldMapping()},verifyInputLayer:function(a){f.isPortalHostedService(this.inputLayer&&this.inputLayer.url)&&this.isLayerEditable(this.inputLayer,a)||(this.setAlertHostedLayer(!0),this.inputLayers=d.filter(this.inputLayers,function(a){return!this.isSameLayer(this.inputLayer,a)&&f.isPortalHostedService(a&&a.url)},this),this.inputLayer=void 0,this.updateSelectLayerOptions(this.inputLayer,this.inputLayers,this._inputLayerSelect),this._inputLayerSelect.removeOption(this._inputLayerSelect.get("selectedOption")),
this._inputLayerSelect.set("value",""))},isLayerEditable:function(a,b){return a&&0<=a.capabilities.indexOf("Create")||this.isAdmin(b)||this.isOwner(a,b)?!0:!1},updateSelectLayerOptions:function(a,b,r){var c=a&&[]||[{label:" ",value:""}];d.forEach(b,function(b,d){d={value:"_inputLayerSelect"===r.dojoAttachPoint?d:d+1,label:b.name};a&&(b.name===a.name||b.url&&a.url&&b.url===a.url)&&(d.selected=!0);c.push(d)});(this.get("showReadyToUseLayers")||this.get("showBrowseLayers"))&&c.push({type:"separator",
value:""});this.get("showReadyToUseLayers")&&c.push({value:"browse",label:this.i18n.browseAnalysisTitle});this.get("showBrowseLayers")&&c.push({value:"browselayers",label:this.i18n.browseLayers});r.removeOption(r.getOptions());r.addOption(c)},isSameLayer:function(a,b){return a&&b&&a.url&&b.url&&a.url===b.url},filterAppendLayers:function(a){this.appendFilteredLayers=d.filter(this.appendLayers,c.hitch(this,function(b){return!this.isSameLayer(a,b)&&this.isSimilarTypeAsInput(b)}));if(this.isSameLayer(a,
this.appendLayer)||!this.isSimilarTypeAsInput(this.appendLayer))this.appendLayer=void 0},_checkBrowseLayer:function(a,b){return"browselayers"===a?(this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),f.isBigDataTypeTobeAdded(a.types)&&!b&&(a.types.push('type:"'+e.BIGDATA+'"'),this._browseLyrsdlg.browseItems.set("query",a))),this._filterLayersForGeometryType(b),this._browseLyrsdlg.show(),!0):!1},_filterLayersForGeometryType:function(a){this.showGeoAnalyticsParams&&(this._browseLyrsdlg.browseItems.plugIn.layerTypes=
[e.TABLE,e.BTABLE,e.FLAYER,e.BDATAFEATURE],this._browseLyrsdlg.browseItems.plugIn.checkGeometryType=!0,this._browseLyrsdlg.browseItems.plugIn.checkLayerType=!0,this._browseLyrsdlg.browseItems.plugIn.geometryTypes=[void 0,h.GeometryTypes.Polygon,h.GeometryTypes.Point,h.GeometryTypes.Line],this.inputLayer&&!a&&((a=this.inputLayer.geometryType)?this._browseLyrsdlg.browseItems.plugIn.geometryTypes=[a]:this._browseLyrsdlg.browseItems.plugIn.layerTypes=[e.BTABLE,e.TABLE]))},setFilterForm:function(){this._filterForm.set("showUnique",
!this.isBigDataorTable());this._filterForm.set("showFirstRow",!1);this._filterForm.set("firstOperands",[this.appendLayer]);this._filterForm.set("inputOperands",[this.appendLayer]);this._filterForm.set("selectedFirstOperand",this.appendLayer);this._filterForm.init()},isBigDataorTable:function(){return this.appendLayer&&(this.appendLayer.type===e.BDATAFEATURE||this.appendLayer.type===e.BTABLE)},_handleBrowseItemsSelect:function(a){a&&a.selection&&f.addAnalysisReadyLayer({item:a.selection,layers:this.isAppendToLayerSelected?
this.inputLayers:this.appendFilteredLayers,layersSelect:this.isAppendToLayerSelected?this._inputLayerSelect:this._appendLayerSelect,browseDialog:a.dialog||this._browsedlg,posIncrement:this.isAppendToLayerSelected?0:1,widget:this}).then(c.hitch(this,function(a){this.appendLayers.push(a)}))},_handleFilterBtnClick:function(){this.setFilterForm();this._isAttrFlag=!0;this._filterForm.set("showUnique",!this.isBigDataorTable());this.filter?(this._filterForm.set("action","edit"),this._filterForm.set("expression",
this.filter.expression)):this._filterForm.set("action","add");this._filterDialog.show()},_handleExpressionFormAdd:function(a){if("add"===a.action||"edit"===a.action){v.set(this._filterLabel,"innerHTML",G.trim(a.expression._attributeText));this.filter=a;var b;b=new B;b.returnGeometry=!0;b.where=a.expression.where;this.selectionLayer&&this.selectionLayer.selectFeatures(b,k.SELECTION_ADD)}this._filterDialog.hide()},_handleExpressionFormCancel:function(){this._filterDialog.hide()},clearFilter:function(){this.filter=
void 0;v.set(this._filterLabel,"innerHTML","")},setSelectionLayer:function(){this.selectionLayer&&this.selectionLayer.clearSelection();this.selectionLayer=new k(this.appendLayer.url&&!this.appendLayer._collection?this.appendLayer.url:this.appendLayer.toJson(),{outFields:["*"],mode:this.appendLayer.url&&!this.appendLayer._collection?k.MODE_SELECTION:k.MODE_SNAPSHOT});this.selectionLayer.setRenderer(null);if(this.selectionLayer.loaded)this._onSelectionLayerLoad(this.appendLayer,this.selectionLayer);
else this.selectionLayer.on("load",c.hitch(this,this._onSelectionLayerLoad,this.appendLayer,this.selectionLayer))},setDataGrid:function(){this.dataFieldGrid?(this.dataFieldGrid.set("columns",this.getColumns()),this.dataFieldGrid.set("collection",x.createStore(this.prepareData()))):(this.dataFieldGrid=new aa({collection:x.createStore(this.prepareData()),cellNavigation:!1,columns:this.getColumns(),renderRow:this.updateGridRow,selectionMode:"single"},this._dataGridDiv),this.dataFieldGrid.startup(),this.updateSelectOptions(),
this.updateMappedOnChange())},getOptionStore:function(a){var b=this.getMappedFields(),c=this.getUnmappedFields(),f={type:"separator",value:""},e=[{value:"Expression",label:this.i18n.expression},{value:"null",label:"null"}];0<c.length&&(e=e.concat(f).concat(c));0<b.length&&(e=e.concat(f).concat(b));var g=!1;d.forEach(e,function(b){b.value!==a||g||"Expression"===a||(g=b.selected=!0)});return e=[{label:"",value:"",selected:!g}].concat(e)},prepareData:function(){var a=this.mappedFields,b=[];d.forEach(this.inputLayer.fields,
function(c,d){b.push({inputField:c,mappedField:a[d],inputFieldName:c.name,mappedFieldName:a[d].name})});return b},getMappedFields:function(){var a=d.filter(this.mappedFields,function(a){return a&&"null"!==a.name&&(!this.selectedField||!a.type||this.selectedField.type===a.type)},this);return this.getOptionObject(a)},getUnmappedFields:function(){var a=d.filter(this.appendLayer.fields,function(a){return 0>this.mappedFields.indexOf(a)&&(!this.selectedField||this.selectedField.type===a.type)},this);return this.getOptionObject(a)},
getOptionObject:function(a){return d.map(a,function(a){return{value:a.name,label:a.name}})},getColumns:function(){return[{label:this.i18n.inputField,field:"inputFieldName"},{label:this.i18n.appendValue,field:"mappedFieldName",editor:U,editOn:"click",editorArgs:{style:"width:120px;",maxHeight:-1,sortByLabel:!1,onChange:c.hitch(this,function(a){"Expression"===a&&(this.addExpression(),this.onExpressionSelect())})},autoSave:!0,renderCell:c.hitch(this,function(a,b,c,d){c.innerHTML=b&&"Expression"!==b?
b:"null"})}]},updateGridRow:function(a){var b=this.inherited(arguments);"null"!==a.mappedFieldName&&a.mappedFieldName&&"Expression"!==a.mappedFieldName||(b.className+="dgrid-row-highlight");return b},updateSelectOptions:function(){this.dataFieldGrid.on("dgrid-editor-show",c.hitch(this,function(a){var b=a.cell.row;this.selectedField=b.data.inputField;this.selectedIndex=b.id;a.editor.removeOption(a.editor.getOptions());a.editor.addOption(this.getOptionStore(a.cell.row.data.mappedFieldName))}))},updateMappedOnChange:function(){this.dataFieldGrid.on("dgrid-datachange",
c.hitch(this,function(a){this.selectedIndex=a.cell.row.id;"null"===a.value&&this.updateMappedFields({name:"null",alias:"Expression"});a.value&&"Expression"!==a.value?this.getChangedMappedField(!0,a):this.getChangedMappedField(!1,a)}))},getChangedMappedField:function(a,b){var c=d.filter(this.appendLayer.fields,function(c){return c.name===(a?b.value:b.oldValue)});c[0]&&this.updateMappedFields(c[0])},updateMappedFields:function(a){this.mappedFields[this.selectedIndex]=a;this.dataFieldGrid.set("collection",
x.createStore(this.prepareData()))},onExpressionSelect:function(){this._calcField.set("expression","");y.show(this._calcField.domNode);this._exprDialog.show()},addExpression:function(){if(this._calcField)this._calcField&&this._calcField.layer!==this.appendLayer&&(this._calcField.reset(),this._calcField.set("layer",this.appendLayer));else{var a=f.getExprFunctions();this._calcField=new t({expressionMode:t.MODE_ARCADE,arcadeEditor:this.arcadeEditor,map:this.map,layer:this.appendLayer,field:this.i18n.bufField,
baseClass:"esriBufFieldExp",helperMethods:a,showHelp:!1,css:{addButton:"btn calcite primary",closeButton:"btn calcite cancel"},helperType:"numeric",showHeader:!1,calculateLabel:this.i18n.add,expression:this.expression||null},this._expressionCtr);this._calcField.startup();if(this._calcField.expressionMode===t.MODE_SQL)q.set(this._calcField._validateBtn.domNode,"display","none"),this._calcField._handleHelperTypeChange("value",null,{functionType:"NumType"}),this._aspectHandle=V.around(this._calcField,
"_handleAddFieldButtonClick",c.hitch(this,function(a){return c.hitch(this,function(a,b){a=this._calcField.get("expression")[0];this.updateMappedFields({alias:"Expression",name:a.sqlExpression});this._exprDialog.hide()})}));else if(this._calcField.expressionMode===t.MODE_ARCADE)this._calcField.on("expression-add",c.hitch(this,function(a){this.updateMappedFields({alias:"Expression",name:a.expression});this._exprDialog.hide()}));this._calcField.on("close",c.hitch(this,function(){this._exprDialog.hide()}))}},
_onSelectionLayerLoad:function(a,b){var d=this.filter&&this.filter.filter||"";b.setScaleRange(a.minScale,a.maxScale);this._connect(a,"onScaleRangeChange",c.hitch(this,function(a,b){a.setScaleRange(b.minScale,b.maxScale)},b,a));this.map.addLayer(b);"esriGeometryPoint"===b.geometryType||"esriGeometryMultPoint"===b.geometryType?(a=new A,a.setStyle(A.STYLE_TARGET),a._setDim(16,16,0),a.setOutline(new w(l.STYLE_SOLID,new m([0,255,255]),2,w.CAP_ROUND,w.JOIN_ROUND)),a.setColor(new m([0,0,0,0])),b.setSelectionSymbol(a)):
"esriGeometryPolyline"===b.geometryType?b.setSelectionSymbol(new l(l.STYLE_SOLID,new m([0,255,255]),2)):"esriGeometryPolygon"===b.geometryType&&b.setSelectionSymbol(new z(z.STYLE_NULL,new l(l.STYLE_SOLID,new m([0,255,255]),2),new m([0,0,0,0])));this.selectionLayer&&d&&(d.match(/ OR /g)?this._isAttrFlag=!1:(this._isAttrFlag=!0,v.set(this._filterLabel,"innerHTML",G.trim(d)),this._expression={action:"edit",expression:{layer:0,where:d,_attributeText:d,_attributeExprObj:this.attributeExprObj}}),b=new B,
b.returnGeometry=!0,b.where=d,this.selectionLayer.selectFeatures(b,k.SELECTION_ADD))},_loadConnections:function(){this.on("start",c.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",c.hitch(this,"_onClose",!1));this._filterForm.on("add-expression",c.hitch(this,this._handleExpressionFormAdd));this._filterForm.on("cancel-expression",c.hitch(this,this._handleExpressionFormCancel))},_showMessages:function(a){v.set(this._bodyNode,"innerHTML",a);E.fadeIn({node:this._errorMessagePane,easing:F.quadIn,
onEnd:c.hitch(this,function(){q.set(this._errorMessagePane,{display:""})})}).play();window.setTimeout(c.hitch(this,this._handleCloseMsg),3E3)},_handleCloseMsg:function(a){a&&a.preventDefault();E.fadeOut({node:this._errorMessagePane,easing:F.quadOut,onEnd:c.hitch(this,function(){q.set(this._errorMessagePane,{display:"none"})})}).play()},isLayerAllowed:function(a){return a&&a.type===e.TABLE||a.type===e.BTABLE||a.geometryType===h.GeometryTypes.Point||a.geometryType===h.GeometryTypes.Polygon||a.geometryType===
h.GeometryTypes.Line},isSimilarTypeAsInput:function(a){return this.inputLayer&&a&&a.type===this.inputLayer.type&&a.geometryType==this.inputLayer.geometryType},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.getUserProfile().then(c.hitch(this,function(b){this.isLayerEditable(a,b)&&f.isPortalHostedService(a&&a.url)?this.inputLayer=a:this.inputLayer=void 0;this.updateSelectLayerOptions(this.inputLayer,
this.inputLayers,this._inputLayerSelect)}))},_setInputLayersAttr:function(a){this.getUserProfile().then(c.hitch(this,function(b){this.inputLayers=d.filter(a,function(a){return f.isPortalHostedService(a&&a.url)&&this.isLayerEditable(a,b)&&this.isLayerAllowed(a)},this);this.inputLayer=this.setDefaultLayer(this.inputLayer,this.inputLayers);this.updateSelectLayerOptions(this.inputLayer,this.inputLayers,this._inputLayerSelect);this.set("appendLayers",a)}))},_setAppendLayerAttr:function(a){this.appendLayer=
!this.isSameLayer(this.inputLayer,a)&&a},_setAppendLayersAttr:function(a){this.appendLayers=a;this.filterAppendLayers(this.inputLayer);this.appendLayer=this.setDefaultLayer(this.appendLayer,this.appendFilteredLayers);this.updateSelectLayerOptions(this.appendLayer,this.appendFilteredLayers,this._appendLayerSelect)},_setFilterAttr:function(a){this.filter=a},_setFieldMappingAttr:function(a){this.fieldMapping=a},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},validateServiceName:function(a){return f.validateServiceName(a,
{textInput:this._outputLayerInput})},_connect:function(a,b,c){this._pbConnects.push(C.connect(a,b,c))}});W("extend-esri")&&c.setObject("dijit.analysis.AppendData",u,y);return u});