<?php
    // Connect to the database
    $conn = mysqli_connect("localhost", "root", "", "cake ordering website");

    // Retrieve all orders from the orders table
    $query = "SELECT * FROM orders";

    // Execute the query and retrieve the orders
    $result = $conn->query($query);

    // Check if there are any orders
    if ($result->num_rows > 0) {

//         echo "<table>";
// echo "<tr><th>First Name</th><th>Last Name</th><th>Username</th></tr>";
// while($row = mysqli_fetch_assoc($result)) {
//     echo "<tr>";
//     echo "<td>" . $row['first_name'] . "</td>";
//     echo "<td>" . $row['last_name'] . "</td>";
//     echo "<td>" . $row['username'] . "</td>";
//     echo "</tr>";
// }
// echo "</table>";
        // Loop through the orders and display them
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
    //     echo ".overlay{";
    //         echo "position: absolute; ";
    //         echo "top:0; ";
    //         echo "object-fit:cover; ";
    //         echo "background-color: rgba(0,0,0,0.6);";
    // echo "z-index:-2;";
    // echo "height: 100vh;";
    // echo "width: 100%;";
    //     echo "left:0; ";
    //     echo "}";
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
            // echo "<td><a href='delete.php?product_id=" . $row["product_id"] . "'>Delete</a></td>";
            echo "</tr>";
        }
    } else {
        echo "No orders found.";
    }

    mysqli_close($conn);
?>

<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js">
$(document).ready(function() {
  $('.delete-btn').click(function() {
    var product_id = $(this).data('id');
    $.ajax({
      url: 'delete.php',
      type: 'POST',
      data: {product_id: product_id},
      success: function(response) {
        alert("Product deleted successfully!");
        location.reload();
      }
    });
  });
});
</script> -->
