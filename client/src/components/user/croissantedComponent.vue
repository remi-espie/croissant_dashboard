<template>
  <div class="container is-flex is-align-items-center is-justify-content-center">
    <h4 class="title is-4 m-0">Who was croissanted recently ? </h4>
  <div class="select ml-5">
    <select ref="selector">
      <option v-for="student in studentList" :key="student.id">{{student.name + " " + student.firstname}}</option>
    </select>
  </div>
    <button class="button is-primary ml-5" v-on:click="reportCroissanted">Add</button>
  </div>
  <div  :class="(sentMessage !== '' ? 'visible' : '') + ' invisible container is-flex is-justify-content-space-evenly'">
    <div :class="(sent === 201 ? 'is-success' : 'is-danger') + ' notification'"> {{sentMessage}}</div>
  </div>
</template>

<script>
export default {
  name: "croissantedComponent",
  props: {
    promotionId: String
  },
  data() {
    return {
      studentList: [],
      sent: Number,
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
          'Access-Control-Allow-Origin': '*',
        },
      })
          .catch(err => {
            console.log(err)
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

.invisible{
  opacity: 0;
  transform: translateY(1em);
  transition: all 0.25s;
}

.visible{
  opacity: 1;
  transition: all 0.25s;
}

</style>
