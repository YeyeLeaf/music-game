 <?php
    $oldname = isset($_SESSION["name"]) ? $_SESSION["name"] : "";
    $name = $_POST['name'];
    $pwd = $_POST['pwd'];
    if ($_FILES["upfile"]["type"] != 'image/jpeg' && $_FILES["upfile"]["type"] != 'image/png') {
        echo 'Your photo must be jpg or png';
        header('refresh:3 ; url=edit.php');
    } else if ($_FILES["upfile"]["size"] > 0) {
        //開啟圖片檔
        $file = fopen($_FILES["upfile"]["tmp_name"], "rb");
        // 讀入圖片檔資料
        $fileContents = fread($file, filesize($_FILES["upfile"]["tmp_name"]));
        //關閉圖片檔
        fclose($file);

        // 圖片檔案資料編碼
        $fileContents = base64_encode($fileContents);
        //連結MySQL Server
        require("conn_mysql.php");
        $name = $_FILES["upfile"]["name"];
        $size = $_FILES["upfile"]["size"];
        $type = $_FILES["upfile"]["type"];
        //將圖片檔案資料寫入資料庫
        $SQLSTR = "UPDATE `personal_infor` SET name='$name',password='$pwd', photo='$fileContents' WHERE name='$oldname'";

        if (!mysqli_query($db_link, $SQLSTR) == 0) {
            header('Location:edit.php');
        } else {
            echo "There is something wrong, please try again.";
        }
    } else {
        echo "There is something wrong, please try again.";
    } ?> 