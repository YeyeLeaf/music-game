<?php
session_start();

$name = $_POST['name'];
$pwd = $_POST['pwd'];
require('conn_mysql.php');
$sql_query = "SELECT * FROM personal_infor where name='$name'";
$result = mysqli_query($conn, $sql_query);
if (mysqli_num_rows($result)) {
    $row = mysqli_fetch_assoc($result);
    if (password_verify($pwd, $row['password'])) {
        $_SESSION['name'] = $name;
        echo "success";
        header('location: mainpage.php');
    } else {
        echo "There is something wrong with your name or password.";
        header('location: index.html');
    }
} else {
    echo "There is something wrong with your name or password.";
    header('location: index.html');
}
