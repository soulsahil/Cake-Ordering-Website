<?php
    // // Connect to the database
    // $conn = mysqli_connect("localhost", "root", "", "cake ordering website");

    // // Retrieve the form data
    // $product_id = mysqli_real_escape_string($conn, $_POST['product_id']);
    // $quantity = mysqli_real_escape_string($conn, $_POST['quantity']);
    // $name = mysqli_real_escape_string($conn, $_POST['name']);
    // $address = mysqli_real_escape_string($conn, $_POST['address']);


    // // Insert the data into the orders table
    // $query = "INSERT INTO orders (product_id, quantity, name, address) VALUES ($product_id, $quantity, '$name', '$address')";
    // $result = $conn->query($query);
    
    // if ($result) {
    //     echo "Order placed successfully.";
    // } else {
    //     echo "Error: " . $query . "<br>" . $conn->error;
    // }
    // mysqli_close($conn);
    
    // $product_id = $_GET['orderProductId'];
    // $product_name = $_GET['productName'];
    // $name = $_GET['name'];
    // $address = $_GET['address'];
   
    $product_id = isset($_POST['orderProductId']) ? $_POST['orderProductId'] : null;
    $product_name = isset($_POST['productName']) ? $_POST['productName'] : null;
    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $address = isset($_POST['address']) ? $_POST['address'] : null;
    // Connect to the database
    $conn = mysqli_connect("localhost", "root", "", "cake ordering website");

    // Create a query to insert the order into the orders table
    $query = "INSERT INTO orders (product_id, product_name, name, address) VALUES ('$product_id', '$product_name', '$name', '$address')";

    // Execute the query and check for errors
    if(mysqli_query($conn, $query)) {
        echo 'Order placed successfully.';
    } else {
        echo 'Error: ' . mysqli_error($conn);
    }

    // Close the connection
    mysqli_close($conn);
?>
