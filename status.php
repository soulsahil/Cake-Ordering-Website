<?php
 $conn = mysqli_connect("localhost", "root", "", "cake ordering website");
 $query = "SELECT * FROM orders";
 $result = $conn->query($query);
 if ($result->num_rows > 0) {
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
     echo ".cells{";
         echo "background-color:black; ";
         
         echo "padding:10px; ";
     echo "}";
     echo "</style>";
     echo '<link rel="stylesheet" href="css/styles.css">';
 echo "<div class=overlay>";
     echo "<table class='centerTable'>";
 echo "<tr><th class='cells'>Product ID</th><th class='cells'>Product Name</th><th class='cells'>Username</th><th class='cells'>Address</th></tr>";
     while ($row = $result->fetch_assoc()) {
     echo "<tr>";
         echo "<td class='cells'>" . $row["product_id"] . "</td>";
         echo "<td class='cells'>" . $row["product_name"] . "</td>";
         echo "<td class='cells'>" . $row["name"] . "</td>";
         echo "<td class='cells'>" . $row["address"] . "</td>";
         echo "<td><a href='cancel.html'>Cancel</a></td>";
         echo "</tr>";
     }
 } else {
     echo "No orders found.";
 }

 mysqli_close($conn);
?>