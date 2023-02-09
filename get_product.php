<?php
    // Connect to the database
    $conn = mysqli_connect("localhost", "root", "", "cake ordering website");

    // Retrieve the product id
    $product_id = $_GET['product_id'];

    // Create a query to select the specific product from the products table
    $query = "SELECT p_name FROM products WHERE productID = " . $product_id;

    // Execute the query and retrieve the product details
    $result = $conn->query($query);
    $product = $result->fetch_assoc();

    // Return the product details in JSON format
    echo json_encode($product);

    mysqli_close($conn);
?>