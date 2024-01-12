<style>
/* .template {
  color: black;
  background-color: black;
  display: block;
  margin-top: 100px;
} */
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
  width: 20px;
  height: 20px;
}
.center-button {
  display: block;
  margin: 0 auto;
  width: 35%;
}
.fixed-size-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: auto;
  max-width: 400px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";

// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";

//Vue Material Kit 2 components
import MaterialProgress from "@/components/MaterialProgress.vue";

//Importe footer
import DefaultFooter from "../../../../../src/examples/footers/FooterDefault.vue";

// image
import image from "@/assets/img/vue-mk-header.jpg";
// hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-200"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <BaseLayout
      :breadcrumb="[{ label: 'Home', route: '/' }, { label: 'Page Headers' }]"
    >
      <h2 style="text-align: center; padding: 20px" class="text-dark mb-0">
        Applications CHATONS
      </h2>
      <div class="row">
        <!--Card -->
        <div class="col-md-4 mt-md-0">
          <a href="/sections/page-sections/page-headers/author" class="">
            <div class="card move-on-hover min-height-160 shadow-lg mt-4">
              <img
                class="fixed-size-image"
                src="../../../../assets/img/etherpad.jpg"
                alt="Page Headers"
                loading="lazy"
              />
              <!--v-if-->
            </div>
          </a>
          <div class="box2">
            <div class="mt-2 ms-1">
              <h6 class="mb-0">Etherpad</h6>
            </div>
          </div>

          <div class="box3">
            <input
              class="checkbox"
              type="checkbox"
              id="checkboxEtherpad"
              ref="checkboxEtherpad"
              v-model="checked"
              @change="check('Etherpad')"
            />
            <label for="checkboxEtherpad">{{ checked }}</label>
          </div>
        </div>
        <div @click="getPosts"></div>
        <ul>
          <li v-for="post in posts" :key="post.id" data-test="post">
            aaaa
            {{ post.id }}
          </li>
        </ul>
        <div class="col-md-4 mt-md-0">
          <a
            href="/sections/page-sections/page-headers/nextclouddetail"
            class=""
          >
            <div class="card move-on-hover min-height-160 shadow-lg mt-4">
              <img
                class="fixed-size-image"
                src="../../../../assets/img/nextcloud.jpg"
                alt="Page Headers"
                loading="lazy"
              />
              <!--v-if-->
            </div>
          </a>
          <div class="wrapper">
            <div class="box2">
              <div class="mt-2 ms-1">
                <h6 class="mb-0">Nextcloud</h6>
              </div>
            </div>
            <div class="box3">
              <input
                class="checkbox"
                type="checkbox"
                id="checkbox"
                v-model="checked"
              />
              <label for="checkbox">{{ checked }}</label>
            </div>
          </div>
        </div>

        <div class="col-md-4 mt-md-0">
          <a href="/sections/page-sections/page-headers/jitsidetail" class="">
            <div class="card move-on-hover min-height-160 shadow-lg mt-4">
              <img
                class="fixed-size-image"
                src="../../../../assets/img/Jitsi.jpg"
                alt="Page Headers"
                loading="lazy"
              />
              <!--v-if-->
            </div>
          </a>
          <div class="wrapper">
            <div class="box2">
              <div class="mt-2 ms-1">
                <h6 class="mb-0">Jitsi</h6>
              </div>
            </div>
            <div class="box3">
              <input
                class="checkbox"
                type="checkbox"
                id="checkbox"
                v-model="checked"
              />
              <label for="checkbox">{{ checked }}</label>
            </div>
          </div>
        </div>

        <div class="col-md-4 mt-md-0">
          <a
            href="/sections/page-sections/page-headers/roundcubedetail"
            class=""
          >
            <div class="card move-on-hover min-height-160 shadow-lg mt-4">
              <img
                class="fixed-size-image"
                src="../../../../assets/img/roundcube.jpg"
                alt="Page Headers"
                loading="lazy"
              />
              <!--v-if-->
            </div>
          </a>
          <div class="wrapper">
            <div class="box2">
              <div class="mt-2 ms-1">
                <h6 class="mb-0">Roundcube</h6>
              </div>
            </div>
            <div class="box3">
              <input
                class="checkbox"
                type="checkbox"
                id="checkbox"
                v-model="checked"
              />
              <label for="checkbox">{{ checked }}</label>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-space-between text-center py-2">
          <div class="col-12 mx-auto">
            <MaterialButton
              variant="gradient"
              color="success"
              @click="handleButtonClick(index)"
              class="center-button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >Installer</MaterialButton
            >
          </div>
        </div>
      </div>
    </BaseLayout>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Téléchargement</h5>
          <MaterialButton
            color="none"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
          </MaterialButton>
        </div>
        <div class="modal-body">
          Application(s) en cours d'installation. Veuillez Patientez.
          <br /><br />
        </div>

        <section class="py-6 mt-4">
          <div id="app">
            <div class="container">
              <div style="text-align: center">{{ percent }} %</div>
              <div class="row justify-space-between py-2">
                <div class="col-lg-6 mx-auto">
                  <MaterialProgress
                    class="mb-3"
                    color="secondary"
                    :style="{ width: percentage + '%' }"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="modal-footer justify-content-between">
          <MaterialButton
            variant="gradient"
            color="dark"
            data-bs-dismiss="modal"
          >
            Close
          </MaterialButton>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      percentage: 0,
    };
  },
  methods: {
    async check(name) {
      var res = await axios.get(
        "http://localhost:3000/api/bundle/:bundleId/applications"
      );

      console.log(res);
      this.posts = res.data;

      console.log(this.$refs[`checkbox${name}`].checked);
      console.log("name : " + name);
    },
  },
  created() {
    let interval = setInterval(() => {
      if (this.percentage < 100) this.percentage += 0.1;
      else clearInterval(interval);
    });
  },
  computed: {
    percent() {
      return this.percentage.toFixed();
    },
  },
};
</script>
message.txt 10 Ko
