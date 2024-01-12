<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import profilePic from "@/assets/img/nextcloud.png";

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
                  <h3 class="mb-0">NextCloud</h3>
                  <div class="d-block">
                    <a
                      href="https://nextcloud.com/fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MaterialButton
                        class="text-nowrap mb-0"
                        variant="outline"
                        color="success"
                        size="sm"
                      >
                        VOIR
                      </MaterialButton>
                    </a>
                  </div>
                </div>
                <p class="text-lg mb-0">
                  Version Actuelle: 1.9.6~ynh1
                  <br /><br />
                  Alternative Potentielle à: Google Docs, G Suite, Microsoft
                  Word, Microsoft Office, Office 365
                  <br /><br />
                  Nextcloud Hub est une plateforme de collaboration sur le
                  contenu entièrement open source, sur site. Les équipes
                  accèdent, partagent et éditent leurs documents, discutent et
                  participent à des appels vidéo, gèrent leurs courriels et
                  calendriers, ainsi que leurs projets sur des interfaces
                  mobiles, de bureau et web.
                  <br /><br />
                  Fonctionnalités Spécifiques à YunoHost:
                  <br />
                  Intégration avec les utilisateurs et SSO de YunoHost - bouton
                  de déconnexion Autoriser un utilisateur à être
                  l'administrateur (défini à l'installation) Autoriser plusieurs
                  instances de cette application Accès facultatif au dossier
                  utilisateur depuis les fichiers Nextcloud (défini à
                  l'installation, le partage est activé par défaut) Servir les
                  chemins /.well-known pour CalDAV et CardDAV sur le domaine
                  uniquement s'ils ne sont pas déjà servis - par exemple par
                  Baïkal
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
