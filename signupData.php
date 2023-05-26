<?php
require("conn_mysql.php");
$name = isset($_POST['name']) ? $_POST['name'] : "";
$pwd = isset($_POST['pwd']) ? $_POST['pwd'] : "";
$sql_query = "SELECT * FROM personal_infor WHERE name='$name'";
$result = mysqli_query($conn, $sql_query);
if (mysqli_num_rows($result)) {
    echo "Your name has been used, please select another name.";
    header("refresh:3 ; url=register.html");
} else {
    $sql_query = "INSERT INTO personal_infor (name, password) VALUES ('$name', '$pwd')";
    $result = mysqli_query($conn, $sql_query);
    if (!$result) {
        die("Failed to sign up. Please try again.");
    }
    header("Location: index.html");
}
