<?php
require_once 'config.php';

$json = array();
$tel = isset( $_POST['tel'] ) ? $_POST['tel'] : '';
$name = isset( $_POST['name'] ) ? $_POST['name'] : '';
$message = isset( $_POST['message'] ) ? $_POST['message'] : '';

if( !$name ) {
    $json['error']['name'] = 'Пожалуйста, введите имя.';
}
if( !$message ) {
    $json['error']['message'] = 'Пожалуйста, введите сообщение.';
}
if( !$tel || !preg_match('#^[-+0-9()\s]+$#', $tel ) ) {
    $json['error']['tel'] = 'Пожалуйста, введите телефон.';
}


// If no errors
if( !isset( $json['error'] ) ) {
    // Email text
    $mail_message = $name . "\r\n\r\n";
    $mail_message .= $message. "\r\n\r\n";;
    $mail_message .= $tel;
    // Email title
    $mail_headers  = "Content-type: text/plain; charset=utf-8\r\n";
    $mail_headers .= "From: {$tel}\r\n";
    // Sending email
    mail( $to_email, $mail_subject, $mail_message, $mail_headers );
    mail( $to1_email, $mail_subject, $mail_message, $mail_headers );
    mail( $to2_email, $mail_subject, $mail_message, $mail_headers );
    $json['success'] = 'Ваше сообщение успешно отправлено!';
}

echo json_encode( $json );
?>