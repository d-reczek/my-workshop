<?php

$to      = 'luzak2501@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Nowy email od ' . $name . '(' . $email . ')';
$message = $_POST['message'];
$headera = 'From: '. $name . '(' . $email . ')';
$headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n";

if (mail($to, $subject, $message, $headers));

    echo "<script>alert('Wysłano!'); document.location.href='index.html';</script>";
?>