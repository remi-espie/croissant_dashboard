<template>
  <div class="box invisible p-2" ref="quoteBox">
    <span id="quote" ref="quote">{{ this.quote }}</span>
  </div>
</template>

<script>
export default {
  name: "quoteComponent",
  mounted() {
    setTimeout(this.displayQuote, 6000)
  },
  unmounted() {
    clearTimeout(this.timeoutQuote)
    clearTimeout(this.timeoutAnim)
  },
  data() {
    return {
      quote: '',
      timeoutQuote: Number,
      timeoutAnim: Number,
    }
  },
  methods: {
    displayQuote() {
      fetch("/api/quote/random", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/'
        }
      })
          .catch(err => {
            console.error(err)
            this.promotionExists = false
            this.loaded = true;
          })
          .then(resp => {
            if (resp.status !== 200) {
              this.promotionExists = false
              this.loaded = true;
              return Promise.reject(resp.status)
            }
            return resp
          })
          .then(resp => resp.text())
          .then((json) => {
            json = JSON.parse(json)
            if (json.length > 0) {
              json = json[0]
              if (json.author === "") json.author = "anonymous"
              this.quote = json.quote + " - " + json.author
            } else return Promise.reject("No quote found")
          }).then(() => {
        if (this.$refs.quoteBox) this.$refs.quoteBox.classList.remove("invisible")
        // dynamically change the animation duration in relation to the distance the quote will travel
        let duration = 10000
        if (this.$refs.quote) {
          duration = (this.$refs.quote.clientWidth + 300) * 1000 / 20
          this.$refs.quote.style.animationDuration = duration + 'ms'
          this.$refs.quote.classList.add("animate")
        }

        this.timeoutAnim = setTimeout(() => {
          if (this.$refs.quoteBox) this.$refs.quoteBox.classList.add("invisible")
        }, duration)

        //restart a quote display after a minute
        this.timeoutQuote = setTimeout(() => {
          if (this.$refs.quote) this.$refs.quote.classList.remove("animate")
          this.displayQuote()
        }, duration + 6000)
      })
    },
  }
}
</script>

<style scoped>

.box {
  overflow: hidden;
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 300px;
  height: 65px;
  opacity: 1;
  transition: opacity 0.3s;
  margin: 0;
}

.invisible {
  opacity: 0;
}

#quote {
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  height: min-content;
  min-width: min-content;
  white-space: nowrap;
  opacity: 0;
}

#quote.animate {
  animation: quoteAnimation linear;
}

@keyframes quoteAnimation {
  0% {
    transform: translateX(280px);
    opacity: 1;
  }
  100% {
    transform: translateX(calc(-100% - 20px));
    opacity: 1;
  }
}

</style>
