<template>
  <form v-on:submit.prevent>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="arthur.dent@etu.umontpellier.fr" ref="login">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="password" placeholder="********" ref="password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
          </span>
      </div>
    </div>

    <input type="submit" class="button is-primary" v-on:click="this.signIn" value="Log in">
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
  name: "loginComponent",
  data() {
    return {
      errorMessage: String,
      error: false
    }
  },
  methods: {
    signIn() {
      this.loaded = false;
      const id = {
        "login": this.$refs.login.value,
        "password": this.$refs.password.value
      }

      fetch("/api/auth/login", {
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
            this.error = true;
            this.errorMessage = "Invalid credentials";
          })
          .then(async resp => {
            if (resp.status === 401) {
              this.error = true;
              this.errorMessage = "Invalid credentials";
            } else if (resp.status === 201) {
              this.$router.replace({name: "user"});
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
