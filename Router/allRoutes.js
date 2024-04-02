import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Pré Accueil", "/pages/home.html"),
    new Route("/accueil", "Accueil", "/pages/accueil.html"),
    new Route("/bases", "Les Bases", "/pages/bases.html"),
    new Route("/contact", "Contact", "/pages/contact.html", "/js/contact.js"),
    new Route("/introshinyhunting", "Introduction au Shiny Hunting", "/pages/introshinyhunting.html"),
    new Route("/shinyhuntingjeu", "Le Shiny Hunting dans les jeux", "/pages/shinyhuntingjeu.html"),
    new Route("/siteaide", "Site d'aide", "/pages/siteaide.html"),
    new Route("/streameryoutuber", "Streamer Youtuber", "/pages/streameryoutuber.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Wiki Shiny Hunting";