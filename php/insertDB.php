<?php
$servername = "sql302.epizy.com";
$username = "epiz_32663919";
$password = "kA6kgGOpOSCI";
$dbname = "epiz_32663919_UserQuizDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Taking all 5 values from the form data(input)
$name =  $_POST['name'];
$country = $_POST['country'];
$score =  $_POST['score'];


$sql = "INSERT INTO userScoreBoard (name, country, score)
VALUES ('$name', '$country', '$score')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

if(isset($_POST['button'])){
    echo $_SERVER[HTTP_REFERER]; 
   }
?>

