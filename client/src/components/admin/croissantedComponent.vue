<template>
  <div class="column is-6">
    <div class="ml-5 mr-5 card">
      <div class="card-header">
        <h4 class="card-header-title title is-4">Create or edit a croissanted </h4>
      </div>
      <div class="card-content has-text-centered">
        <div class="select ml-5">
          <select ref="selectorCroissanted" v-on:change="changeCroissanted">
            <option>New croissanted</option>
            <option v-for="croissant in croissanted" :key="croissant.id">{{ croissant.id }}</option>
          </select>
        </div>

        <form v-on:submit.prevent class="mt-5">

          <div class="field has-text-left">
            <label class="label">Date</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="datetime-local" step="1" v-on:change="coucou" ref="date" :value="croissant.date" required>
              <span class="icon is-small is-left">
          <i class="fas fa-calendar"></i>
              </span>
            </div>
          </div>

          <div class="field has-text-left is-flex is-align-items-center">
            <label class="label mb-0">Bought</label>
            <input class="checkbox ml-5" type="checkbox" ref="bought" :value="croissant.bought">
          </div>

          <div class="field has-text-left">
            <label class="label">Croissanted student</label>
            <div class="control has-icons-left has-icons-right">
              <div class="select">
                <select ref="selectorStudent" :value="
                      student.name + ' ' + student.firstname
                ">
                  <option v-for="student in students" :key="student.id">{{
                      student.name + " " + student.firstname
                    }}
                  </option>
                </select>
                <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
              </span>
              </div>
            </div>
          </div>


          <input type="submit" class="button is-primary" v-on:click="this.updateCroissanted" value="Save">
        </form>
        <notification-component :sent="sent" :sentMessage="sentMessage"></notification-component>

      </div>
    </div>
  </div>
</template>

<script>
import NotificationComponent from "@/components/notificationComponent.vue";

export default {
  name: "croissantedComponent",
  components: {NotificationComponent},
  props: {
    croissanted: Array,
    students: Array,
  },
  data() {
    return {
      croissant: {
        id: null,
        name: null,
        year: null,
        studentId: null,
      },
      student: [],
      sent: NaN,
      sentMessage: ''
    };
  },
  methods: {

    changeCroissanted() {
      if (this.$refs.selectorCroissanted.value !== "New croissanted") {
        this.croissant = this.croissanted.find(croissant => croissant.id === this.$refs.selectorCroissanted.value);
        this.student = this.students.find(student => student.id === this.croissant.studentId);
      } else this.croissant = [];
    },

    updateCroissanted() {
      if (this.$refs.selectorCroissanted.value === "New croissanted") {
        this.createCroissanted();
      } else this.updateCroissant();
    },

    createCroissanted() {
      let date = this.$refs.date.value ? this.$refs.date.value : "1970-01-01";
      date = new Date(date).toISOString();

      const studentId = this.students.find(student => student.name + " " + student.firstname === this.$refs.selectorStudent.value).id;
      const id = {
        "date": date,
        "bought": this.$refs.bought.value === "true",
        "studentId": studentId,
      }

      fetch("/api/croissanted", {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(id),
        credentials: 'same-origin',
      })
          .catch(err => {
            console.error(err)
          })
          .then(resp => {
            if (resp.status === 401) {
              this.sentMessage = "Invalid credentials";
            } else if (resp.status === 201) {
              this.sentMessage = "croissanted created !";
            } else {
              this.sentMessage = "Error " + resp.status + " : " + resp.statusText;
            }
            this.sent = resp.status;
            this.timeout = setTimeout(() => {
              this.sentMessage = ''
            }, 3000)
          })
    },

    updateCroissant() {
      let date = this.$refs.date.value ? this.$refs.date.value : "1970-01-01";
      date = new Date(date).toISOString();
      const studentId = this.students.find(student => student.firstname + " " + student.name === this.$refs.selectorStudent.value).id;
      const id = {
        "date": date,
        "bought": this.$refs.bought.value === "true",
        "studentId": studentId,
      }

      fetch("/api/croissanted/" + this.croissant.id, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(id),
        credentials: 'same-origin',
      })
          .catch(err => {
            console.error(err)
          })
          .then(resp => {
            if (resp.status === 401) {
              this.sentMessage = "Invalid credentials";
            } else if (resp.status === 200) {
              this.sentMessage = "croissanted updated !";
            } else {
              this.sentMessage = "Error " + resp.status + " : " + resp.statusText;
            }
            this.sent = resp.status;
            this.timeout = setTimeout(() => {
              this.sentMessage = ''
            }, 3000)
          })
    },
  }
}
</script>

<style scoped>

</style>
