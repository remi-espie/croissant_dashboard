<script setup>
import PromotionComponent from "@/components/dashboard/promotionComponent.vue";
</script>

<template>

  <header>
    <div class="is-center is-block-mobile is-flex-tablet is-flex-direction-row is-justify-content-center">
      <div class="m-5 is-flex is-align-items-center is-justify-content-center">
      <img alt="Croissant logo" class="image is-128x128" src="@/assets/icon.png"/>
      </div>
      <h1 class="title is-1 is-align-items-center is-justify-content-center is-flex m-5 has-text-centered">Croissant Dashboard !</h1>
    </div>
  </header>
  <main class="center is-fullwidth is-flex is-flex-direction-column m-auto">

    <h2 class="title is-2 has-text-centered">
      <router-link to="login/login">Log-in</router-link> or <router-link to="login/signup">Sign up</router-link>
    </h2>

    <hr style="width: 60%" class="ml-auto mr-auto">

    <h2 class="title is-2 m-auto has-text-centered">Or choose a dashboard !</h2>

    <div id="promotion" class="columns is-multiline is-fullwidth">
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
      fetch("/api/promotion/all", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/'
        }
      })
          .catch(err => console.error(err))
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

<style scoped>

#promotion {
  margin: 0 10%;
}

</style>
