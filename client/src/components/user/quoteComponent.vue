<template>
  <div class="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">

    <textarea class="textarea mt-5" placeholder="e.g. Hello world" ref="quote"></textarea>

    <div class="mt-5">
      <label for="selector" class="title is-4 m-0">Add an author ? </label>
      <input class="checkbox ml-3" type="checkbox" id="selector" v-model="disabled">
    </div>

    <div class="is-block-mobile is-flex-tablet is-flex-direction-row is-justify-content-center mt-5">
      <div class="select ml-5">
        <select ref="selector" :disabled="!disabled">
          <option v-for="student in studentList" :key="student.id">{{ student.name + " " + student.firstname }}</option>
        </select>
      </div>
      <div class="ml-5 is-flex is-align-items-center">...or...</div>
      <input class="input ml-5" type="text" placeholder="Custom Author" ref="customAuthor" :disabled="!disabled">
    </div>

    <button class="button is-primary mt-5" v-on:click="addQuote">Add</button>

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
      sentMessage: '',
      timeout: Number,
      disabled: true
    }
  },
  mounted() {
    this.fetchStudents()
  },
  unmounted() {
    clearTimeout(this.timeout)
  },
  methods: {
    fetchStudents() {
      fetch('/api/student/all', {
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
            this.studentList = resp
          })
    },

    addQuote() {
      const student = this.$refs.selector.value;
      const customAuthor = this.$refs.customAuthor.value;
      const quote = this.$refs.quote.value;
      let author = 'anon'
      if (customAuthor !== ''){
        author = customAuthor
      }
      else if (!this.disabled){
        author = student
      }
      fetch('/api/quote', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quote: quote,
          author: author
        })
      }).then(resp => {
        this.sent = resp.status
        if (resp.status === 201) {
          this.sentMessage = 'Quote added !'
        } else {
          this.sentMessage = 'Error while adding quote'
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

textarea{
  width: 50%;
  min-width: 50%;
}

</style>
