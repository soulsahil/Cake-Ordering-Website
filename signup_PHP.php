<?php

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

// Retrieve the user's inputted first name, last name, username, and password
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$username = $_POST["username"];
$password = $_POST["password"];

// Insert a new row into the 'users' table with the specified values
$sql = "INSERT INTO signup (first_name, last_name, username, password)
VALUES ('$first_name', '$last_name', '$username', '$password')";

if (mysqli_query($conn, $sql)) {
    header("Location: login.html");
    exit;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the connection
mysqli_close($conn);

?>
