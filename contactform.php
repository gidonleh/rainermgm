<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "gadi.lehmann@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.". \n\n".$message;

    mail($mailTo, $lastname, $txt, $headers);

    header("Location: index.php?mailsend");
}