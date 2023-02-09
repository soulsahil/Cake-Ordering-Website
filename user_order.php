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

// Handle form submission


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get form data
  $first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
  $last_name = mysqli_real_escape_string($conn, $_POST['last_name']);
  $email = mysqli_real_escape_string($conn, $_POST['email']);
  $address = mysqli_real_escape_string($conn, $_POST['address']);
  $cake = mysqli_real_escape_string($conn, $_GET['name']);
  $quantity = mysqli_real_escape_string($conn, $_POST['quantity']);
  $price = mysqli_real_escape_string($conn, $_POST['price']);

  // Insert order into database
  $sql = "INSERT INTO orders (first_name, last_name, email, address, cake, quantity, price) VALUES ('$first_name', '$last_name', '$email', '$address', '$cake', '$quantity', '$price')";
  if (mysqli_query($conn, $sql)) {
    $message = "Order placed successfully";
    header("Location: index.html");
  } else {
    $message = "Error placing order: " . mysqli_error($conn);
  }
}
?>
<script src="cart.js">
    for (const product of window.products) {
  const tag = product.tag;
  window.location.href = `user_order.php?name=${tag}`;
}
</script>
// const productNames = document.querySelectorAll('window.products[name]');

// productNames.forEach(productName => {
//   const imgElement = document.querySelector(`img[alt="${productName}"]`);
//   const tag = imgElement.alt;
//   window.location.href = `user_order.php?name=${tag}`;
// });
