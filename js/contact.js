//Implémenter le JS de ma page

const inputPseudo = document.getElementById("PseudoInput");
const inputMail = document.getElementById("MailInput");
const btnValidation = document.getElementById("btn-envoie-message");

inputPseudo.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    const pseudoOk = validateRequired(inputPseudo);
    const mailOk = validateMail(inputMail);

    if(pseudoOk && mailOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;  
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}