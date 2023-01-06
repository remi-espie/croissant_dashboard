<template>
  <div class="column is-6">
    <div class="ml-5 mr-5 card">
      <div class="card-header">
        <h4 class="card-header-title title is-4">Create or edit a quote </h4>
      </div>
      <div class="card-content has-text-centered">
        <div class="select ml-5">
          <select ref="selectorQuote" v-on:change="changeQuote">
            <option>New quote</option>
            <option v-for="quote in quotes" :key="quote.id">{{ quote.quote }}</option>
          </select>
        </div>

        <form v-on:submit.prevent class="mt-5">

          <div class="field has-text-left">
            <label class="label">Quote</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Maman ! Je passe à la télé !" ref="quote"
                     :value="quote.quote" required>
              <span class="icon is-small is-left">
          <i class="fas fa-comment"></i>
              </span>
            </div>
          </div>

          <div class="field has-text-left">
            <label class="label">Author</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="M. Toulemonde" ref="author" :value="quote.author" required>
              <span class="icon is-small is-left">
          <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>

          <input type="submit" class="button is-primary" v-on:click="this.updateQuote" value="Save">
        </form>
        <notification-component :sent="sent" :sentMessage="sentMessage"></notification-component>

      </div>
    </div>
  </div>
</template>

<script>
import NotificationComponent from "@/components/notificationComponent.vue";

export default {
  name: "quoteComponent",
  components: {NotificationComponent},
  props: {
    quotes: Array,
  },
  data() {
    return {
      quote: {
        id: null,
        quote: null,
        author: null,
      },
      sent: NaN,
      sentMessage: ''
    };
  },
  methods: {
    changeQuote() {
      if (this.$refs.selectorQuote.value !== "New quote") {
        this.quote = this.quotes.find(quote => quote.quote === this.$refs.selectorQuote.value);
      } else this.quote = [];

    },

    updateQuote() {
      if (this.$refs.selectorQuote.value === "New quote") {
        this.createquote();
      } else this.updatequote();
    },

    createquote() {
      const id = {
        "quote": this.$refs.quote.value,
        "author": this.$refs.author.value,
      }

      fetch("/api/quote", {
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
              this.sentMessage = "Quote created !";
            } else {
              this.sentMessage = "Error " + resp.status + " : " + resp.statusText;
            }
            this.sent = resp.status;
            this.timeout = setTimeout(() => {
              this.sentMessage = ''
            }, 3000)
          })
    },

    updatequote() {
      const id = {
        "quote": this.$refs.quote.value,
        "author": this.$refs.author.value,
      }

      fetch("/api/quote/" + this.quote.id, {
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
              this.sentMessage = "Quote updated !";
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
