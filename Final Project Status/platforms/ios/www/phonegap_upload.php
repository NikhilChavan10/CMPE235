<?
phpprint_r($_FILES);
$new_image_name = $_POST["file_name"];
move_uploaded_file($_FILES["file"]["tmp_name"] ,'uploads/'.$new_image_name);
$file_url = "http://nikhils-chavan.com/uploads/" . $new_image_name;
generateQRCode($file_url);
echo "<script>
alert('There are no fields to generate a report');

</script>";
$data=array('myimage' =>'@'.realpath( 'uploads/'.$new_image_name));	


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