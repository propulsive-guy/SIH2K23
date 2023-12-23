<?php
$servername = "localhost";  // Change to your MySQL server address
$username = "root"; // Change to your MySQL username
$password = "pyb231273"; // Change to your MySQL password
$dbname = "priyanshu";   // Change to your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch acts from the database
$result = $conn->query("SELECT * FROM acts");
$acts = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $acts[] = $row;
    }
}

// Return acts as JSON
header('Content-Type: application/json');
echo json_encode($acts);

$conn->close();
?>
