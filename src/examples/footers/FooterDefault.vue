<script setup>
import logoDark from "@/assets/img/favicon.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      logo: logoDark,
      route: "/",
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-github text-lg opacity-8"></i>',
        link: "https://github.com/FloFlo-L/Workshop-YunoHost-Bundles-G3",
      },
    ],
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String,
    },
    default: () => [
      {
        name: "À propos",
      },
      {
        name: "Fiche Technique",
      },
      {
        name: "GitHub",
      },
    ],
  },
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
        </div>
        <!-- Menus de navigation -->
        <div
          class="col-md-3 col-sm-6 col-6 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a class="nav-link" :href="item.href" target="_blank">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 10px;
          "
        >
          <ul class="d-flex flex-row ms-n3 nav">
            <li class="nav-item" v-for="{ icon, link } of socials" :key="link">
              <a
                class="nav-link pe-1"
                :href="link"
                target="_blank"
                v-html="icon"
              >
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              By Zohra, Khalil, Vanelle, Sofiane, Florian -
              <a
                href="https://github.com/FloFlo-L/Workshop-YunoHost-Bundles-G3"
                target="_blank"
                >Groupe 3</a
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
