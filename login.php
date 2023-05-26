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
    header('refresh:3 ; url=play.html');
} else {
    echo "There is something wrong with your name or password.";
    header('refresh:3 ; url=index.html');
}
// $id=$_POST['id'];
// 	$password=$_POST['password'];

// 	require("conn_mysql.php");
// 	$sql_query_login="SELECT * FROM user where id='$id' AND password='$password'";
// 	$resultl=mysqli_query($db_link,$sql_query_login) or die("查詢失敗");
// 	if(mysqli_num_rows($resultl)){
// 		echo "登入成功";
// 		$_SESSION['id']=$id;
// 		header('refresh:3 ; url=mainpage.php');
// 	}
// 	else{
// 		echo "登入失敗";
// 		header('refresh:3 ; url=index.html');
// 	}