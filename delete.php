<?php
  $conn = mysqli_connect("localhost", "root", "", "cake ordering website");
  if (isset($_POST["product_id"])) {
    $product_id = $_POST["product_id"];
    $query = "DELETE FROM orders WHERE order_id = (Select order_id from orders where product_id = $product_id);";
    mysqli_query($conn, $query);
  }
  mysqli_close($conn);
?>