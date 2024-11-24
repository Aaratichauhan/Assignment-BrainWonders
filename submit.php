<?php
include 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $city = $_POST['city'];

    $sql = "INSERT INTO users (name, email, contact, city) VALUES ('$name', '$email', '$contact', '$city')";
    if ($conn->query($sql) === TRUE) {
        header("Location: index.php"); 
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
