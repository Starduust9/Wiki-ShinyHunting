let delayTimer;
let clics = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Réinitialiser les clics si le cache est vidé
    if (!performance.getEntriesByType("navigation")[0].type || performance.getEntriesByType("navigation")[0].type === "navigate") {
        localStorage.removeItem('clics');
    }

    // Charger les clics depuis le stockage local
    clics = localStorage.getItem('clics') ? parseInt(localStorage.getItem('clics')) : 0;

    // Mettre à jour le logo en fonction des clics
    updateLogo(clics);
});

function changeLogo() {
    clearTimeout(delayTimer);
    clics++;

    delayTimer = setTimeout(function() {
        updateLogo(clics);
        localStorage.setItem('clics', clics);
    }, 3000);
}

function updateLogo(clics) {
    let logo = document.getElementById("logo");

    if (clics >= 5 && clics < 8) {
        logo.src = "/assets/picture/SpriteEvoliShiny.png";
        playSound("/assets/picture/legendsarceusshinysound.mp3");
    } else if (clics >= 8 && clics < 10) {
        logo.src = "/assets/picture/SpriteShadowMewtwo.png";
        playSound("/assets/picture/legendsarceusshinysound.mp3");
    } else if (clics >= 10 && clics < 12) {
        logo.src = "/assets/picture/SpriteGobouShiny.png";
        playSound("/assets/picture/legendsarceusshinysound.mp3");
    } else if (clics >= 12 && clics < 15) {
        logo.src = "/assets/picture/SpriteMégaGardevoirShiny.png";
        playSound("/assets/picture/legendsarceusshinysound.mp3");
    } else if (clics >= 15) {
        logo.src = "/assets/picture/SpriteMewShiny.png";
        playSound("/assets/picture/legendsarceusshinysound.mp3");
    } else {
        logo.src = "/assets/picture/Logo.png";
    }

    console.log("Nombre de clics :", clics);
}

function playSound(soundSrc) {
    let audio = new Audio(soundSrc);
    audio.play().catch(function(error) {
        console.error('Erreur lors de la lecture du son :', error.message);
    });
}

document.getElementById("logo").addEventListener("click", changeLogo);
