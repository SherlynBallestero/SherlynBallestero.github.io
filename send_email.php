
<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "m.hdz.rene@gmail.com"; // tu correo real
    $email = strip_tags($_POST["email"])  ? $_POST["email"] : '';
    $to = "tucorreo@ejemplo.com"; // tu correo real
    $subject = "Nuevo mensaje";
    $name = isset($_POST["name"]) ? $_POST["name"] : '';
    $message = isset($_POST["message"]) ? $_POST["message"] : '';
    $body = "Nombre: $name\nMensaje:\n$message";
    $headers = "From: hello@rensherenterprise.com\r\n"; // usa tu dominio
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "No se recibió ningún dato.";
}
?>