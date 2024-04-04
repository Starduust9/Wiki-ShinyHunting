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

    // Si le formulaire est valide, soumettre le formulaire
    if (pseudoOk && mailOk) {
        document.querySelector('form').submit(); // Soumettre le formulaire
    }
}
