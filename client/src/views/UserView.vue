<template>
  <main class="pageloader" v-if="!loaded" v-bind:class="{'is-active' : !loaded}">
    <span class="title has-text-centered is-1">Loading...</span>
  </main>
  <main v-else>

    <header>
      <div
          class="container is-block-tablet is-flex-desktop is-flex-direction-row is-justify-content-space-evenly is-align-items-center">
        <img alt="Croissant logo" class="image is-128x128 m-5" src="@/assets/icon.png"/>
        <h2 class="title is-2 m-5">
          <router-link to="/">Home</router-link>
        </h2>
        <h2 class="title is-2 m-5">
          <router-link :to="'/dashboard/' + promotion.name"> Your dashboard</router-link>
        </h2>
        <h2 class="title is-2 m-5">
          <a v-on:click="signOut">
            <span><i class="fas fa-sign-out-alt"></i></span>
            <span> Sign out</span>
          </a>
        </h2>
      </div>
    </header>
    <hr/>

    <div class="tabs is-large is-toggle is-fullwidth">
      <ul>
        <li :class="{ 'is-active': isActive === 'croissanted' }">
          <a v-on:click="isActive = 'croissanted'; this.$router.push('/user_panel/croissanted')">
            <span class="icon"><i class="fas fa-concierge-bell"></i></span>
            <span>Post a Croissanted</span>
          </a>
        </li>
        <li :class="{ 'is-active': isActive === 'quote' }">
          <a v-on:click="isActive = 'quote'; this.$router.push('/user_panel/quote')">
            <span class="icon"><i class="fas fa-comment"></i></span>
            <span>Post a Quote</span>
          </a>
        </li>
        <li :class="{ 'is-active': isActive === 'shopping' }">
          <a v-on:click="isActive = 'shopping'; this.$router.push('/user_panel/shopping')">
            <span class="icon"><i class="fas fa-store"></i></span>
            <span>Shopping list</span>
          </a>
        </li>
        <li :class="{ 'is-active': isActive === 'stats' }">
          <a v-on:click="isActive = 'stats'; this.$router.push('/user_panel/stats')">
            <span class="icon"><i class="fas fa-chart-line" aria-hidden="true"></i></span>
            <span>Statistics</span>
          </a>
        </li>
        <li :class="{ 'is-active': isActive === 'user' }">
          <a v-on:click="isActive = 'user'; this.$router.push('/user_panel/user')">
            <span class="icon"><i class="fas fa-user"></i></span>
            <span>User settings</span>
          </a>
        </li>
        <li :class="{ 'is-active': isActive === 'danger'}">
          <a v-on:click="isActive = 'danger'; this.$router.push('/user_panel/danger')">
            <span class="icon"><i class="fas fa-cog"></i></span>
            <span>Danger zone</span>
          </a>
        </li>
        <li v-if="login.admin" :class="{ 'is-active': isActive === 'admin' }">
          <a v-on:click="isActive = 'admin'; this.$router.push('/user_panel/admin')">
            <span class="icon"><i class="fas fa-user-shield"></i></span>
            <span> Admin Panel </span>
          </a>
        </li>

      </ul>
    </div>

    <quote-component v-if="isActive === 'quote'" :promotionId="user.promotionId"></quote-component>

    <croissanted-component v-if="isActive === 'croissanted'" :promotionId="user.promotionId"></croissanted-component>

    <shopping-component v-if="isActive === 'shopping'" :promotionId="user.promotionId"
                        :studentId="user.id"></shopping-component>

    <stats-component v-if="isActive === 'stats'" :promotionId="user.promotionId" :studentId="user.id"></stats-component>

    <user-component v-if="isActive === 'user'" :user="user"></user-component>

    <danger-component v-if="isActive === 'danger'" :login="login"></danger-component>

    <admin-component v-if="login.admin && isActive === 'admin'"></admin-component>
  </main>
</template>

<script>
import AdminComponent from "@/components/user/adminComponent.vue";
import {useCookies} from "vue3-cookies";
import CroissantedComponent from "@/components/user/croissantedComponent.vue";
import QuoteComponent from "@/components/user/quoteComponent.vue";
import ShoppingComponent from "@/components/user/shoppingComponent.vue";
import StatsComponent from "@/components/user/statsComponent.vue";
import UserComponent from "@/components/user/userComponent.vue";
import DangerComponent from "@/components/user/dangerComponent.vue";

export default {
  name: "UserView",
  components: {
    DangerComponent,
    UserComponent, StatsComponent, ShoppingComponent, QuoteComponent, CroissantedComponent, AdminComponent
  },
  setup() {
    const {cookies} = useCookies();
    return {cookies};
  },
  data() {
    return {
      loaded: false,
      isActive: 'croissanted',
      login: [],
      user: [],
      promotion: [],
      pastry: [],
      scoreboard: [],
      stats: [],
    }
  },
  mounted() {
    fetch('/api/login')
        .then(resp => {
          if (resp.status !== 200) {
            this.$router.replace('/login')
          }
        }).then(() => {
      const tabs = ['croissanted', 'quote', 'shopping', 'stats', 'user', 'danger', 'admin'];
      if (this.$route.params.tab) {
        if (tabs.includes(this.$route.params.tab))
          this.isActive = this.$route.params.tab;
      }
      this.fetchData();
    })
  },
  methods: {

    signOut() {
      fetch('/api/auth/logout', {
        method: 'POST',
      })
          .then(() => {
            this.cookies.remove("authenticated");
            this.$router.replace('/');
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    },

    fetchData() {
      this.fetchAdmin()
      this.fetchScoreboard()
      this.fetchPastry()
    },

    fetchAdmin() {
      fetch('/api/login')
          .then(resp => resp.json())
          .then(json => {
            this.login = json;
            this.fetchUser(json.login);
          })
    },

    fetchUser(id) {
      fetch('/api/student/' + id)
          .then(resp => resp.json())
          .then(json => {
            this.user = json;
            this.fetchStats(json.id)
            this.fetchPromotion(json.promotionId)
          })
    },

    fetchStats(id) {
      fetch('/api/croissanted/' + id + "/student")
          .then(resp => resp.json())
          .then(json => {
            this.stats = json;
          })
    },

    fetchScoreboard() {
      fetch('/api/croissanted/scoreboard')
          .then(resp => resp.json())
          .then(json => {
            this.scoreboard = json;
          })
    },

    fetchPastry() {
      fetch('/api/pastry/all')
          .then(resp => resp.json())
          .then(json => {
            this.pastry = json;
          })
    },

    fetchPromotion(id) {
      fetch('/api/promotion/' + id)
          .then(resp => resp.json())
          .then(json => {
            this.promotion = json;
            this.loaded = true
          })
    }
  },
}
</script>

<style scoped>

</style>
