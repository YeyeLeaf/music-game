<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
    <link rel="stylesheet" type="text/css" href="css/all.css" />
    <link rel="stylesheet" type="text/css" href="css/edit.css" />
</head>

<body>
    <div class="content">
        <form action="update_infor.php" class="update_infor" method="post">
            <legend>Edit</legend>
            <?php
            session_start();
            $name = isset($_SESSION['name']) ? $_SESSION['name'] : "";
            if (!$name) {
                echo "Please log in.";
                header('location: index.html');
            } else {
                require('conn_mysql.php');
                $sql_query = "SELECT * FROM user WHERE name = '$name'";
                $result = mysqli_query($conn, $sql_query);
            }
            ?>
            <div class="photo"><label for="photo">Choose your photo</label>
                <input type="file" name="photo" id="photo" />
            </div>
            <div class="name">
                <i class="fas fa-user" style="color: white"></i>
                <input type="text" placeholder="Name" name="name" />
            </div>
            <div class="pwd">
                <i class="fas fa-lock" style="color: white"></i>
                <input type="password" placeholder="Password" name="pwd" />
            </div>
            <input type="submit" value="Change" class="Btn" />
        </form>
    </div>
</body>

</html>