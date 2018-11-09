// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/LocatorTableInfographic.html":'\x3cdiv class\x3d"esriGELocatorTableInfographic"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"noDataPlaceHolder" class\x3d"locatorTableInfographic_noDataPlaceHolder"\x3e\r\n        \x3cdiv class\x3d"locatorTableInfographic_noDataPlaceHolderImage"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"locatorTableInfographic_noDataPlaceHolderLabel"\x3e${nls.noLocatorData}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"paginationDiv" class\x3d"esriGEAbsoluteStretched"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"pageNavigatorDiv" class\x3d"locatorTableInfographic_pageNavigatorDiv"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"footnoteDiv" class\x3d"locatorTableInfographic_footNoteDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n\r\n'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/locator/LocatorTableInfographic","dojo/_base/declare dojo/_base/lang dojo/when dojo/string dojox/uuid/generateRandomUuid dojo/dom-class dojo/dom-construct dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/Pagination esri/dijit/geoenrichment/PageNavigator ../../supportClasses/ViewModes ../../sections/supportClasses/SectionContentFitModes ../../../dataProvider/supportClasses/AreaDataUtil ./SectionJsonsBuilder ./ExportToExcelUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/InvokeUtil esri/dijit/geoenrichment/utils/RegExpUtil esri/dijit/geoenrichment/utils/WaitingUtil dojo/text!../../templates/LocatorTableInfographic.html dojo/i18n!esri/nls/jsapi".split(" "),
function(g,d,h,t,u,l,n,m,v,w,x,y,p,z,A,B,C,q,e,D,r,E,f){f=f.geoenrichment.dijit.ReportPlayer.Infographics;g=g([v,w],{templateString:E,nls:f,viewModel:null,theme:null,parentWidget:null,isEditMode:!1,minRowHeight:40,maxBulletsLimit:5,pagination:null,pageNavigator:null,_sections:null,_currentInfographicJson:null,_locatorPointsController:null,_isSinglePage:!1,_sectionJsons:null,_analysisArea:null,postCreate:function(){this.inherited(arguments);this._showEmptyView(!1);this._sections=[];this._createPagination();
this._createPageNavigator()},_createPagination:function(){var a=this;this.pagination=(new x({createItemContainer:d.hitch(this,this._createItemContainer),updateItemContainer:d.hitch(this,this._updateItemContainer),scrollAnimation:"slide",cyclicPagination:!1,autoCenter:"stretch:1,1",onPageChanged:function(){a.pageNavigator.setCurrentPageIndex(a.pagination.get("currentPage"))}})).placeAt(this.paginationDiv);this.own(this.pagination);this.pagination.set("items",[]);this.pagination.startup()},_createPageNavigator:function(){var a=
this;this.pageNavigator=(new y({showArrows:!1,getNumPages:function(){return a.pagination.get("items").length},onPageChanged:function(c){a.pagination.set("currentPage",c)}})).placeAt(this.pageNavigatorDiv);this.own(this.pageNavigator)},_createItemContainer:function(){var a=n.create("div",{"class":"locatorTableInfographic_paginationRoot"});a.style.width=this._getPageWidth()+"px";a.style.height=this._getPageHeight()+"px";return a},_updateItemContainer:function(a,c){var k=this;if(a&&a.parentNode){n.empty(a);
var b=this._getSectionByJson(c);b&&b.domNode?b.placeAt(a):(b&&b.destroy(),b={"class":"infographicContainer_Section"},b.initialWidth=this._getPageWidth(),b.json=c,b.viewModel=this.viewModel,b.theme=this.theme,b.tableClass="infographicContainerLocatorTable",b.hasFixedLayout=!1,b.parentWidget=this,b.noContentOffset=!0,b.tableParams={trimTextIfOverflows:!0},d.mixin(b,this._prepareSectionCreationParams()),b=this.viewModel.layoutBuilder.createElement("section",b,a),this._sections.push(b),this._putSectionToHash(b,
c),b.setViewMode(this.isEditMode?p.EDIT:p.PREVIEW_VALUES),b.setResizedHeight(this._getPageHeight()),b.setWidth(this._getPageWidth()),a=b.getTables()[0],this._currentInfographicJson.scaleToFitHeight&&(c=a.store.data.length,c=Math.max(this._getPageHeight(),c*this.minRowHeight),a.resizeToFitHeight(c)),a.onSortingChanged=function(a){k._setSorting(a)},this._sorting&&a.setSorting(this._sorting),b.fitContentNicely({fitMode:z.WIDTH}),this._locatorPointsController&&this._locatorPointsController.registerLocatorTable(a));
return b}},_prepareSectionCreationParams:function(a){return null},_getPageWidth:function(){return this.width},_getPageHeight:function(){return this._isSinglePage&&!this._currentInfographicJson.showNumberOfLocations?this.height:this.height-30},_sectionsHash:null,_getSectionByJson:function(a){this._sectionsHash=this._sectionsHash||{};a._idInPagination||(a._idInPagination=u());return this._sectionsHash[a._idInPagination]},_putSectionToHash:function(a,c){this._sectionsHash&&(this._sectionsHash[c._idInPagination]=
a)},_updatePromise:null,_stats:null,_unitedSectionJson:null,updateInfographic:function(a){if(this.domNode)return this._currentInfographicJson=a,this._currentInfographicJson.locatorCalculatorInfo&&this.viewModel.dynamicReportInfo&&(this._analysisArea=this.viewModel.dynamicReportInfo.analysisArea,this._locatorPointsController=this.viewModel.getLocatorPointsController(this._currentInfographicJson.locatorCalculatorInfo),this.own(this._locatorPointsController)),this.onContentLoadingStart(),this._updatePromise=
e.invoke(this,"_doUpdateContent",50),r.showProgressPromise(this.domNode,this._updatePromise),this._updatePromise.always(function(){this.onContentLoadingEnd()}.bind(this)),this._updatePromise},_doUpdateContent:function(){if(this.domNode&&this.width){this._destroySections();var a=this._buildSectionJsonsAndStat();this._stats=a&&a.stats;this._unitedSectionJson=a&&a.unitedSectionJson;this._sectionJsons=a&&a.sectionJsons;this._showEmptyView(!a);a&&(this._isSinglePage=1===a.sectionJsons.length,l[this._isSinglePage?
"add":"remove"](this.domNode,"singlePage"),this.paginationDiv.style.bottom=this._isSinglePage&&!this._currentInfographicJson.showNumberOfLocations?"":"30px",this.pagination.set("items",a.sectionJsons),this.pageNavigator.showAsBullets(a.sectionJsons.length<=this.maxBulletsLimit),this.pageNavigator.reset(),this._renderNumberOfLocationsFootNote(),this._locatorPointsController&&this._locatorPointsController.setLocatorTableCallbacks({getCellForPointAtFunc:this._getCellForPointAt.bind(this),getPointIndexForCellFunc:this._getPointIndexForCellFunc.bind(this)}),
this._resizeContent(),this.onContentUpdated())}},_buildSectionJsonsAndStat:function(){return B.buildSectionJsonsAndStat({infographicJson:this._currentInfographicJson,calculator:this._getCalculatorData(),filterRanges:this._filterRanges,searchTextRe:this._searchTextRe,sorting:this._sorting,locatorPointsController:this._locatorPointsController,minRowHeight:this.minRowHeight,height:this.height,pageHeight:this._getPageHeight()})},_getCalculatorData:function(){return A.getAreaDataObjectCalculator(this.viewModel.dynamicReportInfo.fieldData.areaData[0],
this._currentInfographicJson.calculatorName)},_renderNumberOfLocationsFootNote:function(){var a=this.getNumPointsShown()||0;this.footnoteDiv.innerHTML=this._currentInfographicJson.showNumberOfLocations&&a?1===a?f.oneClosestLocations||"One closest location":t.substitute(f.numClosestLocations||"Closest ${numPoints} locations",{numPoints:a}):"";l[this.footnoteDiv.innerHTML?"add":"remove"](this.domNode,"hasFootnote")},_getPointIndexForCellFunc:function(a){return a.gridData.__pointIndex},_getCellForPointAt:function(a){var c=
-1,k;this._sectionJsons.some(function(b,d){return b.stack[0].data.data.some(function(e){if(e.__pointIndex===a)return c=d,k=b,!0})});if(-1!==c){this.pagination.set("currentPage",c,!0);var b;this._getSectionByJson(k).getTables()[0].getFieldCells().some(function(c){if(c.gridData.__pointIndex===a)return b=c,!0});return b}},_resizeContent:function(){this.domNode&&(this._syncJsonDimensions(),m.set(this.domNode,{width:this.width+"px",height:this.height+"px"}),this.pagination.resize(),setTimeout(this._syncEmptyViewPlaceholder.bind(this)))},
_syncJsonDimensions:function(){this._currentInfographicJson&&(this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height)},_showEmptyView:function(a){q[a?"hide":"show"]([this.paginationDiv,this.pageNavigatorDiv,this.footnoteDiv]);q[a?"show":"hide"](this.noDataPlaceHolder);l[a?"add":"remove"](this.domNode,"isEmptyState");a&&this._syncEmptyViewPlaceholder()},_syncEmptyViewPlaceholder:function(){this.noDataPlaceHolder&&m.set(this.noDataPlaceHolder,"paddingTop",
(this.height-m.get(this.noDataPlaceHolder,"height"))/2+"px")},_filterRanges:null,_searchText:null,_searchTextRe:null,getStatRanges:function(){return h(this._updatePromise,function(){var a=[];if(this._stats)for(var c in this._stats.ranges)a.push(d.mixin({},this._stats.ranges[c]));return a}.bind(this))},setFilterRanges:function(a){a?(this._filterRanges={},a.forEach(function(a){this._filterRanges[a.fieldName]=a},this)):this._filterRanges=null;e.invoke(this,"_doUpdateContent",50)},setSearchText:function(a){this._searchTextRe=
(this._searchText=a)&&D.createRegExp(a,"i",!0);e.invoke(this,"_doUpdateContent",50)},getNumPointsTotal:function(){return this._stats&&this._stats.numPointsTotal},getNumPointsShown:function(){return this._stats&&this._stats.numPointsShown},_sorting:null,_setSorting:function(a){this._sorting=a;e.invoke(this,"_doUpdateContent",50)},getVisualState:function(){if(!this._filterRanges&&!this._searchText&&!this._sorting)return null;var a;if(this._filterRanges){a=[];for(var c in this._filterRanges)a.push(this._filterRanges[c])}return{filterRanges:a,
searchText:this._searchText,sorting:this._sorting}},setVisualState:function(a){a&&(a.filterRanges&&this.setFilterRanges(a.filterRanges),a.searchText&&this.setSearchText(a.searchText),a.sorting&&this._setSorting(a.sorting))},notifyShown:function(){this._sections.forEach(function(a){a.notifyShown()})},width:null,height:null,resize:function(a,c){void 0!==a&&(this.width=a,this.height=c);e.invoke(this,"_doUpdateContent",50)},toJson:function(){return d.clone(this._currentInfographicJson)},canExportToExcel:function(){return this.viewModel.canExportToExcel()},
exportToExcel:function(){var a=this;return h(this._updatePromise,function(){return h(a.viewModel.pepareExportToExcelParameters({layerID:a._locatorPointsController.getLayerID(),hasMaps:a._locatorPointsController.getMapInfos()&&a._locatorPointsController.getMapInfos().length}),function(c){return r.showProgressPromise(a.domNode,h(a.prepareExportToExcelParameters(c),function(c){return a.viewModel.exportToExcel(c)}))})})},prepareExportToExcelParameters:function(a){a=a||{};return C.prepareExportParameters({areaName:this._analysisArea.name,
areaShortName:this._analysisArea.shortName,layerName:this._locatorPointsController.getLayerName(),layerID:this._locatorPointsController.getLayerID(),sectionJson:this._unitedSectionJson,mapInfos:this._locatorPointsController.getMapInfos(),exportMaps:a.exportMaps})},onContentLoadingStart:function(){},onContentLoadingEnd:function(){},onContentUpdated:function(){},_destroySections:function(){this._stats=null;this._sections.forEach(function(a){a.destroy()});this._sections.length=0},destroy:function(){this._destroySections();
this.inherited(arguments)}});g.MIN_ROW_HEIGHT=40;return g});