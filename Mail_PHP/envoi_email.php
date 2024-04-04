<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Chemin vers PHPMailer autoloader

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
        $mail->Username = 'smtp.o2switch@wikishinyhunting.fr'; // Votre adresse Gmail
        $mail->Password = '8f8s-5fzA-6y8+'; // Votre mot de passe Gmail
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Destinataire, sujet et contenu de l'e-mail
        $mail->setFrom($email, $nom);
        $mail->addAddress('wikishinyhunting@gmail.com'); // Votre adresse e-mail
        $mail->Subject = 'Nouveau message depuis le formulaire de contact';
        $mail->Body = "Nom: $nom\nEmail: $email\n\nMessage:\n$message";

        // Envoyer l'e-mail
        $mail->send();
       // Si l'e-mail est envoyé avec succès, vous pouvez rediriger l'utilisateur vers une page de confirmation ou afficher un message de confirmation ici
   
    } catch (Exception $e) {
        // Gérer l'exception en affichant un message d'erreur ou en enregistrant les détails de l'erreur dans un fichier de journal, etc.
        echo 'Erreur lors de l\'envoi de l\'e-mail : ', $e->getMessage();
    }
}
?>