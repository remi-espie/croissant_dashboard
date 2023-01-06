<template>
  <form v-on:submit.prevent>

    <div class="field">
      <label class="label">Name</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Dent" ref="name" required>
        <span class="icon is-small is-left">
          <i class="fas fa-signature"></i>
              </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Firstname</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Arthur" ref="firstname" required>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
              </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Birthday</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="date" placeholder="dd-mm-yyyy" value="" ref="birthday">
        <span class="icon is-small is-left">
          <i class="fas fa-signature"></i>
              </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Favorite pastry</label>
      <div class="control has-icons-left has-icons-right">
        <select class="input" ref="pastry" required>
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
        <select class="input" ref="promotion" required>
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
        <input class="input" type="email" placeholder="arthur.dent@etu.umontpellier.fr" ref="mail" required>
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="password" placeholder="********" ref="password" required>
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
          </span>
      </div>
    </div>

    <input type="submit" class="button is-primary" v-on:click="this.signUp" value="Sign up">
  </form>
  <div class="modal" v-if="error" :style="{display: error ? 'flex' : 'none'}">
    <div class="modal-background"></div>
    <div class="modal-content notification is-danger">
      <button class="delete" v-on:click="this.error = false"></button>
      ⚠️
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "signupComponent",
  data() {
    return {
      promotions: [],
      pastries: [],
      errorMessage: String,
      error: false
    }
  },
  mounted() {
    this.fetchPromotions();
    this.fetchPastries();
  },
  methods: {
    fetchPromotions() {
      fetch("/api/promotion/all", {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
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

    fetchPastries() {
      fetch("/api/pastry/all", {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
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


    signUp() {
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
          .then(async resp => {
            if (resp.status === 401) {
              this.error = true;
              this.errorMessage = "Invalid credentials";
            } else if (resp.status === 201) {
              this.signIn()
            } else {
              this.error = true;
              this.errorMessage = "Error " + resp.status + " : " + resp.statusText;
            }
          })
    },

    signIn() {
      this.loaded = false;
      const id = {
        "login": this.$refs.mail.value,
        "password": this.$refs.mail.value
      }

      fetch("/api/auth/login", {
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
          .then(async resp => {
            console.log(resp)
            if (resp.status === 401) {
              this.error = true;
              this.errorMessage = "Invalid credentials";
            } else if (resp.status === 201) {

              this.updatePassword(JSON.parse(await resp.text()))


            } else {
              this.error = true;
              this.errorMessage = "Error " + resp.status + " : " + resp.statusText;
            }
          })
    },

    updatePassword(login) {
      this.loaded = false;
      const id = {
        "login": this.$refs.mail.value,
        "password": this.$refs.password.value
      }

      fetch("/api/login/" + login.id, {
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
          .then(async resp => {
            console.log(resp)
            if (resp.status === 401) {
              this.error = true;
              this.errorMessage = "Invalid credentials";
            } else if (resp.status === 200) {

              this.$router.replace({name: 'user'});


            } else {
              this.error = true;
              this.errorMessage = "Error " + resp.status + " : " + resp.statusText;
            }
          })
    }

  }
}
</script>

<style scoped>

</style>
