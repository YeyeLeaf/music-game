<?php
session_start();
$name = isset($_SESSION['name']) ? $_SESSION['name'] : "";
if (!$name) {
    echo "Please log in.";
    header('location: index.html');
}
$_SESSION['history_inserted'] = false;
?>
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
    <link rel="stylesheet" type="text/css" href="css/mainpage.css" />
</head>

<body>
    <div class="content">
        <!-- Slider main container -->
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <?php
                require('conn_mysql.php');
                $sql_query = 'SELECT * from song';
                $result = mysqli_query($conn, $sql_query);
                while ($row = mysqli_fetch_assoc($result)) {
                    print('<div class="swiper-slide">
                        <a href="play.html"><img src="' . $row['img'] . '" width="100%" class="' . $row['songName'] . '"></a>
                        <h2>' . $row['songName'] . '</h2>
                        <h3>' . $row['singer'] . '</h3>
                    </div>');
                }
                ?>
            </div>
        </div>
        <div class="person">
            <a href="person.php"><img src="img/leaf.png" class="profile"></a>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <script>
        const swiper = new Swiper('.swiper', {
            effect: "coverflow",
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            freeMode: true,
            keyboard: {
                enabled: true,
            },
            grabCursor: false,
            coverflowEffect: {
                rotate: 100,
                stretch: 50,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });
    </script>
    <script>

    </script>
    <script src="js/transport.js"></script>
</body>

</html>