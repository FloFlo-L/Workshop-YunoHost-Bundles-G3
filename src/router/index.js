import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AuthorView from "../views/LandingPages/Author/AuthorView.vue";

import NextCloudDetail from "../views/LandingPages/NextCloud/NextCloudDetail.vue";
import JitsiDetail from "../views/LandingPages/Jitsi/JitsiDetail.vue";
import RoundcubeDetail from "../views/LandingPages/Roundcube/RoundcubeDetail.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadersView.vue";

import ElProgressBars from "../layouts/sections/elements/progress-bars/ProgressBarsView.vue";

import ElTypography from "../layouts/sections/elements/typography/TypographyView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },

    {
      path: "/sections/page-sections/page-headers/author",

      name: "author",
      component: AuthorView,
    },

    {
      path: "/sections/page-sections/page-headers/nextclouddetail",
      name: "nextclouddetail",
      component: NextCloudDetail,
    },

    {
      path: "/sections/page-sections/page-headers/jitsidetail",
      name: "jitsidetail",
      component: JitsiDetail,
    },
    {
      path: "/sections/page-sections/page-headers/roundcubedetail",
      name: "roundcubedetail",
      component: RoundcubeDetail,
    },

    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },

    {
      path: "/sections/elements/progress-bars",
      name: "el-progress-bars",
      component: ElProgressBars,
    },

    {
      path: "/sections/elements/typography",
      name: "el-typography",
      component: ElTypography,
    },
  ],
});

export default router;
