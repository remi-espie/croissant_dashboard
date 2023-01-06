<template>
  <div class="column is-6">
    <div class="ml-5 mr-5 card">
      <div class="card-header">
        <h4 class="card-header-title title is-4">Create or edit a promotion </h4>
      </div>
      <div class="card-content has-text-centered">
        <div class="select ml-5">
          <select ref="selectorPromotion" v-on:change="changePromotion">
            <option>New Promotion</option>
            <option v-for="promotion in promotions" :key="promotion.id">{{ promotion.name }}</option>
          </select>
        </div>

        <form v-on:submit.prevent class="mt-5">

          <div class="field has-text-left">
            <label class="label">Name</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="DO3" ref="name" :value="promo.name" required>
              <span class="icon is-small is-left">
          <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>

          <div class="field has-text-left">
            <label class="label">Year</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="number" placeholder="2022" ref="year" :value="promo.year" required>
              <span class="icon is-small is-left">
          <i class="fas fa-graduation-cap"></i>
              </span>
            </div>
          </div>

          <div class="field has-text-left">
            <label class="label">URL Schedule</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="url"
                     placeholder="https://proseconsult.umontpellier.fr/jsp/custom/modules/plannings/direct_cal.jsp?data=58c99062bab31d256bee14356aca3f2423c0f022cb9660eba051b2653be722c41984e67bbcf32a85131abbfce0350104dc5c094f7d1a811b903031bde802c7f5b399f9e7c3bba8f521c90cbeee2cb06b969dc7dae33d5165dfd2e1d1262ac603b4ff382a63e0b21f5f1fc201eebb7689395784b012b9633f044f8bfdf38531c1,1"
                     ref="schedule" :value="promo.url_schedule">
              <span class="icon is-small is-left">
          <i class="fas fa-calendar"></i>
              </span>
            </div>
          </div>


          <div class="field has-text-left">
            <label class="label">URL Picture</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="url"
                     placeholder="https://cdn.discordapp.com/attachments/743513456765829174/1059745411893559357/IMG_3703.jpg"
                     ref="picture" :value="promo.url_picture" required>
              <span class="icon is-small is-left">
          <i class="fas fa-image"></i>
        </span>
            </div>
          </div>

          <input type="submit" class="button is-primary" v-on:click="this.updatePromotion" value="Save">
        </form>
        <notification-component :sent="sent" :sentMessage="sentMessage"></notification-component>

      </div>
    </div>
  </div>
</template>

<script>
import NotificationComponent from "@/components/notificationComponent.vue";

export default {
  name: "promotionComponent",
  components: {NotificationComponent},
  props: {
    promotions: Array
  },
  data() {
    return {
      promo: {
        id: null,
        name: null,
        year: null,
        url_schedule: null,
        url_picture: null,
      },
      sent: NaN,
      sentMessage: ''
    };
  },
  methods: {
    changePromotion() {
      if (this.$refs.selectorPromotion.value !== "New Promotion") {
        this.promo = this.promotions.find(promo => promo.name === this.$refs.selectorPromotion.value);
      } else this.promo = [];
    },

    updatePromotion() {
      if (this.$refs.selectorPromotion.value === "New Promotion") {
        this.createPromotion();
      } else this.updatePromo();
    },

    createPromotion() {
      const id = {
        "name": this.$refs.name.value,
        "year": parseInt(this.$refs.year.value),
        "url_schedule": this.$refs.schedule.value,
        "url_picture": this.$refs.picture.value,
      }

      fetch("/api/promotion", {
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
              this.sentMessage = "Promotion created !";
            } else {
              this.sentMessage = "Error " + resp.status + " : " + resp.statusText;
            }
            this.sent = resp.status;
            this.timeout = setTimeout(() => {
              this.sentMessage = ''
            }, 3000)
          })
    },

    updatePromo() {
      const id = {
        "name": this.$refs.name.value,
        "year": parseInt(this.$refs.year.value),
        "url_schedule": this.$refs.schedule.value,
        "url_picture": this.$refs.picture.value,
      }

      fetch("/api/promotion/" + this.promo.id, {
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
              this.sentMessage = "Promotion updated !";
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
