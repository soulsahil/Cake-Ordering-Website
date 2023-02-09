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

// Check if the user is logged in and is an administrator
if (!isset($_SESSION["logged_in"]) || !isset($_SESSION["is_admin"]) || !$_SESSION["is_admin"]) {
    // Redirect the user to the login page if they are not logged in or are not an administrator
    header("Location: admin_dash.html");
    exit;
}

// Retrieve all the orders from the 'orders' table
$sql = "SELECT * FROM orders";
$result = mysqli_query($conn, $sql);

// Display the orders in a table
echo '<table>';
echo '<tr>';
echo '<th>ID</th>';
echo '<th>First Name</th>';
echo '<th>Last Name</th>';
echo '<th>Email</th>';
echo '<th>Address</th>';
echo '<th>Cake</th>';
echo '<th>Quantity</th>';
echo '<th>Price</th>';
echo '</tr>';

while ($row = mysqli_fetch_assoc($result)) {
    echo '<tr>';
    echo '<td>' . $row["id"] . '</td>';
    echo '<td>' . $row["first_name"] . '</td>';
    echo '<td>' . $row["last_name"] . '</td>';
    echo '<td>' . $row["email"] . '</td>';
    echo '<td>' . $row["address"] . '</td>';
    echo '<td>' . $row["cake"] . '</td>';
    echo '<td>' . $row["quantity"] . '</td>';
    echo '<td>' . $row["price"] . '</td>';
    echo '</tr>';
}

echo '</table>';

// Close the connection
mysqli_close($conn);

?>
