<script setup>
import PromotionComponent from "@/components/promotionComponent.vue";
</script>

<template>

  <header>
    <div class="center is-fullwidth is-flex is-justify-content-center">
      <img alt="Croissant logo" class="image is-128x128 m-5" src="/icon.png"/>
      <h1 class="title is-1 is-align-items-center is-flex m-5">Croissant Dashboard !</h1>
    </div>
  </header>
  <main class="center is-fullwidth is-flex is-flex-direction-column m-auto">

    <h2 class="title is-2 has-text-centered">
      <router-link to="login">Log-in</router-link>
    </h2>

    <hr class="column is-paddingless is-three-fifths is-offset-one-fifth">

    <h2 class="title is-2 m-auto">Or choose a dashboard !</h2>

    <div id="promotion" class="m-auto columns is-multiline">
      <promotion-component class="column is-4" v-for="promotion in promotions"
                           v-bind="{'id': promotion.id, 'name': promotion.name, 'src': promotion.url_picture, 'year': promotion.year}"
                           :key="promotion.id">
      </promotion-component>
    </div>

  </main>
</template>

<script>

export default {
  name: "HomeView",
  mounted() {
    this.fetchPromotions()
  },
  methods: {

    fetchPromotions() {
      fetch("https://croissant.remi-espie.me/api/promotion/all", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
          .catch(err => console.log(err))
          .then(resp => resp.text())
          .then((json) => {
                if (json !== "") this.promotions.push(...JSON.parse(json))
              }
          )
    },

  },
  data() {
    return {
      promotions: []
    }
  }
}

</script>