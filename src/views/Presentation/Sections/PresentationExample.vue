<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import { ref } from "vue";
const githubLink = ref(
  "https://github.com/FloFlo-L/Workshop-YunoHost-Bundles-G3"
);
const otherLink = ref("/nouvelle-page");
const otherLinkk = ref("/nouvelle-page");
defineProps({
  data: {
    type: Array,
    required: true,
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
    },
  },
  col1: {
    type: String,
    default: "col-lg-1",
  },
  col2: {
    type: String,
    default: "col-lg-10",
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <section class="my-1 py-1">
    <div class="container">
      <div class="row">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            

            <h2 class="text-dark mb-0">BUNDLES</h2>
            <p class="lead">
               combinant des outils de
              communication, de collaboration, et de bureautique pour répondre
              aux besoins variés des utilisateurs.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-sm-1 mt-1">
      <div
        v-for="({ heading, description, items }, index) in data"
        :class="`row ${index != 0 && index != -1 ? 'pt-lg-6' : ''}`"
        :key="heading"
      >
        <div :class="`${col1 ?? 'col-lg-1'}`">
          <div
            class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
            style="top: 100px"
          >
            <h3>{{ heading }}</h3>
            <h6 class="text-secondary font-weight-normal pe-3">
              {{ description }}
            </h6>
          </div>
        </div>
        <div :class="`${col2 ?? 'col-lg-10'}`">
          <div :class="`row ${index != 0 ? 'mt-3' : ''}`">
            <div
              class="col-md-4 mt-md-0"
              v-for="{ image, title, subtitle, route, pro } in items"
              :key="title"
            >
              <ExampleCard
                class="min-height-160 shadow-lg mt-4"
                :image="image"
                :title="title"
                :subtitle="subtitle"
                :route="route"
                :pro="pro"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-fixed top-0 end-0 m-3">
      <a :href="githubLink" target="_blank" rel="noopener noreferrer">
        <svg
          width="30px"
          height="30px"
          class="material-icons me-2 opacity-6"
          viewBox="0 0 24 24"
          aria-hidden="true"
          data-testid="GitHubIcon"
        >
          <path
            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.10-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.10a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
          ></path>
        </svg>
      </a>

      <!-- Lien vers une nouvelle page -->
      <a :href="otherLink" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30px"
          height="30px"
          fill="none"
          stroke="#545454"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-file-text me-2"
        >
          <path
            d="M4 2.01C4 1.364 4.364 1 5 1h14c.636 0 1 .364 1 1v18c0 .636-.364 1-1 1H5c-.636 0-1-.364-1-1V2.01zM16 6H8M16 10H8M14 14H8M14 18H8"
          ></path>
        </svg>
      </a>
      <a :href="otherLinkk" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30px"
          height="30px"
          fill="none"
          stroke="#545454"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-monitor me-2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      </a>
    </div>
  </section>
</template>
