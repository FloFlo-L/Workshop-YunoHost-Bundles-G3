<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Les applications <br /> CHATONS"
              description="Cette sélection d'applications couvre la gestion de site web, la collaboration en ligne, la bureautique, la traduction de texte, etc."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="BUNDLE CHATONS"
              description="*****"
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Découvrir',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Infrastructure Complète pour CHATONS"
              description="Une solution tout-en-un pour répondre efficacement aux besoins variés des utilisateurs en matière de communication, collaboration et bureautique."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Applications Polyvalentes"
              description="Découvrez notre suite d'applications complète, allant de la gestion de site web à la messagerie, répondant à tous vos besoins numériques."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Adaptabilité Personnalisée"
              description="Profitez d'une adaptabilité intelligente à la puissance de la machine, au temps disponible et au public cible, offrant une expérience optimale selon vos besoins spécifiques."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Documentation Complète"
              description="Accédez à notre documentation exhaustive pour une utilisation optimale du bundle, comprenant des instructions détaillées et des conseils pratiques pour créer une infrastructure CHATONS robuste."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
