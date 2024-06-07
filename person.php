<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
    <link rel="stylesheet" type="text/css" href="css/all.css" />
    <link rel="stylesheet" type="text/css" href="css/person.css" />
</head>

<body>
    <div class="content">
        <?php
        session_start();
        $name = isset($_SESSION['name']) ? $_SESSION['name'] : "";
        if (!$name) {
            header('location: index.html');
        } else {
            print('<div class="infor">
            <img src="img/leaf.png">
            <h2>' . $name . '</h2>
        </div>');
        }
        ?>

        <div class="game_his">
            <table>
                <thead>
                    <tr>
                        <th>SONG</th>
                        <th>PERFECT</th>
                        <th>NICE</th>
                        <th>GOOD</th>
                        <th>MISS</th>
                        <th>TOTAL SCORE</th>
                        <th>PLAY TIME</th>
                    </tr>

                </thead>
                <tbody>
                    <?php
                    require('conn_mysql.php');
                    $sql_query = "SELECT * FROM game_history WHERE name = '$name'";
                    $result = mysqli_query($conn, $sql_query);
                    while ($row = mysqli_fetch_assoc($result)) {
                        print('<tr>
                        <td>' . $row["song"] . '</td>
                        <td>' . $row["perfect"] . '</td>
                        <td>' . $row["nice"] . '</td>
                        <td>' . $row["good"] . '</td>
                        <td>' . $row["miss"] . '</td>
                        <td>' . $row["total"] . '</td>
                        <td>' . $row["time"] . '</td>
                    </tr>');
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
    <a href="mainpage.php"><button>Back</button></a>
</body>

</html>