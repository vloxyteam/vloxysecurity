@extends('crudbooster::admin_template')
@section('content')
 
  <?php
  
  // Database Constants
  define("DB_SERVER", "localhost");
  define("DB_USER", "root");
  define("DB_PASS", "masterkey");
  define("DB_NAME", "vloxysecuritydb");
  define("DB_NAME_ALARM", "tutoriales_chat");
  $con = mysqli_connect(DB_SERVER,DB_USER, DB_PASS,DB_NAME) or die(mysql_error());
  mysqli_select_db($con,DB_NAME) or die("Cannot select DB");
  /// end conexion camaras privadas
  // query of radio of the alarm and numbers of cam's to see
   $query_parameter =mysqli_query($con,"select * from parameter");
  $parameter=mysqli_fetch_assoc($query_parameter);
  $alarm_radio=$parameter['alarm_radio'];
  $max_cams=$parameter['max_cams'];
  /// end conexion alarma y parametros
  /// eliminar datos de tabla de mensajes
  $servername = "localhost";
  $username = "root";
  $password = "masterkey";
  $dbname = "tutoriales_chat";
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  } 
  $sql = "delete from tutoriales_chat.tbl_mensajes;";
  $conn->query($sql);
  /// end eliminacion de mensajes de alarma
  // websocket
  // include_once('php/config.php');
  // include_once('php/device.php');
  // include_once('php/send.php');
  
  //$class = new Send;
  /// end
?>
  <!-- fin conexion base de datos-->
  <!-- css arcgis-->
  <link rel="stylesheet" href="https://js.arcgis.com/3.24/esri/css/esri.css">
  <link rel="stylesheet" href="https://js.arcgis.com/3.24/dijit/themes/nihilo/nihilo.css">  
  <script src="https://js.arcgis.com/3.24/"></script> 

  <!--<link rel="stylesheet" href="http://localhost:8081/arcgis_js_api/library/3.24/3.24/dijit/themes/nihilo/nihilo.css">
  <link rel="stylesheet" href="http://localhost:8081/arcgis_js_api/library/3.24/3.24/esri/css/esri.css"> -->

 <!-- websocket-->
  <?php 
	/*	if($tablet_browser > 0){
		    echo '<link rel="stylesheet" type="text/css" href="'.URL_BASE.'css/stylesMobile.css">';
		}else if($mobile_browser > 0){
			echo '<link rel="stylesheet" type="text/css" href="'.URL_BASE.'css/stylesMobile.css">';
		}else{
		    echo '<link rel="stylesheet" type="text/css" href="'.URL_BASE.'css/styles.css">';
		}*/
	?>
   <!-- websocket   
   <script type="text/javascript">
		var urlPort = '<?//=SOCKET_FRONTEND;?>';
	</script>
	
	<script src="<?//=URL_BASE;?>js/fancywebsocket.js"></script>
	<script src="<?//=URL_BASE;?>js/myjava.js" type="text/javascript"></script>
   end -->
  <!-- popoup style & script -->
  <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
      <style type="text/css">
          #overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #000;
              filter: alpha(opacity=70);
              -moz-opacity: 0.7;
              -khtml-opacity: 0.7;
              opacity: 0.7;
              z-index: 100;
              display: none;
          }
          
          .cnt223 a {
              text-decoration: none;
          }
          
          .popup {
              width: 100%;
              margin: 0 auto;
              display: none;
              position: fixed;
              z-index: 101;
          }
          
          .cnt223 {
              /*min-width: 600px;*/
              width: 435px;
              min-height: 150px;
              margin: 100px auto;
              background: #f3f3f3;
              position: relative;
              z-index: 103;
              padding: 15px 35px;
              border-radius: 5px;
              box-shadow: 0 2px 5px #000;
          }
          
          .cnt223 p {
              clear: both;
              color: #555555;
              /* text-align: justify; */
              font-size: 20px;
              font-family: sans-serif;
          }
          
          .cnt223 p a {
              color: #d91900;
              font-weight: bold;
          }
          
          .cnt223 .x {
              float: right;
              height: 35px;
              left: 22px;
              position: relative;
              top: -25px;
              width: 34px;
          }
          
          .cnt223 .x:hover {
              cursor: pointer;
          }
      </style>
    <!-- end web socket -->
    <!-- css dojo -->

          <style>
      html, body { 
        height: 100%; width: 100%;
        margin: 0; padding: 0;
      } 
      body{
        background-color: #fff; overflow:hidden; 
        font-family: sans-serif;
      } 
      label {
        display: inline-block;
        padding: 5px 5px 0 5px;
        font-weight: 400;
        font-size: 12pt;
      }
      .button {
        width: 100%;
        margin: 3px auto;
        text-align: center;
      }
      #header {
        padding-top: 4px;
        padding-right: 15px;
        color: #444; 
        font-size:16pt; text-align:right;font-weight:bold;
        height:55px;
        background: #fff;
        border-bottom: 1px solid #444;
      }
      #subheader {
        font-size:small;
        color: #444;
        text-align:right;
        padding-right:20px;
      }
      #rightPane{
        margin: 0;
        padding: 10px;
        background-color: #fff;
        color: #421b14;
        width: 180px;
      }

      .ds { background: #000; overflow: hidden; position: absolute; z-index: 2; }
      #ds-h div { width: 100%; }
      #ds-l div, #ds-r div { height: 100%; }
      #ds-r div { right: 0; }
      #ds .o1 { filter: alpha(opacity=10); opacity: .1; }
      #ds .o2 { filter: alpha(opacity=8); opacity: .08; }
      #ds .o3 { filter: alpha(opacity=6); opacity: .06; }
      #ds .o4 { filter: alpha(opacity=4); opacity: .04; }
      #ds .o5 { filter: alpha(opacity=2); opacity: .02; }
      #ds .h1 { height: 1px; }
      #ds .h2 { height: 2px; }
      #ds .h3 { height: 3px; }
      #ds .h4 { height: 4px; }
      #ds .h5 { height: 5px; }
      #ds .v1 { width: 1px; }
      #ds .v2 { width: 2px; }
      #ds .v3 { width: 3px; }
      #ds .v4 { width: 4px; }
      #ds .v5 { width: 5px; }

      /* make all dijit buttons the same width */
      .dijitButton .dijitButtonNode, #drawingWrapper, #printButton {
        width: 160px;
      }
      .esriPrint {
        padding: 0;
      }
      #player{
        width: 100%;	
       /* height: 130px;	*/	
      }
       #iframe{
        width: 100%;
        
        			
      }
    </style>
    <!-- end css dojo -->
  <!-- en css arcgis-->
  <body class="nihilo">
    <!--- dojo -->
    <div id="mainWindow" 
          data-dojo-type="dijit/layout/BorderContainer" 
          data-dojo-props="design:'headline',gutters:false"
          style="width: 100%; height: 100%; margin: 0;">
  <!--<div id="header" style="display:none;" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'top'">
        Print Dijit:  Out of the Box Printing for the ArcGIS API for JavaScript
        <div id="subheader">Requires ArcGIS Server 10.1</div>
      </div>

      <div id="content" style="display:block;">
          <a id="containerMessages"><?//=$class->load_messages();?></a>
      </div>-->
      <div id="map"  style="height:500px;">
      </div>
      <div id="" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'right'">
    <!--<div id="printButton" style="display:none;">
        </div>-->
        <div id="drawingWrapper">
            <!--Add some graphics:
            <div id="point" class="drawing">Point</div>
            <div id="freehandpolyline" class="drawing">Freehand Polyline</div>-->
            <div id="freehandpolygon" class="drawing"><img src="../includes/img/polygon.png">
            </div>
        </div>
    <!--<div id="layerToggle" style="display:none;">
          Toggle Layers: <br />
        </div>-->
      </div>
    </div>
    <!-- end dojo -->
</body>
    <script>
      var app = {};
      app.map = null; app.toolbar = null; app.tool = null; app.symbols = null; app.printer = null;
      require([
        "esri/map",
        "esri/toolbars/draw",
        "esri/dijit/Print",
        "esri/layers/ArcGISTiledMapServiceLayer",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/layers/LayerDrawingOptions",
        "dojo/_base/array",
        "esri/Color",
        "dojo/parser", 
        "esri/symbols/SimpleFillSymbol",
        "esri/graphic",
        "esri/layers/GraphicsLayer",
        "esri/geometry/Circle",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol", 
        "esri/renderers/ClassBreaksRenderer",
        //"esri/config",        
        "dojo/query",
        "dojo/dom",
        "dojo/dom-construct", 
        "dijit/form/CheckBox",
        "dijit/form/Button",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dojo/domReady!",
        "esri/geometry/Point",
        "dojo/dom-style",
        "dojox/widget/ColorPicker",
        
        "dojo/dom-attr"
      ], function(
        Map, Draw, Print,
        ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer,
        LayerDrawingOptions,
        arrayUtils, Color, parser, 
        SimpleFillSymbol, Graphic,GraphicsLayer,
        Circle,
        SimpleMarkerSymbol, SimpleLineSymbol,
        ClassBreaksRenderer,
        query, dom, domConstruct, 
        CheckBox, Button,Point,domStyle,
        ColorPicker,
        domAttr
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
            $direccion=$register_data['direccion'];//"Entrada Principal KR 15";
         /*   switch ($n) {
              case 1:
                  $center='-74.042600, 4.701859'; //torres de cristal
                  $longitud='-74.042600';
                  $latitud='4.701859';
                  $cc="Unicentro Norte";
                  $url1='Pcam5';
                  $dcamara="Cam1";
                  $direccion="Entrada Principal KR 15";
                  break;
              case 2:
                  $center='-74.111142, 4.666393';//salitre
                  $longitud='-74.111142';
                  $latitud='4.666393';
                  $cc="PriceSmart";
                  $url1='Pcam5';
                  $dcamara="Cam1";
                  $direccion="Av carrera 72 con Av Calle 26";
                  break;
              case 3:
                  $center='-74.155944, 4.631663';//canCra. 59 #26-21, Bogotá
                  $longitud='-74.155944';
                  $latitud='4.631663';
                  $cc="Central de Abastos 1";
                  $url1='Pcam5';
                  $dcamara="Cam1";
                  $direccion="Diagonal 38B sur con Carrera 80";
                  break;
              case 4:
                  $center='-74.10172373056412, 4.646658456988236';//gran estacion
                  $longitud='-74.10172373056412';
                  $latitud='4.646658456988236';
                  $cc="CC Gran Estacion";
                  $url1='Pcam5';
                  $dcamara="Cam1";
                  $direccion="Calle 26 Con Carrera 60";
                  break;    
              default:
                  $center='-74.098253, 4.647660';//can
                  $longitud='-74.098253';
                  $latitud='4.647660';
                  $cc="DIPON";
                  $url1='Pcam5';
                  $dcamara="Cam1";
                  $direccion="Cra. 59 #26-21";
          }
          $notification=$_GET['action'];
          if($notification == "notification"){
            
            
            $created_at= date("y-m-d H:i:s");
            $insert="INSERT INTO `vloxysecuritydb`.`cms_notifications`
            (`id_cms_users`, `content`, `url`, `is_read`, `created_at`) 
            VALUES
            ('2', '".$center."-".$cc."','admin/lprMaps?n=".$n."', '0', '".$created_at."');";
            //echo $insert;
            $registroal=mysqli_query($con,$insert);
            
          }*/

        }else{
          $center='-74.098253, 4.647660';//can
        } 
        ?>
        app.map = new Map("map", {
           basemap: "hybrid",
          center: [<?php echo $center;?>],
          zoom: 18
        });
        app.map.on("load", function() {
          app.toolbar = new Draw(app.map);
          app.toolbar.on("draw-end", addToMap);
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
            geodesic:true,
            radius: radius
          });
          var graphic = new Graphic(circle, symbol);
          app.map.graphics.add(graphic);   
          gl.add(graphic);
        });
        //// end circle
        <?php } ?>
        

        app.symbols = {};
        app.symbols.polygon = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([205, 50, 89]), 0.1),new Color([205, 50, 89,0.4]));
        // find the divs for buttons
        query(".drawing").forEach(function(btn) {
          var button = new Button({
            label: btn.innerHTML,
            onClick: function() { 
              activateTool(this.id);
            }
          }, btn);
        });

        function activateTool(type) {
          app.tool = type.replace("freehand", "");
          app.toolbar.activate(type);
          app.map.hideZoomSlider();
        }

        function addToMap(evt) {
          app.toolbar.deactivate();
          app.map.showZoomSlider();
          
          var graphic = new Graphic(evt.geometry, app.symbols[app.tool]);
          app.map.graphics.add(graphic);
                    
        }
        app.map.on("load", function(){
        
          
         var iconBase = '../includes/img/';
          var icons = {
            publicaa: {
              icon: iconBase + 'cam-green.png'
            },
            publicai: {
              icon: iconBase + 'cam-red.png'
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
            if($row['dcamara']=="Cam1"){
              $url="Pcam1";
            }elseif($row['dcamara']=="Cam2"){
              $url="Pcam2";
            }elseif($row['dcamara']=="Cam3"){
              $url="Pcam3";
            }elseif($row['dcamara']=="Cam4"){
              $url="Pcam4";
            }
            $tipocamara="";
            $n=$row["typecam"];
            switch ($n) {
              case 1:
                $tipocamara.="publica";
              break;
              case 2:
                $tipocamara.="privada";
              break;
              case 3:
                $tipocamara.="lpr";
              break;
              default:
                $tipocamara.="privada";
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
                "Link":'<a href="../vs/<?php echo $url; ?>.php?ip=<?php echo $row["ipserver"]; ?>&cc=<?php echo $row["centrocomercial"]; ?>" >'+
                          '<?php echo $row["dcamara"]; ?></a>',
                "Adresss":"<?php echo $row["direccion"]; ?>",
                "Embebed":'<iframe style="position: relative;" src="../vs/<?php echo $url; ?>.php?ip=<?php echo $row["ipserver"]; ?>&cc=<?php echo $row["centrocomercial"]; ?>" id="iframe" frameborder="0" allowfullscreen="allowfullscreen"></iframe>'
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
        //app.map.on("load",addpoint);
         
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
                      "<input type='submit' class='btn btn-success' value='Ver Camaras'>"+
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

