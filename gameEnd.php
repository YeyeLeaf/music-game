<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
    <link rel="stylesheet" type="text/css" href="css/gameEnd.css" />
    <link rel="stylesheet" type="text/css" href="css/all.css" />
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
</head>

<body>
    <div class="scoreBoard">
        <div class="infor">
            <?php
            session_start();
            $name = isset($_SESSION['name']) ? $_SESSION['name'] : "";
            $song = isset($_GET['song']) ? $_GET['song'] : "";
            if (!$name || !$song) {
                header('location: index.html');
            } else {
                $perfect = $_GET['perfect'];
                $nice = $_GET['nice'];
                $good = $_GET['good'];
                $miss = $_GET['miss'];
                $total = $miss * -1 + $good * 1 + $nice * 2 + $perfect * 5;
                require('conn_mysql.php');
                $sql_query = "SELECT * FROM song WHERE songName = '$song'";
                $result = mysqli_query($conn, $sql_query);
                if (!mysqli_num_rows($result)) header('location: index.html');
                else {
                    $row = $result->fetch_assoc();
                    print('<h2>' . $song . '</h2>
                    <p>PERFECT: ' . $perfect . '</p>
                    <p>NICE: ' . $nice . '</p>
                    <p>GOOD: ' . $good . '</p>
                    <p>MISS: ' . $miss . '</p>
                    <p>Total Score: ' . $total . '</p>
                </div>
                <img src="' . $row['img'] . '">');
                }
                if (!isset($_SESSION['history_inserted']) || $_SESSION['history_inserted'] == false) {
                    $sql_query = "INSERT INTO `game_history`(`name`, `song`, `perfect`, `nice`, `good`, `miss`, `total`) VALUES ('$name', '$song', '$perfect',	'$nice', '$good', '$miss', '$total')";
                    $result = mysqli_query($conn, $sql_query);
                    $_SESSION['history_inserted'] = true;
                }
            }
            ?>

        </div>
        <a class="back" href="mainpage.php">Back</a>
</body>

</html>