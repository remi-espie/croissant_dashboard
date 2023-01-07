<template>
  <div class="column is-6">
    <div class="ml-5 mr-5 card">
      <div class="card-header">
        <h4 class="card-header-title title is-4">Create or edit student </h4>
      </div>
      <div class="card-content has-text-centered">
        <div class="select ml-5">
          <select ref="selectorStudent" v-on:change="changeStudent">
            <option>New student</option>
            <option v-for="student in students" :key="student.id">{{ student.firstname + " " + student.name }}
            </option>
          </select>
        </div>

        <form v-on:submit.prevent class="mt-5">

          <div class="field has-text-left">
            <label class="label">Name</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Dent" ref="name" :value="user.name" required>
              <span class="icon is-small is-left">
          <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>

          <div class="field has-text-left">
            <label class="label">Firstname</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Arthur" ref="firstname" :value="user.firstname" required>
              <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field has-text-left">
            <label class="label">Birthday</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="date" placeholder="dd-mm-yyyy" ref="birthday" :value="user.birthday">
              <span class="icon is-small is-left">
          <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>

          <div class="field has-text-left">
            <label class="label">Favorite pastry</label>
            <div class="control has-icons-left has-icons-right">
              <select class="input" ref="pastry" :value="user.pastryId" required>
                <option v-for="pastry in pastries" :key="pastry.id" :value="pastry.id">{{ pastry.name }}
                </option>
              </select>
              <span class="icon is-small is-left">
          <i class="fas fa-cookie-bite"></i>
              </span>
            </div>
          </div>

          <div class="field has-text-left">
            <label class="label">Promotion</label>
            <div class="control has-icons-left has-icons-right">
              <select class="input" ref="promotion" :value="user.promotionId" required>
                <option v-for="promotion in promotions" :key="promotion.id" :value="promotion.id">{{ promotion.name }}
                </option>
              </select>
              <span class="icon is-small is-left">
          <i class="fas fa-graduation-cap"></i>
              </span>
            </div>
          </div>


          <div class="field has-text-left">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="arthur.dent@etu.umontpellier.fr" ref="mail"
                     :value="user.mail" required>
              <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
            </div>
          </div>

          <div class="is-flex is-justify-content-space-evenly">
            <input type="submit" class="button is-primary" v-on:click="this.updateStudent" value="Save">
            <input type="submit" class="button is-danger" v-on:click="this.deleteUser" value="Delete">
          </div>
        </form>
        <notification-component :sent="sent" :sentMessage="sentMessage"></notification-component>

      </div>
    </div>
  </div>
</template>

<script>
import NotificationComponent from "@/components/notificationComponent.vue";

export default {
  name: "studentComponent",
  components: {NotificationComponent},
  props: {
    students: Array,
    pastries: Array,
    promotions: Array
  },
  data() {
    return {
      user: {
        id: null,
        name: null,
        firstname: null,
        birthday: null,
        pastryId: null,
        promotionId: null,
        mail: null
      },
      sent: NaN,
      sentMessage: ''
    };
  },
  methods: {
    changeStudent() {
      if (this.$refs.selectorStudent.value !== "New student") {
        this.user = this.students.find(student => student.firstname + " " + student.name === this.$refs.selectorStudent.value);
      } else this.user = [];
    },

    updateStudent() {
      if (this.$refs.selectorStudent.value === "New student") {
        this.createUser();
      } else this.updateUser();
    },

    deleteUser() {
      if (this.$refs.selectorStudent.value !== "New student") {
        this.user = this.students.find(student => student.firstname + " " + student.name === this.$refs.selectorStudent.value);
        fetch("/api/student/" + this.user.id, {
          method: 'DELETE',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin',
        })
            .catch(err => {
              console.error(err)
            })
            .then(resp => {
              if (resp.status === 401) {
                this.sentMessage = "Invalid credentials";
              } else if (resp.status === 200) {
                this.sentMessage = "Profile deleted !";
              } else {
                this.sentMessage = "Error " + resp.status + " : " + resp.statusText;
              }
              this.sent = resp.status;
              this.timeout = setTimeout(() => {
                this.sentMessage = ''
              }, 3000)
            })
      } else {
        this.sentMessage = "You can't delete a non-existing profile";
        this.sent = 400;
        this.timeout = setTimeout(() => {
          this.sentMessage = ''
        }, 3000)
      }
    },

    createUser() {
      let birthday = "1970-01-01";
      birthday = new Date(birthday).toISOString();
      const id = {
        "name": this.$refs.name.value,
        "firstname": this.$refs.firstname.value,
        "birthday": birthday,
        "mail": this.$refs.mail.value,
        "promotionId": this.$refs.promotion.value,
        "pastryId": this.$refs.pastry.value,
      }

      fetch("/api/student", {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
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
              this.sentMessage = "Profile created !";
            } else {
              this.sentMessage = "Error " + resp.status + " : " + resp.statusText;
            }
            this.sent = resp.status;
            this.timeout = setTimeout(() => {
              this.sentMessage = ''
            }, 3000)
          })
    },

    updateUser() {
      let birthday = this.$refs.birthday.value ? this.$refs.birthday.value : "1970-01-01";
      birthday = new Date(birthday).toISOString();
      const id = {
        "name": this.$refs.name.value,
        "firstname": this.$refs.firstname.value,
        "birthday": birthday,
        "mail": this.$refs.mail.value,
        "promotionId": this.$refs.promotion.value,
        "pastryId": this.$refs.pastry.value,
      }

      fetch("/api/student/" + this.user.id, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
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
              this.sentMessage = "Profile updated !";
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
