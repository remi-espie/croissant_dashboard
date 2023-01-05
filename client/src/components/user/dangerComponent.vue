<template>
<div class="container is-flex is-justify-content-space-evenly">
  <div class="card">
    <div class="card-header">
      <p class="card-header-title title is-4">
        Change your password
      </p>
    </div>
    <div class="card-content">
      <form v-on:submit.prevent>
      <div class="field">
        <label class="label">New password</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="password" placeholder="********" ref="password" required>
          <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
          </span>
        </div>
      </div>

      <input type="submit" class="button is-danger" v-on:click="this.updatePassword" value="Change password">
      </form>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <p class="card-header-title title is-4">
        Delete your account
      </p>
    </div>
    <div class="card-content">
      <h5 class="title is-5">⚠️ This action is irreversible !</h5>
      <form v-on:submit.prevent class="is-flex is-align-items-center">
        <input type="submit" class="button is-danger " v-on:click="this.deleteAccount" value="Delete your account">
      </form>
    </div>
  </div>
</div>
  <notification-component :sent="sent" :sentMessage="sentMessage"></notification-component>
</template>

<script>
import NotificationComponent from "@/components/notificationComponent.vue";

export default {
  name: "dangerComponent",
  components: {NotificationComponent},
  props: {
    login: {},
  },
  data() {
    return {
      sent: NaN,
      sentMessage: "",
      timeout: Number
    };
  },
  unmounted() {
    clearTimeout(this.timeout)
  },
  methods:{
    updatePassword(){
        const id = {
          "login": this.login.login,
          "password": this.$refs.password.value
        }

        fetch("/api/login/" + this.login.id, {
          method: 'PATCH',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(id),
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

                this.sentMessage = "Password updated !";

                this.timeout = setTimeout(() => {
                  this.sentMessage = ''
                }, 3000)

              } else {
                this.error = true;
                this.errorMessage = "Error " + resp.status + " : " + resp.statusText;
              }
            })
    },

    deleteAccount(){
      fetch("/api/student/" + this.login.login, {
        method: 'DELETE',
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
            console.log(resp)
            if (resp.status === 401) {
              this.error = true;
              this.errorMessage = "Invalid credentials";
            } else if (resp.status === 200) {

              this.sentMessage = "Account deleted !";

              this.timeout = setTimeout(() => {
                this.sentMessage = ''
              }, 3000)

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
