<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-2 py-2">
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
        <div class="col-lg-5 ms-auto">
          <DefaultInfoCard
            icon="flip_to_front"
            title="Applications Polyvalentes"
            description="Découvrez notre suite d'applications complète, allant de la gestion de site web à la messagerie, répondant à tous vos besoins numériques."
          />
        </div>
      </div>
    </div>
  </section>
</template>
