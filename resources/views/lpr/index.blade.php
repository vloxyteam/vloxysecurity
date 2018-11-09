@extends('crudbooster::admin_template')
@section('content')
 
  <?php
  
  // Database Constants
  define("DB_SERVER", "192.168.1.37");
  define("DB_USER", "root");
  define("DB_PASS", "masterkey");
  define("DB_NAME", "vloxysecuritydb");
  
  $con = mysqli_connect(DB_SERVER,DB_USER, DB_PASS,DB_NAME) or die(mysql_error());
  mysqli_select_db($con,DB_NAME) or die("Cannot select DB");
  /// end conexion camaras privadas
  // query of radio of the alarm and numbers of cam's to see
   $query_parameter =mysqli_query($con,"select * from parameter");
  $parameter=mysqli_fetch_assoc($query_parameter);
  $alarm_radio=$parameter['alarm_radio'];
  $max_cams=$parameter['max_cams'];
  /// end conexion alarma y parametros
  
?>

<script src="http://localhost/vloxysec/3.25/init.js"></script>
<link rel="stylesheet" href="http://localhost/vloxysec/3.25/dijit/themes/nihilo/nihilo.css">
<link rel="stylesheet" href="http://localhost/vloxysec/3.25/esri/css/esri.css">
 <!--
  <link rel="stylesheet" href="https://js.arcgis.com/3.24/esri/css/esri.css">
  <link rel="stylesheet" href="https://js.arcgis.com/3.24/dijit/themes/nihilo/nihilo.css">  
  <script src="https://js.arcgis.com/3.24/"></script>--> 
  <style>
    /*body {font-family: Arial, Helvetica, sans-serif;}

    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        /*z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: -50px;
        width: 100%; /* Full width */
        height: 110%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 100%;
        height:100%;
    }

    /* The Close Button */
    .close {
        color: black;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
    </style>
  <body>
  <!-- Trigger/Open The Modal -->
    <button id="info3" style="display:none;">Ver Video</button>

    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <p id="info4">Some text in the Modal..</p>
      </div>

    </div>

    <script>
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("info3");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    </script>

      <div id="map"  style="height:500px;">
      <span id="info2"></span>
      </div>
      <div id="info" class="esriSimpleSlider">
      <button id="polygon" data-dojo-type="dijit.form.Button">Selección de área</button>
      <!--<button id="clear" data-dojo-type="dijit.form.Button">Clear Graphics</button>
      <button id="info3" class="btn btn-success" style="display:none;" ></button> -->
    </div>
    
</body>
    <script>
      var app = {};
      app.map = null; app.toolbar = null; app.tool = null; app.symbols = null; app.printer = null;
      require([
        "dojo/dom",
        "esri/geometry/webMercatorUtils",
        "dojo/dom-attr",
        "dojo/_base/array",
        "dojo/number",
        "dojo/parser",
        "dijit/registry",
        "esri/config",

        "esri/map",
        "esri/Color",

        "esri/tasks/BufferParameters",
        "esri/toolbars/draw",

        "esri/symbols/SimpleFillSymbol",
        "esri/graphic",
        "esri/layers/GraphicsLayer",
        "esri/geometry/Circle",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol", 
        "esri/renderers/ClassBreaksRenderer",
        "esri/geometry/Point",

        
        "esri/symbols/Font",
        "esri/symbols/TextSymbol",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dojo/domReady!"

        ], function(
        dom,webMercatorUtils, domAttr, array,number, parser, registry, esriConfig,
        Map,
        Color,
        BufferParameters, Draw,
        SimpleFillSymbol, Graphic,GraphicsLayer,
        Circle,
        SimpleMarkerSymbol, SimpleLineSymbol,
        ClassBreaksRenderer,
        Point,
        Font, TextSymbol
        ) {
          parser.parse();
        <?php
        $host= $_SERVER["HTTP_HOST"];
				$url= $_SERVER["REQUEST_URI"];
				$link= "http://" . $host . $url;
        if($_GET){
          /// aqui se recibe y se gestiona los parametros de la alarma SINAP
            $n=$_GET['n'];
            $query_data =mysqli_query($con,"select * from cms_notifications where timestamp='".$n."'");
            $register_data=mysqli_fetch_assoc($query_data);
            $center=$register_data['longitud'].", ".$register_data['latitud'];//'-74.042600, 4.701859'; 
            $longitud=$register_data['longitud'];//'-74.042600';
            $latitud=$register_data['latitud'];//'4.701859';
            $cc=$register_data['barrio'];//"Unicentro Norte";
            $url1='Pcam5';
            $dcamara="Cam1";
            $direccion=$register_data['direccion'];
        }else{
          $center='-74.098253, 4.647660';//can
          
        } 
        ?>
        app.map = new Map("map", {
          basemap: "hybrid",
          center: [<?php echo $center;?>],
          zoom: 16
        });
       
        <?php if($_GET){ ?>
       ////create Circle
        var symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([30, 144, 255]), 0.1),new Color([30, 144, 255,0.4]));
        var gl = new GraphicsLayer({ id: "circles" });
        //var geodesic = dom.byId("geodesic");
        app.map.addLayer(gl);
        app.map.on("load", function() {
          var radius = <?php echo $alarm_radio;?>;
          var circle = new Circle({
            center: [<?php echo $center;?>],
            zoom:18,
            geodesic:true,
            radius: radius
          });
          var graphic = new Graphic(circle, symbol);
          app.map.graphics.add(graphic);   
          gl.add(graphic);
        });
        //// end circle
        
        <?php } ?>
        app.map.on("load", function(){

          /// poligono
        
                //after map loads, connect to listen to mouse move & drag events
                //map.on("mouse-move", showCoordinates);
                //map.on("mouse-drag", showCoordinates);
                app.map.on("mouse-down", showCoordinates);
                
            
        // create a toolbar for the map
        app.toolbar = new Draw(app.map);
        app.toolbar.on("draw-end", addToMap);


        // activate a drawing tool when a button is clicked
        registry.byId("polygon").on("click", function() {
          app.toolbar.activate(Draw.POLYGON);
          app.map.hideZoomSlider();
          dom.byId("info3").innerHTML = "Ver Video";
          dom.byId("info4").innerHTML = "";
          coordinates="";
          document.getElementById("info3").style.display="none";
        });
        
        /*registry.byId("clear").on("click", function() {
          //app.map.graphics.clear();
          dom.byId("info3").innerHTML = "";
          coordinates="";
          document.getElementById("info3").style.display="none";
          app.map.showZoomSlider();
          app.map.setZoom(16);
        });*/
        function addToMap(evtObj) {
          //app.map.graphics.clear();
          var geometry = evtObj.geometry;
          // add the drawn graphic to the map
          var symbol = new SimpleFillSymbol(
            SimpleFillSymbol.STYLE_SOLID,
            new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 0, 0]), 2),
            new Color([0, 0, 255, 0.5]));
          var graphic1 = new Graphic(geometry, symbol);
          app.map.graphics.add(graphic1);
          //var point2 = [-74.10522674, 4.64622706];
          //var ncenter=newcenter.replace(" ","");
          //var point3=[];
          //dom.byId("info2").innerHTML = point3 + "</p>"+ point2;
          
          //app.map.centerAndZoom(point3, 18); 
          //app.map.centerAt(evtObj.mapPoint);
          app.map.setZoom(18);
          
          document.getElementById("info3").style.display="";
          //<iframe style="position: relative;" src='../vs/Pcampoly.php?var=(%20"+coordinates+")' style='color:  white;font-size: small;' id="iframe" frameborder="0" allowfullscreen="allowfullscreen"></iframe>  
          dom.byId("info4").innerHTML ="<iframe style='position: relative;width:100%;height:550px;' src='../vs/Pcampoly.php?var=(%20"+coordinates+")' style='color:  white;font-size: small;' id='iframe' frameborder='0' allowfullscreen='allowfullscreen'></iframe>";  
          // "<a href='../vs/Pcampoly.php?var=(%20"+coordinates+")' style='color:  white;font-size: small;'>Ver video</a>"; 
          // simplify polygon so it can be used in the get label points request
          //geometryService.simplify([geometry], getLabelPoints);
        }
        var coordinates="";
        var newcenter="";
        function showCoordinates(evt) {
            //the map is in web mercator but display coordinates in geographic (lat, long)

            var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);

            //display mouse coordinates
            coordinates = coordinates + mp.y.toFixed(8) + "," + mp.x.toFixed(8)+"*";
            //dom.byId("info2").innerHTML = coordinates;
            newcenter=mp.x.toFixed(8) + ", " + mp.y.toFixed(8);
            
        }
     
        /// end poligono

         var iconBase = '../includes/img/';
          var icons = {
            publicaa: {
              icon: iconBase + 'dome-green.png'
            },
            publicai: {
              icon: iconBase + 'dome-red.png'
            },
            privadaa: {
              icon: iconBase + 'cam-green.png'
            },
            privadai: {
              icon: iconBase + 'cam-red.png'
            },
            lpra: {
              icon: iconBase + 'dome-green.png'
            },
            lpri: {
              icon: iconBase + 'dome-red.png'
            },
            alarm: {
              icon: iconBase + 'alert50_marker.gif'
            }
          };
          
         <?php  
          $query =mysqli_query($con,"SELECT * FROM cameras");
          $numrows=mysqli_num_rows($query);
          if($numrows!=0)
          {
            while($row=mysqli_fetch_assoc($query))
            {
            if($row['dcamara']=="channel1"){
              $url="Pcam1";
            }elseif($row['dcamara']=="channel2"){
              $url="Pcam2";
            }elseif($row['dcamara']=="channel3"){
              $url="Pcam3";
            }elseif($row['dcamara']=="channel4"){
              $url="Pcam4";
            }
            $tipocamara="";
            $n=$row["typecam"];
            switch ($n) {
              case 1:
                $tipocamara.="publica";
                $link='<a href="../cam/?id='.$row["cameraid"].'" >'.$row["dcamara"].'</a>';
                $embed='<iframe style="position: relative;" src="../cam/?id='.$row["cameraid"].'" id="iframe" frameborder="0" allowfullscreen="allowfullscreen"></iframe>';
              break;
              case 2:
                $tipocamara.="privada";
                $link='<a href="../vs/'.$url.'.php?ip='.$row["ipserver"].'&cc='.$row["centrocomercial"].'" >'.$row["dcamara"].'</a>';
                $embed='<iframe style="position: relative;" src="../vs/'.$url.'.php?ip='.$row["ipserver"].'&cc='.$row["centrocomercial"].'" id="iframe" frameborder="0" allowfullscreen="allowfullscreen"></iframe>';
              break;
              case 3:
                $tipocamara.="lpr";
                $link='<a href="../vs/'.$url.'.php?ip='.$row["ipserver"].'&cc='.$row["centrocomercial"].'" >'.$row["dcamara"].'</a>';
                $embed='<iframe style="position: relative;" src="../vs/'.$url.'.php?ip='.$row["ipserver"].'&cc='.$row["centrocomercial"].'" id="iframe" frameborder="0" allowfullscreen="allowfullscreen"></iframe>';
              break;
              default:
                $tipocamara.="privada";
                $link='<a href="../vs/'.$url.'.php?ip='.$row["ipserver"].'&cc='.$row["centrocomercial"].'" >'.$row["dcamara"].'</a>';
                $embed='<iframe style="position: relative;" src="../vs/'.$url.'.php?ip='.$row["ipserver"].'&cc='.$row["centrocomercial"].'" id="iframe" frameborder="0" allowfullscreen="allowfullscreen"></iframe>';
            }
            $estado=$row["estado"];
            switch ($estado) {
              case "active":
                $tipocamara.="a";
              break;
              case "inactive":
                $tipocamara.="i";
              break;
              default:
                $tipocamara.="i";
            }
           ?>
           
         var myPoint = { 
            "geometry":{
                "x":<?php echo $row["longitud"]; ?>,
                "y":<?php echo $row["latitud"]; ?>,
                //"spatialReference":{"wkid":4326}
            },
            "attributes":{
                "XCoord":<?php echo $row["longitud"]; ?>,
                "YCoord":<?php echo $row["latitud"]; ?>,
                "Plant":"CC <?php echo $row["centrocomercial"]; ?>",
                /// 01/10/2018 voy por aqui se debe agregar y preguntar tipo de camara para cambiar el embebido y el link ;)
                "Link":'<?php echo $link; ?>',
                "Adresss":"<?php echo $row["direccion"]; ?>",
                "Embebed":'<?php echo $embed; ?>'
            },
            "symbol":{
              "url":icons.<?php echo $tipocamara; ?>.icon,
              "height":20,
              "width":20,
              "type":"esriPMS",
              "angle": 0
                      },
            "infoTemplate":{
                "title": "${Plant}",
                "content":"<div class='embed-responsive embed-responsive-1by1' style='display: contents;'>" +
                           "Latitude: ${YCoord}<br/>Longitude: ${XCoord}<br/>Dirección:${Adresss}<br/>Camaras:${Link}<br/>${Embebed}"+
                          '</div>'
            }
        };
        
        var gra= new esri.Graphic(myPoint);
        app.map.graphics.add(gra);
         
        <?php
            }
          }
        ?>
        <?php if($_GET){
          // point the circle
          ?>
        var myPoint = {
          "geometry":{
              "x":<?php echo $longitud; ?>,
              "y":<?php echo $latitud; ?>,
              //"spatialReference":{"wkid":4326}
          },
          "attributes":{
              "XCoord":<?php echo $longitud; ?>,
              "YCoord":<?php echo $latitud; ?>,
              "Plant":" <?php echo $cc; ?>",
              "Link":"<form action='../vs/alarm/' method='POST'>" +
                      "<input type='hidden' name='lng' value=<?php echo $longitud; ?>>" +
                      "<input type='hidden' name='lat' value=<?php echo $latitud; ?>>"+
                      "<input type='hidden' name='dist' value=<?php echo $alarm_radio; ?>>"+
                      "<input type='hidden' name='max_cams' value=<?php echo $max_cams; ?>>"+
                      //"<input type='submit' class='btn btn-success' value='Ver Camaras'>"+
                      "</form>",
              "Adresss":"<?php echo $direccion; ?>",
              "Embebed":'<iframe style="position: relative;" src="../vs/alarm/index.php?lng=<?php echo $longitud; ?>&lat=<?php echo $latitud; ?>&dist=<?php echo $alarm_radio; ?>&max_cams=<?php echo $max_cams; ?>" id="iframe" frameborder="0" allowfullscreen="allowfullscreen"></iframe>'
          },
          "symbol":{
            "url":icons.alarm.icon,
            "height":20,
            "width":20,
            "type":"esriPMS",
            "angle": 0
                    },
          "infoTemplate":{
              "title": "${Plant}",
              "content":"<div class='embed-responsive embed-responsive-1by1' style='display: contents;'>" +
                         "Latitude: ${YCoord}<br/>Longitude: ${XCoord}<br/>Dirección:${Adresss}<br/>${Link}<br/>${Embebed}"+
                        '</div>'
          }
      };
      
      var gra= new esri.Graphic(myPoint);
      app.map.graphics.add(gra);
      <?php
      // end point the circle
        }
        ?>
        });
                 
      });
    </script>
    
@endsection

