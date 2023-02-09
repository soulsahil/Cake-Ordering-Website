
// // Connect to the database
// $db = new mysqli('localhost', 'root', '', 'cake ordering website');

// // Retrieve the latest product details from the database
// $query = "SELECT productID, p_name, p_price FROM products";
// $result = $db->query($query);

// while ($product = $result->fetch_assoc()) {
<!-- //     echo '<img alt="'.$product['productID'].'">'; -->
<!-- //     echo '<p>'.$product['p_name'].'</p>'; -->
<!-- //     echo '<p>'.$product['p_price'].'</p>'; -->
// }

// mysqli_close($db);
<?php
// db.php
// $conn = mysqli_connect("localhost", "root", "", "cake ordering website");
// if (!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
// }

// $query = "SELECT * FROM products WHERE productID = '$productID'";
// $result = $conn->query($query);
// $product = $result->fetch_assoc();

// $product_image = $product['product_image'];
// $product_name = $product['p_name'];
// $product_price = $product['p_price'];

// mysqli_close($conn);

//111Main $conn = mysqli_connect("localhost", "root", "", "cake ordering website");
// if (!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
// }

// $query = "SELECT * FROM products WHERE productID = '$productID'";
// $result = $conn->query($query);
// $product = $result->fetch_assoc();

// $product_name = $product['p_name'];
// $product_price = $product['p_price'];

// // update the product name on the index.html page
// $index_html = file_get_contents('index.html');
// $index_html = str_replace('<p class="name">p_name</p>', '<p class="name">'.$product_name.'</p>', $index_html);
// file_put_contents('index.html', $index_html);

// mysqli_close($conn);

$conn = mysqli_connect("localhost", "root", "", "cake ordering website");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// fetch the product details from the database
$query = "SELECT * FROM products WHERE productID = $productID";
$result = $conn->query($query);
$product = $result->fetch_assoc();

// retrieve the product name
$product_name = $product['p_name'];

// update the product name on the index.html page
$index_html = file_get_contents('index.html');
$index_html = str_replace('<p class="name">Pineapple Cake</p>', '<p class="name">'.$product_name.'</p>', $index_html);
file_put_contents('index.html', $index_html);

mysqli_close($conn);
?>