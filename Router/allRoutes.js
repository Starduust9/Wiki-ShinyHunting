import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Galerie", "Galerie", "/pages/galerie.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Futur Site école";