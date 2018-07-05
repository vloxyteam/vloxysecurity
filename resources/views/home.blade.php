<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
<title>DevLabs - Create Graphics</title>
<style>
  html, body, #viewDiv {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
</style>
  <link rel="stylesheet" href="https://js.arcgis.com/4.7/esri/css/main.css">
<script src="https://js.arcgis.com/4.7/"></script>
  
  <script>
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/geometry/Point",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/geometry/Polyline",
  "esri/symbols/SimpleLineSymbol",
  "esri/geometry/Polygon",
  "esri/symbols/SimpleFillSymbol",
  "dojo/domReady!"
], function(Map, MapView,
      Graphic, Point, SimpleMarkerSymbol,
      Polyline, SimpleLineSymbol,
      Polygon, SimpleFillSymbol
) {
  
  var map = new Map({
    basemap: "streets-night-vector"
  });
    
  var view = new MapView({
    container: "viewDiv",  
    map: map,
    center: [-118.27928,34.13558],
    zoom: 10
  });
  
  // Create a point
  var point = new Point({
    longitude: -118.29507,
    latitude: 34.13501
  });

  // Create a symbol for drawing the point
  var markerSymbol = new SimpleMarkerSymbol({
    color: [226, 119, 40],
    outline: { 
      color: [255, 255, 255],
      width: 1
    }
  });
  
  // Create attributes
  var attributes = {
    Name: "I am a point",  // The name of the pipeline
    Park: "Griffith Park",  // The owner of the pipeline
    City: "Los Angeles"  // The length of the pipeline
  };
  
  // Create popup template
  var popupTemplate = {
    title: "{Name}",
    content: "I live in <b>{Park}</b> in the city of <b>{City}</b>."
  };

  // Create a graphic and add the geometry and symbol to it
  var pointGraphic = new Graphic({
    geometry: point,
    symbol: markerSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate
  });
    
  view.graphics.add(pointGraphic);
  
  // Create a line geometry
  var polyline = new Polyline({
    paths: [
      [-118.29026, 34.1816],
      [-118.26451, 34.09664]
    ]
  });

  // Create a symbol for drawing the line
  var lineSymbol = new SimpleLineSymbol({
    color: [226, 119, 40],
    width: 2
  });

  // Create a line graphic
  var polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: lineSymbol
  })

  // Add the graphic to the view
  view.graphics.add(polylineGraphic);

  // Create a polygon geometry
  var polygon = new Polygon({
    rings: [
      [-118.27653, 34.15121],
      [-118.2446, 34.15462],
      [-118.22915, 34.14439],
      [-118.23327, 34.12279],
      [-118.25318, 34.10972],
      [-118.26486, 34.11625],
      [-118.27653, 34.15121]
    ]
  });

  // Create a symbol for rendering the graphic
  var fillSymbol = new SimpleFillSymbol({
    color: [227, 139, 79, 0.8],
    outline: {
      color: [255, 255, 255],
      width: 1
    }
  });

  // Add the geometry and symbol to a new graphic
  var polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: fillSymbol
  });

  // Add the graphic to the view
  view.graphics.add(polygonGraphic);

});
</script>
</head>
<body>
  <div id="viewDiv"></div>
</body>
</html> 