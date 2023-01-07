<template>
  <div class="column is-6">
    <div class="ml-5 mr-5 card">
      <div class="card-header">
        <h4 class="card-header-title title is-4">Create or edit a pastry </h4>
      </div>
      <div class="card-content has-text-centered">
        <div class="select ml-5">
          <select ref="selectorPastry" v-on:change="changePastry">
            <option>New pastry</option>
            <option v-for="pastry in pastries" :key="pastry.id">{{ pastry.name }}</option>
          </select>
        </div>

        <form v-on:submit.prevent class="mt-5">

          <div class="field has-text-left">
            <label class="label">Name</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="DO3" ref="name" :value="pastry.name" required>
              <span class="icon is-small is-left">
          <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>

          <div class="field has-text-left">
            <label class="label">Price</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="number" step="0.01" placeholder="0.60" ref="price" :value="pastry.price"
                     required>
              <span class="icon is-small is-left">
          <i class="fas fa-euro-sign"></i>
              </span>
            </div>
          </div>
          <div class="is-flex is-justify-content-space-evenly">
            <input type="submit" class="button is-primary" v-on:click="this.updatePastries" value="Save">
            <input type="submit" class="button is-danger" v-on:click="this.deletePastries" value="Delete">
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
  name: "pastryComponent",
  components: {NotificationComponent},
  props: {
    pastries: Array
  },
  data() {
    return {
      pastry: {
        id: null,
        name: null,
        price: null,
      },
      sent: NaN,
      sentMessage: ''
    };
  },
  methods: {
    changePastry() {
      if (this.$refs.selectorPastry.value !== "New pastry") {
        this.pastry = this.pastries.find(pastry => pastry.name === this.$refs.selectorPastry.value);
      } else this.pastry = [];

    },

    updatePastries() {
      if (this.$refs.selectorPastry.value === "New pastry") {
        this.createPastry();
      } else this.updatePastry();
    },

    deletePastries() {
      if (this.$refs.selectorPastry.value !== "New pastry") {
        this.pastry = this.pastries.find(pastry => pastry.name === this.$refs.selectorPastry.value);

        fetch("/api/pastry/" + this.pastry.id, {
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
                this.sentMessage = "Pastry deleted !";
              } else {
                this.sentMessage = "Error " + resp.status + " : " + resp.statusText;
              }
              this.sent = resp.status;
              this.timeout = setTimeout(() => {
                this.sentMessage = ''
              }, 3000)
            })
      } else {
        this.sent = 400;
        this.sentMessage = "You can't delete a non-existing pastry";
        this.timeout = setTimeout(() => {
          this.sentMessage = ''
        }, 3000)
      }
    },

    createPastry() {
      const id = {
        "name": this.$refs.name.value,
        "price": parseFloat(this.$refs.price.value),
      }

      fetch("/api/pastry", {
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
              this.sentMessage = "Pastry created !";
            } else {
              this.sentMessage = "Error " + resp.status + " : " + resp.statusText;
            }
            this.sent = resp.status;
            this.timeout = setTimeout(() => {
              this.sentMessage = ''
            }, 3000)
          })
    },

    updatePastry() {
      const id = {
        "name": this.$refs.name.value,
        "price": parseFloat(this.$refs.price.value),
      }

      fetch("/api/pastry/" + this.pastry.id, {
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
              this.sentMessage = "Pastry updated !";
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
