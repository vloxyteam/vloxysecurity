// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/columnBarLine/_BarSizeCalculator",["../../ChartTypes","../utils/ChartDataUtil","../ChartPlots","./_ComparisonUtil","../../ChartBarThickness"],function(h,p,k,m,l){function n(a,b,d,c){var e=c.renderColumnBarsInOppositeDirections&&1<b;a=d/(a||1)/(c.isStacked?1:e?Math.round(b/2):b);a=Math.round(a);return a=c.columnBarGap?a-c.columnBarGap:c.columnThickness===l.SMALL?.25*a:c.columnThickness===l.LARGE?.75*a:.5*a}return{updateBarSize:function(a){var b=
a.chart,d=a.visualProperties,c=a.comparisonInfo,e=a.seriesItems,f=a.chartType;a=a.chartSize;if(b&&f!==h.LINE){a=a||d[h.isColumnLike(f)?"width":"height"];var g=0;e.forEach(function(a){g=Math.max(g,a.points.length)});d=n(g,m.getEffectiveNumberOfSeries(e,f,c),a,d);b.getPlot(k.PRIMARY).opt.maxBarSize=d;b.getPlot(k.PRIMARY).opt.minBarSize=d;b.dirty=!0}}}});