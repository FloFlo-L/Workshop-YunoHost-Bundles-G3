/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

//const imagesPrefix = "./chemin_local";

import imgCat from "@/assets/img/cat.png";
import imgComputers from "@/assets/img/computers.png";
import imgClean from "@/assets/img/clean.png";
import imgFeatures from "@/assets/img/features.png";
import imgAssociation from "@/assets/img/assoc.png";
// import imgTestimonials from "@/assets/img/testimonials.png";
// import imgTeam from "@/assets/img/team.png";
// import imgStat from "@/assets/img/stat.png";
// import imgContent from "@/assets/img/content.png";
// import imgPagination from "@/assets/img/pagination.png";
// import imgAlert from "@/assets/img/alerts.jpg";
// import imgPopover from "@/assets/img/popovers.jpg";
// import imgModal from "@/assets/img/modals.jpg";
// import imgDropdowns from "@/assets/img/dropdowns.jpg";

export default [
  {
    //heading: "BUNDLES",
    //description: "Des infrastructure complète de services.",
    items: [
      {
        image: imgCat,
        title: "Monter un CHATONS",
        //subtitle: "10 Examples",
        route: "page-headers",
        pro: false,
      },
      {
        image: imgFeatures,
        title: "Chaîne éditoriale",
        //subtitle: "14 Examples",
        route: "presentation",
        // "page-features",
        pro: true,
      },
      {
        image: imgComputers,
        title: "Synchroniser ses données entre périphériques",
        //subtitle: "8 Examples",
        route: "page-headers",
        pro: true,
      },
      {
        image: imgAssociation,
        title: "Association",
        //subtitle: "1 Example",
        route: "presentation",
        pro: true,
      },
      {
        image: imgClean,
        title: "“Nettoyer” son accès internet",
        //subtitle: "11 Examples",
        route: "presentation",
        pro: true,
      },
    ],
  },
];
