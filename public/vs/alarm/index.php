<?php
require_once("../../includes/connection.php");
$lng=$_REQUEST['lng'];
$lat=$_REQUEST['lat'];
$alarm_radio=$_REQUEST['dist'];
$max_cams=$_REQUEST['max_cams'];
$distance=$alarm_radio/100;
?>

<!DOCTYPE html>
<!-- saved from url=(0037)https://www.hlsplayer.net/rtmp-player -->
<html lang="en">
<head>
	<style>
		#player{
        width: 100%;	
       height: 300px;
      }
	</style>	
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="refresh" content="1000;url=../../index.php"/>
	<meta name="viewport" content="width=device-width, initial-scale=1,shrink-to-fit=no">
	<title>Vloxy Security</title>
	<meta name="keywords" content="rtmp player, rtmp">
	<meta name="description" content="This page allows you to play RTMP streams online with no installation required.">
	<script async="" src="../RTMP Player - HLSPlayer_files/beacon.js"></script>
	<script type="text/javascript" async="" src="../RTMP Player - HLSPlayer_files/ga.js"></script>
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="../css/bootstrap-extend.css">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	
	<meta name="viewport" content="width=device-width, initial-scale=1,shrink-to-fit=no">
	
	</head>
<body>
	
	<div class="container" >
	  <div class="row">
			<?php
			/// consulta en base de datos de las camaras que estan al rededor
			
			$radius =mysqli_query($con,"SELECT typecam,cameraid,latitud,longitud,ipserver,dcamara, 
							( 6371 * acos(cos(radians(".$lat.")) * cos(radians(latitud)) * cos(radians(longitud)
							- radians(".$lng.")) + sin(radians(".$lat.")) * sin(radians(latitud)))) AS distance
							FROM vloxysecuritydb.cameras HAVING distance < ".($distance/10)." ORDER BY distance;");
		
			$numradius=mysqli_num_rows($radius);
			if($numradius!=0)
			{
				$contador=1;
				while(($rowrad=mysqli_fetch_assoc($radius)) && ($contador <= $max_cams)){
					$ip=$rowrad['ipserver'];
					$channel=$rowrad['dcamara'];
			?>
			<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
				<div class="text-center">
					<div id="capa">
						<div id="player-container" class="player-container" style="background-color: black; width: 100%; height: 100%; position: relative;">
						<?php if($rowrad['typecam']==1){ ?>
								<iframe width="250" height="300" style="width: 98%;visibility: visible;" src="../../cam/?id=<?php echo $rowrad['cameraid'];?>" id="iframe" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
								<?php }else{ ?>		
								<object type="application/x-shockwave-flash"
								id="player" data="../RTMP Player - HLSPlayer_files/GrindPlayer.swf">
								<param name="allowFullScreen" value="true">
								<param name="allowScriptAccess" value="always">
								
								<param name="flashvars" value="autoPlay=true&amp;src=rtmp://<?php echo $ip;?>:1935/<?php echo $channel;?>">
								</object>
								<?php } ?>
						</div>	
					</div>
				</div>
				<hr></hr>				
			</div>
			<?php
				$contador++;
				}// end while
				
			} // end if
			/// end de la consulta
			?>
			<div class="clearfix"></div>
		
		</div>
	</div>
				
</body>
</html>

