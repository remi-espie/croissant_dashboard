<template>
  <main class="is-flex is-flex-direction-column">

    <div id="title" class="is-flex is-centered mb-6 mt-6">
      <img alt="Croissant logo" class="image is-128x128 m-5" src="/icon.png"/>
      <h2 class="title is-2 is-align-self-center">Log in to modify your personal information, view your croissanted history, and
        even your dynamic shopping list !</h2>
    </div>
    <div class="box">

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="firstname.name@etu.umontpellier.fr" ref="login">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="********" ref="password">
        </div>
      </div>

      <button class="button is-primary" v-on:click="this.signIn">Log in</button>
    </div>
    <div id="notification" class="is-flex" v-if="displayCookie">
      <div class="notification is-info is-flex has-text-centered is-centered is-vcentered m-auto">
        <button class="delete" v-on:click="this.displayCookie = false"></button>
        🍪
        Hey ! In order to authenticate you, we need to put a cookie on your computer. Don't worry, it's really small and
        even smells nice !
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
    }
  },
  mounted() {
    if (!this.cookies.isKey("auth-cookie")) {
      this.displayCookie = true;
    }
  },
  methods: {
    signIn(){
      const id = {
        "login" : this.$refs.login.value,
        "password" : this.$refs.password.value
      }

      fetch("https://croissant.remi-espie.me/api/auth/login", {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(id),
        credentials: 'same-origin',
      })
          .catch(err => {
            console.log(err)
            this.loaded = true;
          })
          .then(resp => resp.text())
          .then((json) => {
            json = JSON.parse(json)
            console.log(json)
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

#title{
  width: 75%;
}

#notification {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.notification {
  width: 30vw;
  margin: auto;
}

.box {
  width: 30vw;
}

</style>