<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php'; // Chemin vers PHPMailer autoloader

// Initialiser les variables de succès et d'erreur à false
$success = false;
$error = "";

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['pseudo'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Envoyer un e-mail
    $mail = new PHPMailer(true);

    try {
        // Paramètres du serveur SMTP d'O2Switch
        $mail->isSMTP();
        $mail->Host = 'mail.wikishinyhunting.fr';
        $mail->SMTPAuth = true;
        $mail->Username = 'smtp.o2switch@wikishinyhunting.fr'; // Votre adresse O2Switch
        $mail->Password = '8f8s-5fzA-6y8+'; // Votre mot de passe O2Switch
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Destinataire, sujet et contenu de l'e-mail
        $mail->setFrom($email, $nom);
        $mail->addAddress('wikishinyhunting@gmail.com'); // Votre adresse e-mail
        $mail->Subject = 'Nouveau message depuis le formulaire de contact';
        $mail->Body = "Nom: $nom\nEmail: $email\n\nMessage:\n$message";

        // Envoyer l'e-mail
        $mail->send();

        // Marquer l'envoi comme un succès
        $success = true;

    } catch (Exception $e) {
        // Capturer l'exception et stocker le message d'erreur
        $error = $e->getMessage();
    }
}

// Retourner une réponse JSON
header('Content-Type: application/json');
echo json_encode(array('success' => $success, 'error' => $error));
?>