<template>
  <div class="container is-block-mobile is-flex-tablet is-flex-direction-row is-justify-content-center">
    <div class="is-flex is-align-items-center is-justify-content-center is-center">
    <h4 class="title is-4 m-0" style="width: max-content">Who was croissanted recently ? </h4>
    </div>
    <div class="is-flex is-align-items-center is-justify-content-center">
  <div class="select ml-5">
    <select ref="selector">
      <option v-for="student in studentList" :key="student.id">{{student.name + " " + student.firstname}}</option>
    </select>
  </div>
    <button class="button is-primary ml-5" v-on:click="reportCroissanted">Add</button>
  </div>
  </div>
  <notification-component :sent="sent" :sentMessage="sentMessage"></notification-component>
</template>

<script>
import NotificationComponent from "@/components/notificationComponent.vue";

export default {
  name: "croissantedComponent",
  components: {NotificationComponent},
  props: {
    promotionId: String
  },
  data() {
    return {
      studentList: [],
      sent: NaN,
      sentMessage : '',
      timeout: Number
    }
  },
  mounted() {
    this.fetchPromotionStudents()
  },
  unmounted() {
    clearTimeout(this.timeout)
  },
  methods: {
    fetchPromotionStudents(){
      fetch('/api/promotion/' + this.promotionId + '/student', {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
        },
      })
          .catch(err => {
            console.error(err)
          })
          .then(resp => {
            if (resp.status !== 200) {
              return Promise.reject(resp.status)
            }
            return resp
          })
          .then(resp => resp.text())
          .then((resp) => {
            resp = JSON.parse(resp)
            this.studentList = resp[0]['student']
          })
    },

    reportCroissanted(){
      const student = this.$refs.selector.value;
      const studentId = this.studentList.find(s => s.name + " " + s.firstname === student).id
      fetch('/api/croissanted/' + studentId, {
        method: 'POST',
        mode: 'cors',
      }).then(resp => {
        this.sent = resp.status
        if (resp.status === 201) {
          this.sentMessage = 'Croissanted added !'
        } else {
          this.sentMessage = 'Error while adding croissanted'
        }
        this.timeout = setTimeout(() => {
          this.sentMessage = ''
        }, 3000)
      })
    }
  }
}
</script>

<style scoped>

</style>
