<?php
session_start();

$name = $_POST['name'];
$pwd = $_POST['pwd'];
require('conn_mysql.php');
$sql_query = "SELECT * FROM personal_infor where name='$name' AND password = '$pwd'";
$result = mysqli_query($conn, $sql_query);
if (mysqli_num_rows($result)) {
    $_SESSION['name'] = $name;
    echo "success";
    header('refresh:3 ; url=mainpage.php');
} else {
    echo "There is something wrong with your name or password.";
    header('refresh:3 ; url=index.html');
}
