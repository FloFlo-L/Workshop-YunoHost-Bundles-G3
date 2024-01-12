<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import profilePic from "@/assets/img/roundcube.png";

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
                  <h3 class="mb-0">Round Cube</h3>
                  <a
                    href="https://roundcube.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="d-block">
                      <MaterialButton
                        class="text-nowrap mb-0"
                        variant="outline"
                        color="success"
                        size="sm"
                      >
                        VOIR
                      </MaterialButton>
                    </div>
                  </a>
                </div>
                <p class="text-lg mb-0">
                  Version Actuelle: 1.6.0~ynh4
                  <br /><br />
                  Alternative Potentielle à: GMail, Hotmail, Microsoft Outlook,
                  Yahoo! Mail
                  <br /><br />
                  Roundcube est un client IMAP basé sur le navigateur avec une
                  interface utilisateur semblable à une application. Il offre
                  toutes les fonctionnalités que vous attendez d'un client de
                  messagerie, y compris la prise en charge MIME, le carnet
                  d'adresses, la manipulation de dossiers, la recherche de
                  messages et la vérification orthographique.
                  <br /><br />
                  Fonctionnalités Spécifiques à YunoHost:
                  <br />
                  Synchronisez vos alias de courrier électronique en tant
                  qu'identités dans Roundcube Installez les plugins contextmenu
                  et automatic addressbook par défaut Autorisez l'installation
                  du plugin de synchronisation CardDAV (carnet d'adresses) à
                  l'installation - notez que si vous avez installé Nextcloud ou
                  Baïkal, il ajoutera automatiquement le carnet d'adresses
                  correspondant et existant. Prise en charge du chiffrement PGP
                  avec le plugin Enigma par défaut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <DefaultFooter />
</template>
