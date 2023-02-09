<?php 
/*ADMIN LOGIN PHP*/



// Connect to the database
$host = "localhost";
$user = "root";
$password = "";
$dbname = "cake ordering website";

$conn = mysqli_connect($host, $user, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve the user's inputted username and password
$username = $_POST["username"];
$password = $_POST["password"];

// Search the 'administrators' table for a matching username and password
$sql = "SELECT * FROM administrators WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $sql);

// If a matching username and password is found, log the user in and redirect them to the protected content on your website
if (mysqli_num_rows($result) > 0) {
    session_start();
    $_SESSION["logged_in"] = true;
    header("Location: admin_dash.html");
    exit;
}
// If a matching username and password is not found, display an error message
else {
    echo "Invalid login credentials";
}

// Close the connection
mysqli_close($conn);
?>





