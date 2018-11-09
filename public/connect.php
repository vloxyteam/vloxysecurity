<?php
$con = mysqli_connect("192.168.1.37","root","masterkey","vloxysecuritydb");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>

