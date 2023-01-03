<template>
  <div id="container">
    <h2 class="title is-1 has-text-shadow" v-if="!croissantedExists">No one was croissanted recently...</h2>
    <div v-else>
      <h2 class="title is-1">🥐 <span class="has-text-shadow"> Those who will bring croissant ! </span></h2>
      <h4 class="title is-3 has-text-shadow" v-for="croissant in croissanted" :key="croissant.id">
        {{ croissant.firstname }} x {{ croissant.croissanted.length }} !
      </h4>
    </div>
  </div>
</template>

<script>
import confetti from "canvas-confetti";

export default {
  name: "croissantedComponent",
  data() {
    return {
      croissantedExists: false,
      croissanted: [],
      lastCroissanted: [],
      interval: Number,
      intervalConfetti: Number
    }
  },
  props: {
    id: String
  },
  mounted() {
    this.fetchCroissanted()
    this.interval = setInterval(this.fetchCroissanted, 10000)
  },
  unmounted() {
    confetti.reset()
    clearInterval(this.interval)
    clearInterval(this.intervalConfetti)
  },
  methods: {
    fetchCroissanted() {
      fetch("https://cluster-2022-2.dopolytech.fr/api/promotion/" + this.id + "/croissanted", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
          .catch(err => {
            console.log(err)
            this.croissantedExists = false
          })
          .then(resp => {
            if (resp.status !== 200) {
              this.croissantedExists = false
              return Promise.reject(resp.status)
            }
            return resp
          })
          .then(resp => resp.text())
          .then((resp) => {
                resp = JSON.parse(resp)[0]['student']
                for (const [index, respElement] of resp.entries()) {
                  if (respElement.croissanted.length === 0) delete resp[index]
                }
                resp = resp.flat()
                resp.sort((a, b) => {
                  return b.croissanted.length - a.croissanted.length
                })

                if (resp.length !== 0) {
                  if (this.croissanted !== this.lastCroissanted) {
                    this.fireConfetti()
                  }
                  this.croissanted = resp
                  this.lastCroissanted = this.croissanted
                  this.croissantedExists = true
                }
              }
          )
    },

    fireConfetti() {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {startVelocity: 30, spread: 360, ticks: 60, zIndex: 0};

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      this.intervalConfetti = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(this.intervalConfetti);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: {x: randomInRange(0.1, 0.3), y: Math.random() - 0.2}
        }));
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: {x: randomInRange(0.7, 0.9), y: Math.random() - 0.2}
        }));
      }, 250);
    }
  }
}
</script>

<style scoped>

#container {
  position: relative;
  left: 2.5%;
  top: 2.5%;
  width: 100%;
}

.has-text-shadow {
  color: whitesmoke;
  -webkit-text-stroke: 1px darkslategray;
}

</style>
