// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/customgp/common/nls/ja/main",{common:{apply:"\u9069\u7528",ok:"OK",cancel:"\u30ad\u30e3\u30f3\u30bb\u30eb",yes:"\u306f\u3044",no:"\u3044\u3044\u3048",next:"\u6b21\u3078",previous:"\u524d\u3078",back:"\u623b\u308b",selected:"\u9078\u629e",name:"\u540d\u524d",usage:"\u4f7f\u7528\u6cd5",settings:"\u8a2d\u5b9a",home:"\u30db\u30fc\u30e0",link:"\u30ea\u30f3\u30af",messages:"\u30e1\u30c3\u30bb\u30fc\u30b8",outputs:"\u51fa\u529b",title:"\u30bf\u30a4\u30c8\u30eb",thumbnail:"\u30b5\u30e0\u30cd\u30a4\u30eb",
url:"URL",actions:"\u30a2\u30af\u30b7\u30e7\u30f3",layer:"\u30ec\u30a4\u30e4\u30fc",action:"\u30a2\u30af\u30b7\u30e7\u30f3",input:"\u5165\u529b",output:"\u51fa\u529b",type:"\u30bf\u30a4\u30d7",required:"\u5fc5\u9808",options:"\u30aa\u30d7\u30b7\u30e7\u30f3",label:"\u30e9\u30d9\u30eb",tooltip:"\u30c4\u30fc\u30eb\u30c1\u30c3\u30d7",visible:"\u8868\u793a",symbol:"\u30b7\u30f3\u30dc\u30eb",popup:"\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7",upload:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",execute:"\u5b9f\u884c",
help:"\u30d8\u30eb\u30d7",executing:"\u5b9f\u884c\u4e2d",clear:"\u6d88\u53bb",error:"\u30a8\u30e9\u30fc",zoomTo:"\u30ba\u30fc\u30e0",attribute:"\u5c5e\u6027",exports:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",check:"\u78ba\u8a8d",save:"\u4fdd\u5b58",close:"\u9589\u3058\u308b",deleteText:"\u524a\u9664",map:"\u30de\u30c3\u30d7",scene:"\u30b7\u30fc\u30f3",reset:"\u30ea\u30bb\u30c3\u30c8",icon:"\u30a2\u30a4\u30b3\u30f3",folder:"\u30d5\u30a9\u30eb\u30c0\u30fc",share:"\u5171\u6709",view:"\u8868\u793a",newText:"\u65b0\u898f",
edit:"\u7de8\u96c6",wkid:"WKID",table:"\u30c6\u30fc\u30d6\u30eb",zoomIn:"\u62e1\u5927",zoomOut:"\u7e2e\u5c0f",continue1:"\u7d99\u7d9a",longitude:"\u7d4c\u5ea6",latitude:"\u7def\u5ea6",custom:"\u30ab\u30b9\u30bf\u30e0",image:"\u753b\u50cf",font:"\u30d5\u30a9\u30f3\u30c8",text:"\u30c6\u30ad\u30b9\u30c8",all:"\u3059\u3079\u3066",number:"\u6570\u5024",percentage:"\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8",unit:"\u5358\u4f4d",thousand:"\u5343",billion:"\u5341\u5104",million:"\u767e\u4e07",none:"\u306a\u3057",
field:"\u30d5\u30a3\u30fc\u30eb\u30c9",operation:"\u64cd\u4f5c",disableUpdateGeometry:"\u30b8\u30aa\u30e1\u30c8\u30ea\u66f4\u65b0\u306e\u7121\u52b9\u5316",preview:"\u30d7\u30ec\u30d3\u30e5\u30fc"},errorCode:"\u30b3\u30fc\u30c9",errorMessage:"\u30e1\u30c3\u30bb\u30fc\u30b8",errorDetail:"\u8a73\u7d30",widgetPlaceholderTooltip:"\u3053\u308c\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u79fb\u52d5\u3057\u3066\u3001\u5bfe\u5fdc\u3059\u308b\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059",
loadingShelter:{loading:"\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059"},urlInput:{invalidUrl:"\u7121\u52b9\u306a URL \u3067\u3059\u3002"},urlComboBox:{invalidUrl:"\u7121\u52b9\u306a URL \u3067\u3059\u3002"},urlParams:{invalidToken:"\u7121\u52b9\u306a\u30c8\u30fc\u30af\u30f3",validateTokenError:"\u7121\u52b9\u306a\u30c8\u30fc\u30af\u30f3\u307e\u305f\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30a8\u30e9\u30fc"},units:{miles:"\u30de\u30a4\u30eb",milesAbbr:"mi",kilometers:"\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb",
kilometersAbbr:"km",feet:"\u30d5\u30a3\u30fc\u30c8",feetAbbr:"ft",meters:"\u30e1\u30fc\u30c8\u30eb",metersAbbr:"m",yards:"\u30e4\u30fc\u30c9",yardsAbbr:"yd",acres:"\u30a8\u30fc\u30ab\u30fc",acresAbbr:"\u30a8\u30fc\u30ab\u30fc",nauticalMiles:"\u6d77\u91cc",nauticalMilesAbbr:"\u6d77\u91cc",uSSurveyFeet:"US Survey \u30d5\u30a3\u30fc\u30c8",uSSurveyFeetAbbr:"ftUS",decimalDegree:"\u5ea6 (10 \u9032)",decimalDegreeAbbr:"dd",degreeMinuteSeconds:"\u5ea6\u5206\u79d2",degreeMinuteSecondsAbbr:"d-m-s",squareMiles:"\u5e73\u65b9\u30de\u30a4\u30eb",
squareMilesAbbr:"sq mi",squareKilometer:"\u5e73\u65b9\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb",squareKilometerAbbr:"sq km",squareFeet:"\u5e73\u65b9\u30d5\u30a3\u30fc\u30c8",squareFeetAbbr:"sq ft",squareMeters:"\u5e73\u65b9\u30e1\u30fc\u30c8\u30eb",squareMetersAbbr:"sq m",squareYards:"\u5e73\u65b9\u30e4\u30fc\u30c9",squareYardsAbbr:"sq yd",squareUSSurveyFeet:"\u5e73\u65b9\u6e2c\u91cf\u30d5\u30a3\u30fc\u30c8",squareUSSurveyFeetAbbr:"sq ftUS"}});