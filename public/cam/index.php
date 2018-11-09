<!DOCTYPE html>
<html lang="en">
<head>
<style>
		#test_video{
        width: 100%;	
       /* height: 600px;*/		
      }
	  video {
    width: 100%;
    height: auto;
}
	</style>	
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
	<meta name="viewport" content="width=device-width, initial-scale=1,shrink-to-fit=no">
	<title>Vloxy Security</title>
	<meta name="keywords" content="rtmp player, rtmp">
	<meta name="description" content="This page allows you to play RTMP streams online with no installation required.">
	
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	
	<meta name="viewport" content="width=device-width, initial-scale=1,shrink-to-fit=no">
	<script>
		  $(window).ready(function (){		
		  	 var player = $("#test_video");
              player.height($(this).height()-10);
		  }); 
		  $(window).resize(function (){
             var player = $("#test_video");
              player.height($(this).height()-10);
          });
	</script>
</head>
<?php
$id=$_GET['id'];
 // Database Constants
 define("DB_SERVER", "192.168.1.37");
 define("DB_USER", "root");
 define("DB_PASS", "masterkey");
 define("DB_NAME", "vloxysecuritydb");
 
 $con = mysqli_connect(DB_SERVER,DB_USER, DB_PASS,DB_NAME) or die(mysql_error());
 mysqli_select_db($con,DB_NAME) or die("Cannot select DB");
 $query_data =mysqli_query($con,"select * from cameras where cameraid='".$id."'");
 $register_data=mysqli_fetch_assoc($query_data);
 $user=$register_data['user'];$pwd=$register_data['contrasena'];$canal=$register_data['dcamara'];
 $ipserver=$register_data['ipserver'];
 $newurl="rtsp://$user:$pwd@$ipserver:554/$canal";
 /// end conexion camaras publicas
?>
<body onLoad="set_url(new_url);">
<!--<div>
    <input id="stream_url" size="36">
    <button id="set_new_url" onclick = "set_url(new_url)">Set</button>
</div>
<div>
<p style="color:#808080">Enter your rtsp link to the stream, for example: "rtsp://192.168.1.1:554/h264"</p>
</div>-->
<div class="container" >
	  <div class="row">								
		<div class="col-md-12">
			<div class="text-center">
				<div id="capa">
					<div id="player-container" class="player-container" style="background-color: black; width: 100%; height: 100%; position: relative;">
						<video id="test_video" controls autoplay>
							
						</video>
						</div>	
				</div>
			</div>				
		</div>
	  </div>
</div>						
<script src="streamedian.js"></script> <!-- Path to pleer js-->
<script>
	var new_url = "";
	function set_url(url)
	{
		//var text = document.getElementById('stream_url').value;
		var text="<?php echo $newurl; ?>";
	    url = text;
		test_video.src = url;
		Streamedian.player('test_video', {socket:"ws://127.0.0.1:8080/ws/"});
		var player = document.getElementById('test_video');
	}
</script>
<script>
    // define a new console
    var console=(function(oldConsole){
	    return {
		    log: function(){
			let text = '';
			let node = document.createElement("div");
			for (let arg in arguments){
			    text +=' ' + arguments[arg];
			}
			oldConsole.log(text);
			node.appendChild(document.createTextNode(text));
			document.getElementById("logs").appendChild(node);
		    },
		    info: function () {
			let text = '';
			for (let arg in arguments){
			    text +='' + arguments[arg];
			}
			oldConsole.info(text);
		    },
		    warn: function () {
			let text = '';
			for (let arg in arguments){
			    text +=' ' + arguments[arg];
			}
			oldConsole.warn(text);
		    },
		    error: function () {
			let text = '';
			for (let arg in arguments){
			    text +=' ' + arguments[arg];
			}
			oldConsole.error(text);
		    }
	    };
    }(window.console));

    //Then redefine the old console
    window.console = console;
    
    function cleanLog(){
	let  node = document.getElementById("logs");
	while (node.firstChild) {
	    node.removeChild(node.firstChild);
	}
    }
    
    function scrollLog(){
	console.warn("scroll");
	let node = document.getElementById("logs");
	node.scrollTop = node.scrollHeight;
    }
</script>
<!--<p><br>Have any suggestions to improve our player? <br>Feel free to leave comments or ideas email: streamedian.player@gmail.com</p>
<p>View player log</p>-->
<div id="logs" style="display:none;"></div>
<!--<button class="btn btn-success" onclick="cleanLog()">clear</button><button class="btn btn-success" onclick="scrollLog()">scroll to end</button>-->
</body>
</html>
