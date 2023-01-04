<template>
  <div class="birthday invisible" ref="birthday">
    <div v-if="birthdayList.length !== 0" class="has-text-centered">
      <h1 class="title is-1">🎊 <span class="has-text-shadow">Happy birthday to YOUUUUU !</span></h1>
      <h3 v-for="birthday in birthdayList" :key="birthday.id" class="title is-3">
        🎉 <span class="has-text-shadow">{{ birthday.firstname }} !</span>
      </h3>
    </div>
  </div>
</template>

<script>
import confetti from "canvas-confetti";

export default {
  name: "birthdayComponent",
  data() {
    return {
      birthdayList: [],
      interval: Number,
      timeout: Number
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.fetchStudentList(), 5000)
  },
  unmounted() {
    confetti.reset()
    clearInterval(this.interval)
    clearTimeout(this.timeout)
  },
  methods: {
    fetchStudentList() {
      fetch("/api/promotion/" + this.$route.params.id + "/student", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
          .catch(err => {
            console.log(err)
          })
          .then(resp => {
            if (resp.status !== 200) {
              return Promise.reject(resp.status)
            }
            return resp
          })
          .then(resp => resp.text())
          .then((json) => {
                if (json !== "") {
                  json = JSON.parse(json)[0]['student'];
                  return [...json]
                } else return []
              }
          )
          .then((studentList) => {
            const date = new Date(Date.now())
            for (const student of studentList) {
              const birthday = new Date(student.birthday)
              if (birthday.getTime() !== 0) {
                if (date.getMonth() === birthday.getMonth() && date.getDate() === birthday.getDate()) {
                  if (this.birthdayList.length === 0) {
                    setTimeout(() => this.fireRandom(500), 500)
                    this.interval = setInterval(() => this.fireRandom(250), 600000)
                  }
                  this.birthdayList.push(student)
                  this.$refs.birthday.classList.remove("invisible")
                }
              }
            }
          })
    },
    fireRandom(count) {
      const defaults = {origin: {y: 0.55}}
      this.fire(0.25, defaults, {
        spread: 26,
        startVelocity: 55,
      }, count);
      this.fire(0.2, defaults, {
        spread: 60,
      }, count);
      this.fire(0.35, defaults, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      }, count);
      this.fire(0.1, defaults, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      }, count);
      this.fire(0.1, defaults, {
        spread: 120,
        startVelocity: 45,
      }, count);
    },
    fire(particleRatio, defaults, opts, count) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }
  }
}
</script>

<style scoped>

.birthday {
  opacity: 1;
  transition: opacity 0.3s;
}

.invisible {
  opacity: 0;
}


.has-text-shadow {
  color: whitesmoke;
  -webkit-text-stroke: 1px darkslategray;
}

</style>
