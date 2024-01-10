<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Headers page components
import HeaderOne from "./components/HeaderOne.vue";

// Headers page components codes
import { header1Code } from "./components/codes";

// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

// hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
   <BaseLayout
    title="Page Headers"
    :breadcrumb="[
      { label: 'Home', route: '/' },
      { label: 'Page Headers' },
    ]"
  >
        <div class="row">
          <!--Card -->
            <div class="col-md-4 mt-md-0">
              <a href="/sections/page-sections/page-headers" class="">
                <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                  <img class="w-100" src="../../../../assets/img/city-profile.jpg" alt="Page Headers" loading="lazy">
                  <!--v-if-->
                </div>
                <div class="mt-2 ms-2"><h6 class="mb-0">Page Headers</h6>
                    <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                </div>
              </a>
            </div>

            <div class="col-md-4 mt-md-0">
              <a href="/sections/page-sections/page-headers" class="">
                <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                  <img class="w-100" src="../../../../assets/img/city-profile.jpg" alt="Page Headers" loading="lazy">
                  <!--v-if-->
                </div>
                <div class="mt-2 ms-2"><h6 class="mb-0">Page Headers</h6>
                    <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                </div>
              </a>
            </div>

            <div class="col-md-4 mt-md-0">
              <a href="/sections/page-sections/page-headers" class="">
                <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                  <img class="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg" alt="Page Headers" loading="lazy">
                  <!--v-if-->
                </div>
                <div class="mt-2 ms-2"><h6 class="mb-0">Page Headers</h6>
                    <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                </div>
              </a>
            </div>

            <div class="col-md-4 mt-md-0">
              <a href="/sections/page-sections/page-headers" class="">
                <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                  <img class="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg" alt="Page Headers" loading="lazy">
                  <!--v-if-->
                </div>
                <div class="mt-2 ms-2"><h6 class="mb-0">Page Headers</h6>
                    <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                </div>
              </a>
            </div>

            <div class="col-md-4 mt-md-0">
              <a href="/sections/page-sections/page-headers" class="">
                <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                  <img class="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg" alt="Page Headers" loading="lazy">
                  <!--v-if-->
                </div>
                <div class="mt-2 ms-2"><h6 class="mb-0">Page Headers</h6>
                    <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                </div>
              </a>
            </div>

            <div class="col-md-4 mt-md-0">
              <a href="/sections/page-sections/page-headers" class="">
                <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                  <img class="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg" alt="Page Headers" loading="lazy">
                  <!--v-if-->
                </div>
                <div class="mt-2 ms-2"><h6 class="mb-0">Page Headers</h6>
                    <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                </div>
              </a>
            </div>

            <div class="col-md-4 mt-md-0">
              <a href="/sections/page-sections/page-headers" class="">
                <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                  <img class="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg" alt="Page Headers" loading="lazy">
                  <!--v-if-->
                </div>
                <div class="mt-2 ms-2"><h6 class="mb-0">Page Headers</h6>
                    <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                </div>
              </a>
            </div>
        </div>
              </BaseLayout>

  
</template>
