<!-- <style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 10px);
}

.box2 {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  padding-top: 15px;
  padding-right: 10px;
}

.checkbox {
    width:20px;
    height:20px;
}
.center-button {
  display: block;
  margin: 0 auto;
  width: 25%;
  background-color: #04AA6D;
  color: white;
  border: 10px solid #04AA6D;
   /* float: left; */
  margin-top:  40px;
  border-radius:20px;
  
}
.fixed-size-image{
  display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%; 
      height: auto; 
      max-width: 400px;
}


</style>
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
   
    :breadcrumb="[
      { label: 'Home', route: '/' },
      { label: 'Page Headers' },
    ]"
  >
  
       
        <h2 style="text-align: center; padding: 20px;" class="text-dark mb-0">Applications CHATO</h2>
            <div class="row">
           <!-- Card -->
                  <div class="col-md-4 mt-md-0">
                      <a href="/sections/page-sections/page-headers" class="">
                          <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                          <img class="fixed-size-image" src="../../../../assets/img/etherpad.jpg" alt="Page Headers" loading="lazy">
                          <!--v-if-->
                          </div>
                      </a>
                      <div class="wrapper">
                        <div class="box2">
                          <div class="mt-2 ms-1"><h6 class="mb-0">Etherpad</h6>
                            <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                          </div>
                        </div>
                        <div class="box3"><input class="checkbox" type="checkbox" id="checkbox" v-model="checked" />
                          <label for="checkbox">{{ checked }}</label>
                        </div>
                      </div>
                  </div>

                  <div class="col-md-4 mt-md-0">
                      <a href="/sections/page-sections/page-headers" class="">
                          <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                          <img class="fixed-size-image" src="../../../../assets/img/nextcloud.jpg" alt="Page Headers" loading="lazy">
                          <!--v-if-->
                          </div>
                      </a>
                      <div class="wrapper">
                        <div class="box2">
                          <div class="mt-2 ms-1"><h6 class="mb-0">Nextcloud</h6>
                            <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                          </div>
                        </div>
                        <div class="box3"><input class="checkbox" type="checkbox" id="checkbox" v-model="checked" />
                          <label for="checkbox">{{ checked }}</label>
                        </div>
                      </div>
                  </div>

                  <div class="col-md-4 mt-md-0">
                      <a href="/sections/page-sections/page-headers" class="">
                          <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                          <img class="fixed-size-image" src="../../../../assets/img/Jitsi.jpg" alt="Page Headers" loading="lazy">
                          <!--v-if-->
                          </div>
                      </a>
                      <div class="wrapper">
                        <div class="box2">
                          <div class="mt-2 ms-1"><h6 class="mb-0">Jitsi</h6>
                            <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                          </div>
                        </div>
                        <div class="box3"><input class="checkbox" type="checkbox" id="checkbox" v-model="checked" />
                          <label for="checkbox">{{ checked }}</label>
                        </div>
                      </div>
                  </div>

                  <div class="col-md-4 mt-md-0">
                      <a href="/sections/page-sections/page-headers" class="">
                          <div class="card move-on-hover min-height-160 shadow-lg mt-4">
                          <img class="fixed-size-image" src="../../../../assets/img/roundcube.jpg" alt="Page Headers" loading="lazy">
                          <!--v-if-->
                          </div>
                      </a>
                      <div class="wrapper">
                        <div class="box2">
                          <div class="mt-2 ms-1"><h6 class="mb-0">Roundcube</h6>
                            <p class="text-secondary text-sm font-weight-normal">10 Examples</p>
                          </div>
                        </div>
                        <div class="box3"><input class="checkbox" type="checkbox" id="checkbox" v-model="checked" />
                          <label for="checkbox">{{ checked }}</label>
                        </div>
                      </div>
                  </div>





        </div>


        <button @click="handleButtonClick(index)" class="center-button">Instaler</button>

              </BaseLayout>

</template>  -->
