import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Pré Accueil", "/pages/home.html"),
    new Route("/accueil", "Accueil", "/pages/accueil.html"),
    new Route("/contact", "Contact", "/pages/contact.html", "/js/contact.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Wiki Shiny Hunting";