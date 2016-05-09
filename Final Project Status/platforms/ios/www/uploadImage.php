<?php

$target_dir = "uploaded_images/";
$target_file = $target_dir  . date('Y_m_d_h_s') . "_" . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
$file_url = "www.nshirur.com/qrCodeGenerator/" . $target_file;

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 5000000) {
    echo "Sorry, your file is too large : " . $_FILES["fileToUpload"]["size"];
    $uploadOk = 0;
}
// Allow certain file formats
$imageFileType = strtoupper($imageFileType);
if($imageFileType != "JPG" && $imageFileType != "PNG" && $imageFileType != "JPEG"
&& $imageFileType != "GIF" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

if($uploadOk == 0) {
  echo "Failed";
} else {
  move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
  generateQRCode($file_url);
}


function generateQRCode($file_location)
{
    
    $size         =  "150x150";  //150 * 150
    $content       = $file_location;
    $correction    = "L";
    $encoding      = "UTF-8";

    $rootUrl = "https://chart.googleapis.com/chart?cht=qr&chs=$size&chl=$content&choe=$encoding&chld=$correction";

    echo '<img src="'.$rootUrl.'">';
}

?>