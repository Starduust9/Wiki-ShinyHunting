document.addEventListener('DOMContentLoaded', function() {
     // Réinitialiser la valeur du clic dans le localStorage lors du chargement de la page uniquement si le cache est vidé manuellement
     if (!performance.getEntriesByType("navigation")[0].type || performance.getEntriesByType("navigation")[0].type === "navigate") {
        localStorage.removeItem('clics');
    }
    let clics = localStorage.getItem('clics') ? parseInt(localStorage.getItem('clics')) : 0;

    // Mettre à jour le logo en fonction du nombre de clics
    if (clics >= 5 && clics < 8) {
        document.getElementById("logo").src = "/assets/picture/SpriteEvoliShiny.png";
    }
    else if (clics >= 8 && clics < 10) {
        document.getElementById("logo").src = "/assets/picture/SpriteShadowMewtwo.png";
    }
    else if (clics >= 10 && clics < 12) {
        document.getElementById("logo").src = "/assets/picture/SpriteGobouShiny.png";
    }
    else if (clics >= 12 && clics < 15) {
        document.getElementById("logo").src = "/assets/picture/SpriteMégaGardevoirShiny.png";
    }
    else if (clics >= 15) {
        document.getElementById("logo").src = "/assets/picture/SpriteMewShiny.png";
    }
    
});
    // Fonction pour changer le logo après un délai sans clic
    function changeLogoAfterDelay() {
    // Mettre en attente le changement de logo après 5 secondes sans clic
    setTimeout(function() {
        if (clics < 5) {
            document.getElementById("logo").src = "/assets/picture/SpriteEvoliShiny.png";
        }
        else if (clics < 8) {
        document.getElementById("logo").src = "/assets/picture/SpriteShadowMewtwo.png";
        }
        else if (clics < 10) {
            document.getElementById("logo").src = "/assets/picture/SpriteGobouShiny.png";
        }
        else if (clics < 12) {
            document.getElementById("logo").src = "/assets/picture/SpriteMégaGardevoirShiny.png";
        }
        else if (clics < 15) {
            document.getElementById("logo").src = "/assets/picture/SpriteMewShiny.png";
        }
        }, 3000); // 3000 millisecondes = 3 secondes
    }
    

    function changeLogo() {
        let clics = localStorage.getItem('clics');

        // Vérifier si la valeur récupérée est valide (non null et numérique)
        if (!clics || isNaN(clics)) {
        // Si la valeur n'est pas valide, initialiser clics à zéro
        clics = 0;
        } else {
        // Si la valeur est valide, convertir en nombre entier
        clics = parseInt(clics);
        }
        clics++; // Incrémenter le nombre de clics à chaque clic sur le logo
        console.log(clics);

        // Sauvegarde du nombre de clics dans le localStorage
        localStorage.setItem('clics', clics);

        // Changer le logo en fonction du nombre de clics
        if (clics === 5) {
            document.getElementById("logo").src = "/assets/picture/SpriteEvoliShiny.png";
            playShinyAnimationAndSound();
        }
        else if (clics === 8) {
            document.getElementById("logo").src = "/assets/picture/SpriteShadowMewtwo.png";
            playShinyAnimationAndSound();
        }
        else if (clics === 10) {
            document.getElementById("logo").src = "/assets/picture/SpriteGobouShiny.png";
            playShinyAnimationAndSound();
        }
        else if (clics === 12) {
            document.getElementById("logo").src = "/assets/picture/SpriteMégaGardevoirShiny.png";
            playShinyAnimationAndSound();
        }
        else if (clics === 15) {
            document.getElementById("logo").src = "/assets/picture/SpriteMewShiny.png";
            playShinyAnimationAndSound();
        }
    }

    

    // Ajouter l'événement onclick au chargement du contenu
    document.getElementById("logo").addEventListener("click", changeLogo);

    // Fonction pour jouer l'animation et le son de shiny
    function playShinyAnimationAndSound() {
        // Ajouter l'élément img pour l'animation d'étoile de shiny
        let starAnimation = document.createElement("img");
        starAnimation.src = "/assets/picture/shinysparkleeffect.gif";
        starAnimation.className = "shiny-star-animation";

        // Jouer le son de shiny
        let audio = new Audio('/assets/picture/legendsarceusshinysound.mp3');
        audio.play();
    }