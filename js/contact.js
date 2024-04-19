const inputPseudo = document.getElementById("PseudoInput");
const inputMail = document.getElementById("MailInput");
const btnValidation = document.getElementById("btn-envoie-message");

inputPseudo.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);

// Function permettant de valider tout le formulaire
function validateForm() {
    const pseudoOk = validateRequired(inputPseudo);
    const mailOk = validateMail(inputMail);

    // Activer/désactiver le bouton d'envoi en fonction de la validité des champs
    btnValidation.disabled = !(pseudoOk && mailOk);
}

function validateMail(input) {
    // Définir le regex pour valider l'adresse email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input) {
    if (input.value !== '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction pour valider et soumettre le formulaire
function validateAndSubmit() {
    // Valider le formulaire
    const pseudoOk = validateRequired(inputPseudo);
    const mailOk = validateMail(inputMail);

    // Si le formulaire est valide, soumettre le formulaire via AJAX
    if (pseudoOk && mailOk) {
        // Récupérer les données du formulaire
        const pseudo = inputPseudo.value;
        const email = inputMail.value;
        const message = document.getElementById("exampleFormControlTextarea1").value;

        // Construction des données à envoyer
        const formData = new FormData();
        formData.append("pseudo", pseudo);
        formData.append("email", email);
        formData.append("message", message);

        // Envoi des données via AJAX
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/Mail_PHP/envoi_email.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Analyser la réponse JSON si nécessaire
                    const response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        // Afficher le modal de succès si l'envoi est réussi
                        document.getElementById("EnvoiSuccès").style.display = "block";
                    } else {
                        // Afficher le modal d'erreur avec le message d'erreur
                        const errorMessage = document.getElementById("EnvoiErreurMessage");
                        errorMessage.textContent = "Erreur: " + response.error;
                        document.getElementById("EnvoiErreur").style.display = "block";
                    }
                } else {
                    // Afficher le modal d'erreur générique
                    const errorMessage = document.getElementById("EnvoiErreurMessage");
                    errorMessage.textContent = "Une erreur est survenue lors de l'envoi du message.";
                    document.getElementById("EnvoiErreur").style.display = "block";
                }
            }
        };
        xhr.send(formData);
    }
}