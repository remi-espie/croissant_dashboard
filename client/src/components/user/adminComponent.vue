<template>
  <div class="container is-flex is-justify-content-center is-flex-direction-column">

    <h3 class="title is-3 mt-5 mb-5 ml-auto mr-auto">⚠️ Edit data with caution</h3>

    <div class="columns is-multiline is-fullwidth">

      <promotion-component :promotions="promotions"></promotion-component>

      <student-component :students="students" :pastries="pastries" :promotions="promotions"></student-component>

      <pastry-component :pastries="pastries"></pastry-component>

      <croissanted-component :croissanted="croissanted" :students="students"></croissanted-component>

      <quote-component :quotes="quotes"></quote-component>

    </div>
  </div>

</template>

<script>
import StudentComponent from "@/components/admin/studentComponent.vue";
import PromotionComponent from "@/components/admin/promotionComponent.vue";
import PastryComponent from "@/components/admin/pastryComponent.vue";
import CroissantedComponent from "@/components/admin/croissantedComponent.vue";
import QuoteComponent from "@/components/admin/quoteComponent.vue";

export default {
  name: "adminComponent",
  components: {QuoteComponent, CroissantedComponent, PastryComponent, PromotionComponent, StudentComponent},
  data() {
    return {
      students: [],
      promotions: [],
      pastries: [],
      croissanted: [],
      quotes: [],
      user: [],
      sent: NaN,
      sentMessage: ''
    }
  },
  mounted() {
    this.fetchStudents();
    this.fetchPromotions();
    this.fetchPastries();
    this.fetchCroissanted();
    this.fetchQuotes();
  },
  methods: {

    fetchStudents() {
      fetch("/api/student/all",
          {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
            },
          })
          .catch(err => {
            console.error(err)
          })
          .then(resp => resp.json())
          .then(json => {
            for (const student of json) {
              student.birthday = student.birthday.slice(0, 10);
            }

            this.students = json
          })
    },

    fetchQuotes() {
      fetch("/api/quote/all",
          {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
            },
          })
          .catch(err => {
            console.error(err)
          })
          .then(resp => resp.json())
          .then(json => {

            this.quotes = json
          })
    },

    fetchPromotions() {
      fetch("/api/promotion/all",
          {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
            },
          })
          .catch(err => {
            console.error(err)
          })
          .then(resp => resp.json())
          .then(json => {
            this.promotions = json
          })
    },
    fetchPastries() {
      fetch("/api/pastry/all",
          {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
            },
          })
          .catch(err => {
            console.error(err)
          })
          .then(resp => resp.json())
          .then(json => {
            this.pastries = json
          })
    },
    fetchCroissanted() {
      fetch("/api/croissanted/all",
          {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
            },
          })
          .catch(err => {
            console.error(err)
          })
          .then(resp => resp.json())
          .then(json => {
            for (const croissant of json) {
              croissant.date = croissant.date.slice(0, 19);
            }
            this.croissanted = json
          })
    },

  }
}
</script>

<style scoped>

</style>
