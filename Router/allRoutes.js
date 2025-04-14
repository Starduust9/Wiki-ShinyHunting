import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Pré Accueil", "/pages/home.html"),
    new Route("/accueil", "Accueil", "/pages/accueil.html"),
    new Route("/contact", "Contact", "/pages/contact.html", "/js/contact.js"),
    new Route("/introshinyhunting", "Introduction au Shiny Hunting", "/pages/introshinyhunting.html"),
    new Route("/shinyhuntingjeu", "Le Shiny Hunting dans les jeux", "/pages/shinyhuntingjeu.html"),
    new Route("/siteaide", "Site d'aide", "/pages/siteaide.html"),
    new Route("/streameryoutuber", "Streamer Youtuber", "/pages/streameryoutuber.html"),
    new Route("/1G", "1G", "/pages/page-gen/1G.html"),
    new Route("/2G", "2G", "/pages/page-gen/2G.html"),
    new Route("/3G", "3G", "/pages/page-gen/3G.html"),
    new Route("/4G", "4G", "/pages/page-gen/4G.html"),
    new Route("/5G", "5G", "/pages/page-gen/5G.html"),
    new Route("/6G", "6G", "/pages/page-gen/6G.html"),
    new Route("/7G", "7G", "/pages/page-gen/7G.html"),
    new Route("/8G", "8G", "/pages/page-gen/8G.html"),
    new Route("/9G", "9G", "/pages/page-gen/9G.html"),
    new Route("/masuda", "Masuda", "/pages/page-gen/masuda.html"),
    new Route("/charmechroma", "Charme Chroma", "/pages/page-gen/charmechroma.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "PokéChroma";