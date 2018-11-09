// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/locator/SectionJsonsBuilder",["dojo/_base/lang","../../sections/SectionTypes","../../grid/coreUtils/GridDataUtil","esri/dijit/geoenrichment/utils/FieldUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(p,w,q,t,x){var f={buildSectionJsonsAndStat:function(b){var a=f._collectGridDataObjectsAndStats(b);return a&&a.gridDataObjects.length?{sectionJsons:f._splitRowsByPages(a.gridDataObjects,b).map(function(a){return f._buildSectionJsonForPage(a,
b)}),stats:a.stats,unitedSectionJson:f._buildSectionJsonForPage(a.gridDataObjects,b)}:null},_collectGridDataObjectsAndStats:function(b){var a=b.calculator,f=b.filterRanges,n=b.searchTextRe,l=b.locatorPointsController;if(!a||!a.data)return null;var g=b.infographicJson.dataSectionJson.stack[0],h=g.data.data[0],k={numPointsTotal:0,numPointsShown:0,ranges:{}},c;for(c in h.fieldInfos){var m=h.fieldInfos[c];t.isNumericField(m)&&(k.ranges[m.name]={fieldName:m.name,alias:m.alias,min:Infinity,max:-Infinity,
decimals:m.decimals})}var r=[];[a.data].concat(a.comparisonLevels).forEach(function(a,b){var e={style:p.clone(h.style),fieldInfos:{}};k.numPointsTotal++;var u=!1,m=!1,v=!1;g.data.columns.forEach(function(c){var g=h.fieldInfos[c.field],d=a[g.name];if(t.isNumericField(g)&&"number"===typeof d&&!isNaN(d)){var l=k.ranges[g.name];l.min=Math.min(l.min,d);l.max=Math.max(l.max,d)}void 0===d||"string"===typeof d?e[c.field]=d||"":(e[c.field]=x.formatNumber(d,{places:g.decimals,preserveTrailingZeroes:!0}),q.setNumericDataValue(d,
e,c.field));e.__pointIndex=b;(c=f&&f[g.name])&&(d<c.min||d>c.max)&&(u=!0);n&&"string"===typeof d&&(m=!0,n.test(d)&&(v=!0))});var c=u||m&&!v;c||(r.push(e),k.numPointsShown++);l&&l.setPointVisibleAt(b,!c)});b.sorting&&r.sort(function(a,c){var e=q.getNumericDataValue(a,b.sorting.field),e=void 0!==e?e:a[b.sorting.field];a=q.getNumericDataValue(c,b.sorting.field);a=void 0!==a?a:c[b.sorting.field];c="number"===typeof e?e-a:e.localeCompare(a);return"desc"===b.sorting.order?-c:c});return{stats:k,gridDataObjects:r}},
_splitRowsByPages:function(b,a){var f=a.infographicJson.scaleToFitHeight?a.minRowHeight:a.infographicJson.headerSectionJson.stack[0].data.data[0].style.height,n=a.infographicJson.scaleToFitHeight?a.minRowHeight:a.infographicJson.dataSectionJson.stack[0].data.data[0].style.height,l=f+n*b.length<=a.height,g=[],h,k=0;b.forEach(function(b){h||(h=[],g.push(h),k+=f);h.push(b);k+=n;k+n>(l?a.height:a.pageHeight)&&(h=null,k=0)});return g},_buildSectionJsonForPage:function(b,a){a=a.infographicJson.headerSectionJson.stack[0];
b={id:"table",attributes:{},style:{width:a.style.width},data:{columns:p.clone(a.data.columns),data:[p.clone(a.data.data[0])].concat(b)}};return{type:w.DETAILS,stack:[b]}}};return f});