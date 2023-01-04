<template>
  <main class="is-flex is-flex-direction-column">

    <div id="title" class="is-flex is-centered mb-6 mt-6">
      <img alt="Croissant logo" class="image is-128x128 m-5" src="/icon.png"/>
      <h2 class="title is-2 is-align-self-center">Log in to modify your personal information, view your croissanted
        history, and
        even your dynamic shopping list !</h2>
    </div>
    <form class="box" v-on:submit.prevent>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="firstname.name@etu.umontpellier.fr" ref="login">
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
    <div class="modal" v-if="displayCookie" :style="{display: displayCookie ? 'flex' : 'none'}">
      <div class="modal-background"></div>
      <div class="modal-content notification is-info">
        <button class="delete" v-on:click="this.displayCookie = false"></button>
        🍪
        Hey ! In order to authenticate you, we need to put a cookie on your computer. Don't worry, it's really small and
        even smells nice !
      </div>
    </div>
    <div class="modal" v-if="error">
      <div class="modal-background"></div>
      <div class="modal-content notification is-danger">
        <button class="delete" v-on:click="this.error = false"></button>
        ⚠️
        {{ errorMessage }}
      </div>
    </div>
  </main>
</template>

<script>
import {useCookies} from "vue3-cookies";

export default {
  name: "loginView",
  setup() {
    const {cookies} = useCookies();
    return {cookies};
  },
  data() {
    return {
      displayCookie: false,
      error: false,
      loaded: true,
      errorMessage: String
    }
  },
  mounted() {
    if (!this.cookies.isKey("auth-cookie")) {
      this.displayCookie = true;
    }
    else {
      this.$router.push("/user");
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
            console.log(err)
            this.loaded = true;
          })
          .then(async resp => {
            if (resp.status === 401) {
              this.loaded = true;
              this.error = true;
              this.errorMessage = "Invalid credentials";
            } else if (resp.status === 201) {
              this.cookies.set("authenticated", "true");
              this.loaded = true;
              this.$router.replace({name: "user"});
            } else {
              this.loaded = true;
              this.error = true;
              this.errorMessage = "Error " + resp.status + " : " + resp.statusText;
            }
          })
    }
  },
}
</script>

<style scoped>

main {
  height: 100vh;
  display: flex;
}

main * {
  margin: 0 auto;
}

#title {
  width: 60%;
}

.notification {
  width: 30vw;
  margin: auto;
}

.box {
  width: 30vw;
  background-color: white;
}

</style>
