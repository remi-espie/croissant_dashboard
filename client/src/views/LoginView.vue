<template>
  <main class=" is-block-mobile is-flex-tablet is-flex-direction-row is-justify-content-center p-5">


    <div class="container is-flex">

      <div class="box m-auto" style="height: min-content">
        <div class="tabs is-large is-toggle">
          <ul>
            <li :class="{ 'is-active': isActive === 'login' }">
              <a v-on:click="isActive = 'login'; this.$router.replace({name: 'loginTab', params: {tab: isActive} })">
                <span class="icon"><i class="fas fa-sign-in-alt"></i></span>
                <span>Login</span>
              </a>
            </li>
            <li :class="{ 'is-active': isActive === 'signup' }">
              <a v-on:click="isActive = 'signup'; this.$router.replace({name: 'loginTab', params: { tab: isActive} })">
                <span class="icon"><i class="fas fa-user-plus"></i></span>
                <span>Sign up</span>
              </a>
            </li>
          </ul>
        </div>

        <login-component v-if="isActive === 'login'"></login-component>

        <signup-component v-if="isActive === 'signup'"></signup-component>

        <div class="modal" v-if="displayCookie" :style="{display: displayCookie ? 'flex' : 'none'}">
          <div class="modal-background"></div>
          <div class="modal-content notification is-info">
            <button class="delete" v-on:click="this.displayCookie = false"></button>
            🍪
            Hey ! In order to authenticate you, we need to put a cookie on your computer. Don't worry, it's really small
            and
            even smells nice !
          </div>
        </div>
      </div>
    </div>
    <div id="title" class="is-centered pl-5 mt-auto mb-auto is-flex is-flex-direction-column" style="height: min-content">
      <img alt="Croissant logo" class="image is-128x128 m-5" src="@/assets/icon.png"/>
      <h2 class="title is-2 is-align-self-center" v-if="isActive === 'login'">Log in to modify your personal
        information, view your croissanted
        history, and
        even your dynamic shopping list !</h2>

      <h2 class="title is-2 is-align-self-center" v-if="isActive === 'signup'">Signup, add your promotion and your
        birthday to enjoy the app to the fullest !</h2>
    </div>
  </main>
</template>

<script>
import {useCookies} from "vue3-cookies";
import LoginComponent from "@/components/user/loginComponent.vue";
import SignupComponent from "@/components/user/signupComponent.vue";

export default {
  name: "loginView",
  components: {SignupComponent, LoginComponent},
  setup() {
    const {cookies} = useCookies();
    return {cookies};
  },
  data() {
    return {
      displayCookie: false,
      error: false,
      loaded: true,
      errorMessage: String,
      isActive: 'login'
    }
  },
  mounted() {

    fetch('/api/login')
        .then(resp => {

          if (resp.status === 200) {
            this.$router.push({name: "user"})
          } else {
            const tabs = ['login', 'signup'];
            if (this.$route.params.tab) {
              if (tabs.includes(this.$route.params.tab))
                this.isActive = this.$route.params.tab;
            }
            this.displayCookie = true
          }
        })

  },
}
</script>

<style scoped>

main {
  min-height: 100vh;
  display: flex;
}

main * {
  margin: 0 auto;
}

#title {
  width: 60%;
}

.notification {
  width: 30%;
  margin: auto;
}

.box {
  background-color: white;
}

</style>
