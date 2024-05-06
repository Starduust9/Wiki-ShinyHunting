let delayTimer;
let clics = 0;
let lastLogoSrc = ""; // Garder une trace de la dernière source d'image de logo

document.addEventListener('DOMContentLoaded', function() {
    // Charger les clics depuis le stockage local
    clics = localStorage.getItem('clics') ? parseInt(localStorage.getItem('clics')) : 0;
    // Mettre à jour le logo en fonction des clics
    updateLogo(clics);
});

function changeLogo(event) {
    clearTimeout(delayTimer);
    clics++;

    delayTimer = setTimeout(function() {
        updateLogo(clics, event);
        localStorage.setItem('clics', clics);
    }, 3000);
}

function updateLogo(clics, event) {
    // Ne pas accéder à la propriété 'type' de l'événement s'il est indéfini
        let logo = document.getElementById("logo");
        let newLogoSrc = "";

    if (clics >= 5 && clics < 8) {
        newLogoSrc = "/assets/picture/SpriteEvoliShiny.png";
    } else if (clics >= 8 && clics < 10) {
        newLogoSrc = "/assets/picture/SpriteShadowMewtwo.png";
    } else if (clics >= 10 && clics < 12) {
        newLogoSrc = "/assets/picture/SpriteGobouShiny.png";
    } else if (clics >= 12 && clics < 15) {
        newLogoSrc = "/assets/picture/SpriteMégaGardevoirShiny.png";
    } else if (clics >= 15) {
        newLogoSrc = "/assets/picture/SpriteMewShiny.png";
    } else {
        newLogoSrc = "/assets/picture/Logo.png";
    }

    // Vérifier si l'image du logo a changé
    if (newLogoSrc !== lastLogoSrc) {
        logo.src = newLogoSrc;
        lastLogoSrc = newLogoSrc; // Mettre à jour la dernière source d'image du logo 
        if(event && event.type === "click"){
            playSound("/assets/picture/legendsarceusshinysound.mp3");
        }
        

    }

}

function playSound(soundSrc) {
    // Vérifier si le nombre de clics est supérieur à 4 avant de jouer le son
    if (clics > 4) {
        let audio = new Audio(soundSrc);
        audio.play().catch(function(error) {
            console.error('Erreur lors de la lecture du son :', error.message);
        });
    }
}

document.addEventListener('keydown', function(event) {
    // Vérifier si la touche pressée est la touche F5
    if (event.key === "F5") {
        // Réinitialiser le localStorage
        localStorage.clear();
    }
});

document.getElementById("logo").addEventListener("click", changeLogo);
