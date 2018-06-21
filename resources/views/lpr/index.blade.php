@extends('admin.layout')
@section('content')
    <body class="claro">
    <div id="map"></div>

    <script>

    
    var map;
        require(["esri/map", "dojo/domReady!"], function(Map) {
          map = new Map("map", {
            basemap: "hybrid",
            center: [-74.098253, 4.647660],
            zoom: 13
          });
        });
  </script>
    </body>
@endsection

