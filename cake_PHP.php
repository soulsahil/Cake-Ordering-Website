<?php
session_start();
include 'index.html';
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

// Search the 'users' table for a matching username and password
$sql = "SELECT * FROM signup WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $sql);

// If a matching username and password is found, log the user in and redirect them to the protected content on your website
if (mysqli_num_rows($result) > 0) {
    
    $_SESSION["logged_in"] = true;
    // header("Location: index.html");

    echo '<script>document.getElementById("signup-login-header").remove();</script>';
    
    $insert = "INSERT INTO login (username, password) VALUES ('$username', '$password')";
    mysqli_query($conn, $insert);
    exit;
    }
// If a matching username and password is not found, display an error message
else {
    header("Location: cake_PHP.php?error=invalid_credentials");
    exit;
}

// Close the connection
mysqli_close($conn);

?>
