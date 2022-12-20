<script setup lang="ts">
</script>

<template>

  <header>
    <div class="center is-fullwidth is-flex is-justify-content-center">
      <img alt="Croissant logo" class="image is-128x128 m-5" src="/icon.png"/>
      <h1 class="title is-1 is-align-items-center is-flex m-5">Croissant Dashboard !</h1>
    </div>
  </header>
  <main class="center is-fullwidth is-flex is-flex-direction-column m-auto">

    <h2 class="title is-2 m-auto">Choose your dashboard !</h2>

    <div id="promotion" class="m-auto is-flex"></div>
    <hr class="column is-paddingless is-three-fifths is-offset-one-fifth">
    <h2 class="title is-2 m-auto"> Or
      <router-link to="login">log-in</router-link>
    </h2>

  </main>
</template>

<script>

import {createApp} from "vue";
import router from "@/router";
import promotionComponent from "@/components/promotionComponent.vue";

export default {
  name: "HomeView",
  mounted() {
    this.fetchPromotions()
  },
  methods: {

    fetchPromotions() {
      fetch("https://croissant.remi-espie.me/api/promotion/all")
          .catch(err => console.log(err))
          .then(resp => resp.text())
          .then((json) => {
                if (json !== "") this.displayPromotions(JSON.parse(json))
              }
          )
    },

    displayPromotions(promotion) {
      const div = document.getElementById("promotion")
      for (const promotionElement of promotion) {
        const promotionCard = createApp({extends: promotionComponent},
            {
              id: promotionElement.id,
              name: promotionElement.name,
              year: promotionElement.year
            })
        promotionCard.use(router).mount(div)
      }
    }
  }
}

</script>