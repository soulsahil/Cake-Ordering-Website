<?php
    $to = $_POST["email"];
    $subject = "Order Confirmation";
    $message = "Thank you for your order! Your order has been received and will be processed shortly.";
    $headers = "From: soulsahil200214@gmail.com";

    mail($to, $subject, $message, $headers);
?>