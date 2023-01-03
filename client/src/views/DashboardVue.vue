<template>

  <main class="pageloader" v-if="!loaded" v-bind:class="{'is-active' : !loaded}">
    <span class="title has-text-centered is-1">Loading...</span>
  </main>
  <main v-else>
    <h1 v-if="!promotionExists" class="title has-text-centered is-1">Sorry, we could not find this promotion...</h1>
    <div v-else id="mainDiv" v-bind:style="{ backgroundImage : 'url(' + this.promotionPicture +')' }">
      <schedule-component :url_schedule="this.promotionSchedule"></schedule-component>
      <birthday-component></birthday-component>
      <quote-component></quote-component>
      <croissanted-component :id="this.promotionId"></croissanted-component>
      <scoreboard-component :id="this.promotionId"></scoreboard-component>
    </div>
  </main>
</template>

<script>
import QuoteComponent from "@/components/quoteComponent.vue";
import BirthdayComponent from "@/components/birthdayComponent.vue";
import scheduleComponent from "@/components/scheduleComponent.vue";
import CroissantedComponent from "@/components/croissantedComponent.vue";
import ScoreboardComponent from "@/components/scoreboardComponent.vue";

export default {
  name: "DashboardVue",
  components: {ScoreboardComponent, CroissantedComponent, scheduleComponent, BirthdayComponent, QuoteComponent},
  mounted() {
    this.fetchPromotion()
  },
  methods: {

    fetchPromotion() {
      fetch("https://cluster-2022-2.dopolytech.fr/api/promotion/" + this.$route.params.id, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
          .catch(err => {
            console.log(err)
            this.promotionExists = false
            this.loaded = true;
          })
          .then(resp => {
            if (resp.status !== 200) {
              this.promotionExists = false
              this.loaded = true;
              return Promise.reject(resp.status)
            }
            return resp
          })
          .then(resp => resp.text())
          .then((json) => {
                if (json !== "") {
                  json = JSON.parse(json);
                  this.promotionId = json.id;
                  this.promotionName = json.name;
                  this.promotionYear = json.year;
                  this.promotionPicture = json.url_picture;
                  this.promotionSchedule = "https://cluster-2022-2.dopolytech.fr/api/promotion/" + this.promotionId + "/schedule";

                  this.promotionExists = true

                  document.title = "Croissant Dashboard | " + this.promotionName;
                } else this.promotionExists = false;

                this.loaded = true;
              }
          )
    },

  },
  data() {
    return {
      loaded: false,
      promotionExists: Boolean,
      promotionId: String,
      promotionName: String,
      promotionYear: Number,
      promotionPicture: String,
      promotionSchedule: String,
    }
  }
}
</script>

<style scoped>
#mainDiv {
  background: center no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
}
</style>
