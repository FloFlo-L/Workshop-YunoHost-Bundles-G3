<script setup>
// example components
//import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";

// sections
import Footer from "./Sections/AuthorFooter.vue";
import Profile from "./Sections/EtherpadDatail.vue";
//import Profile from "./Sections/NextCloudDetail.vue";


//Import footer //
import DefaultFooter from "../../../../src/examples/footers/FooterDefault.vue";


import Posts from "./Sections/AuthorPosts.vue";
import Contact from "./Sections/AuthorContact.vue";

// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <Profile />
    <Posts />
  </div>
  <Contact />
  <DefaultFooter />
</template>
