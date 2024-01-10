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

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
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
        image: `${imagesPrefix}/headers.jpg`,
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
        image: imgPricing,
        title: "Synchroniser ses données entre périphériques",
        //subtitle: "8 Examples",
        route: "presentation",
        pro: true,
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        title: "Association",
        //subtitle: "1 Example",
        route: "presentation",
        pro: true,
      },
      {
        image: imgBlogPosts,
        title: "“Nettoyer” son accès internet",
        //subtitle: "11 Examples",
        route: "presentation",
        pro: true,
      },
    ],
  },
];
