<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=" From: $name \n Message: $message";
$recipient = "loncarnej@gmail.com";
$subject = "Kontaktni obrazec";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Sporočilo je bilo poslano, odgovor prejmete v najkrajšem času." . " -" . "<a href='./' style='text-decoration:none;color:#ff0099;'> Nazaj na začetno stran</a>";
?>
