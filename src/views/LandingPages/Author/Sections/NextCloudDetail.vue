<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import profilePic from "@/assets/img/nexcloud.png";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
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
                Version Actuelle: 27.1.4~ynh1
                <br /><br />
                Alternative Potentielle à: Apple iCloud, Dropbox, Google Apps,
                Google Docs, Google Drive, Microsoft OneDrive
                <br /><br />
                Nextcloud Hub est une plateforme de collaboration sur le contenu
                entièrement open source, sur site. Les équipes accèdent,
                partagent et éditent leurs documents, discutent et participent à
                des appels vidéo, gèrent leurs courriels et calendriers, ainsi
                que leurs projets sur des interfaces mobiles, de bureau et web.
                <br /><br />
                Fonctionnalités Spécifiques à YunoHost:
                <br />
                Intégration avec les utilisateurs et SSO de YunoHost - bouton de
                déconnexion Autoriser un utilisateur à être l'administrateur
                (défini à l'installation) Autoriser plusieurs instances de cette
                application Accès facultatif au dossier utilisateur depuis les
                fichiers Nextcloud (défini à l'installation, le partage est
                activé par défaut) Servir les chemins /.well-known pour CalDAV
                et CardDAV sur le domaine uniquement s'ils ne sont pas déjà
                servis - par exemple par Baïkal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
