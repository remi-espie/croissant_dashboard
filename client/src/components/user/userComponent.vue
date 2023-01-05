<template>

  <div class="container">

    <form v-on:submit.prevent class="box">

      <div class="field">
        <label class="label">Name</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="Dent" ref="name" :value="user.name" required>
          <span class="icon is-small is-left">
          <i class="fas fa-signature"></i>
              </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Firstname</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="Arthur" ref="firstname" :value="user.firstname" required>
          <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
              </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Birthday</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="date" placeholder="dd-mm-yyyy" ref="birthday" :value="birthday" >
          <span class="icon is-small is-left">
          <i class="fas fa-signature"></i>
              </span>
        </div>
      </div>

      <div class="field">
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

      <div class="field">
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


      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="arthur.dent@etu.umontpellier.fr" ref="mail" :value="user.mail"  required>
          <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        </div>
      </div>

      <input type="submit" class="button is-primary" v-on:click="this.updateUser" value="Save">
    </form>
    <notification-component :sent="sent" :sentMessage="sentMessage"></notification-component>
  </div>
</template>

<script>
import NotificationComponent from "@/components/notificationComponent.vue";

export default {
  name: "userComponent",
  components: {NotificationComponent},
  props: {
    user: {}
  },
  data() {
    return {
      promotions: [],
      pastries: [],
      birthday: '',
      sent: NaN,
      sentMessage: '',
      timeout: Number
    }
  },
  unmounted() {
    clearTimeout(this.timeout)
  },
  mounted() {
    if (this.user.birthday) this.birthday = this.user.birthday.slice(0, 10);

    this.fetchPromotions();
    this.fetchPastries();
  },
  methods: {
    fetchPromotions() {
      fetch("/api/promotion/all", {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
      })
          .catch(err => {
            console.error(err)
          })
          .then(async resp => {
            if (resp.status === 200) {
              this.promotions = await resp.json();
            }
          })
    },

    fetchPastries(){
      fetch("/api/pastry/all", {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
      })
          .catch(err => {
            console.error(err)
          })
          .then(async resp => {
            if (resp.status === 200) {
              this.pastries = await resp.json();
            }
          })
    },

    updateUser() {
      this.loaded = false;
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

      fetch("/api/student/" + this.user.mail, {
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
              this.sentMessage = "Profile updated !";
            } else {
              this.sentMessage = "Error " + resp.status + " : " + resp.statusText;
            }
            console.log(resp);
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

.box {
  margin: 0 auto;
  width: 40%;
}

</style>
