<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";


import BaseLayout from "../../../layouts/sections/components/BaseLayout.vue";

// image
import profilePic from "@/assets/img/etherpad.png";

//Importe footer
import DefaultFooter from "../../../../src/examples/footers/FooterDefault.vue";


// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
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
   
    :breadcrumb="[
      { label: 'Applications', route: '/sections/page-sections/page-headers' },
      { label: 'Jitsi' },
    ]"
  >
    <section class="py-sm-7 py-5 position-relative">

 
    <div class="container">

      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar
                size="xxl"
                class="shadow-xl position-relative z-index-2"
                :image="profilePic"
                alt="Avatar"
              />
            </div>
          </div>
          <div class="row py-7">
            <div
              class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto"
            >
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <h3 class="mb-0">Jitsi</h3>
                <div class="d-block">
                  <MaterialButton
                    class="text-nowrap mb-0"
                    variant="outline"
                    color="success"
                    size="sm"
                    >VOIR</MaterialButton
                  >
                </div>
              </div>
              <p class="text-lg mb-0">
                Version Actuelle: 1.9.6~ynh1
                <br /><br />
                Alternative Potentielle à: Google Docs, G Suite, Microsoft Word,
                Microsoft Office, Office 365
                <br /><br />
                Etherpad est un éditeur collaboratif en temps réel extensible à
                des milliers d'utilisateurs simultanés en temps réel. Il offre
                des capacités complètes d'exportation de données et fonctionne
                sur votre serveur, sous votre contrôle. Cette version d'Etherpad
                est installée sans plugins et utilise Redis comme base de
                données.
                <br /><br />
                Note: La sauvegarde et la restauration de la base de données
                Redis ne sont pas entièrement mises en œuvre.
                <br /><br />
                Si vous souhaitez installer Etherpad avec des plugins et une
                base de données MySQL, consultez :
                https://github.com/YunoHost-Apps/etherpad_mypads_ynh
                <a href="javascript:;" class="text-success icon-move-right"
                  >More about me
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

 
    </div>
 
  </section>
</BaseLayout>
  </div>

  
  <DefaultFooter />
</template>
