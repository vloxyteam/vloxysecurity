<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Geometry Service: Label Points</title>
    
    <script src="http://localhost/vloxysec/3.25/init.js"></script>
    <link rel="stylesheet" href="http://localhost/vloxysec/3.25/dijit/themes/nihilo/nihilo.css">
    <link rel="stylesheet" href="http://localhost/vloxysec/3.25/esri/css/esri.css">  
    <style>
      html, body, #mapDiv {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
      }
      #info {
        bottom: 20px;
        color: #444;
        height: auto;
        font-family: arial;
        left: 20px;
        margin: 5px;
        padding: 10px;
        position: absolute;
        width: 200px;
        z-index: 40;
      }
    </style>

    
    <script>
      require(["dojo/dom",
      
      "esri/geometry/webMercatorUtils",
      "dojo/dom-attr",
      "dojo/_base/array",
      "esri/Color",
      "dojo/number",
      "dojo/parser",
      "dijit/registry",

      "esri/config",
      "esri/map",
      "esri/graphic",
      
      "esri/tasks/BufferParameters",
      "esri/toolbars/draw",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/Font",
      "esri/symbols/TextSymbol",

      "dijit/layout/BorderContainer",
      "dijit/layout/ContentPane",
      
      "dojo/domReady!"
  ], function(dom,webMercatorUtils, domAttr, array, Color, number, parser, registry, esriConfig, Map, Graphic,  BufferParameters, Draw,
              SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol, Font, TextSymbol) {

    var map, toolbar;
    parser.parse();
    // create the map control
    map = new Map("mapDiv", {
      basemap: "streets",
      center: [-74.098253, 4.647660],
      zoom: 16,
      showAttribution: false
    });
    map.on("load", function() {
                //after map loads, connect to listen to mouse move & drag events
                //map.on("mouse-move", showCoordinates);
                //map.on("mouse-drag", showCoordinates);
                map.on("mouse-down", showCoordinates);
                
            });
    // create a toolbar for the map
    toolbar = new Draw(map);
    toolbar.on("draw-end", addToMap);


    // activate a drawing tool when a button is clicked
    registry.byId("polygon").on("click", function() {
      toolbar.activate(Draw.POLYGON);
      map.hideZoomSlider();
      dom.byId("info3").innerHTML = "";
      coordinates="";
      document.getElementById("info3").style.display="none";
    });
    
    registry.byId("clear").on("click", function() {
      map.graphics.clear();
      dom.byId("info3").innerHTML = "";
      coordinates="";
      document.getElementById("info3").style.display="none";
      map.showZoomSlider();
      map.setZoom(16);
    });
    function addToMap(evtObj) {
      map.graphics.clear();
      var geometry = evtObj.geometry;
      // add the drawn graphic to the map
      var symbol = new SimpleFillSymbol(
        SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 0, 0]), 2),
        new Color([0, 0, 255, 0.5]));
      var graphic = new Graphic(geometry, symbol);
      map.graphics.add(graphic);
      map.setZoom(18);
      
      document.getElementById("info3").style.display="";  
      dom.byId("info3").innerHTML = "<a href='"+coordinates+"'>Ver Polígono</a>"; 
      // simplify polygon so it can be used in the get label points request
      //geometryService.simplify([geometry], getLabelPoints);
    }
    var coordinates="";
    function showCoordinates(evt) {
        //the map is in web mercator but display coordinates in geographic (lat, long)

        var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
        //display mouse coordinates
        coordinates = coordinates + mp.x.toFixed(3) + ", " + mp.y.toFixed(3);
        //dom.byId("info2").innerHTML = coordinates;


    }
  });
  </script>

  </head>

  <body class="nihilo">
    <div id="mapDiv">
      <span id="info2" style="position:absolute; left:15px; bottom:5px; color:#000; z-index:50;"></span>
    </div>
    <div id="info" class="esriSimpleSlider">
      <button id="polygon" data-dojo-type="dijit.form.Button">Polygon</button>
      <button id="clear" data-dojo-type="dijit.form.Button">Clear Graphics</button>
      <button id="info3" class="btn btn-success" style="display:none;" ></button> 
    </div>
  </body>

</html>
