<?php
// Connect to the database


$conn = mysqli_connect("localhost", "root", "", "cake ordering website");

// Get the customer details from the database
$result = mysqli_query($conn, "SELECT first_name, last_name,username FROM signup");

// Display the customer details in an HTML table
echo "<style>";
        echo "body {";
        echo "background-image: url('images/bakeries.jpg');";
        echo "color:white;";
    echo "position: absolute;";
    echo "top:0;";
    echo "left:0";
        echo "object-fit: cover;";
    echo "height: 100vh;";
    echo "width: 100%;";
        echo "}";
        echo ".overlay{";
            echo "position: absolute; ";
            echo "top:0; ";
            echo "object-fit:cover; ";
            echo "background-color: rgba(0,0,0,0.6);";
    echo "z-index:-1;";
    echo "height: 100vh;";
    echo "width: 100%;";
        echo "left:0; ";
        echo "}";
        echo ".cells{";
            echo "background-color:black; ";
            
            echo "padding:10px; ";
        echo "}";
        echo "</style>";
        echo '<link rel="stylesheet" href="css/styles.css">';
        echo "<div class=overlay>";
            echo "<table class='centerTable'>";
echo "<tr><th class=cells>First Name</th><th class=cells>Last Name</th><th class=cells>Username</th></tr>";
while($row = mysqli_fetch_assoc($result)) {
    echo "<tr>";
    echo "<td class=cells>" . $row['first_name'] . "</td>";
    echo "<td class=cells>" . $row['last_name'] . "</td>";
    echo "<td class=cells>" . $row['username'] . "</td>";
       echo "</tr>";
}
echo "</table>";

// Close the connection
mysqli_close($conn);
?>

