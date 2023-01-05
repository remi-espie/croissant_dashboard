<template>
  <div class="container is-flex is-justify-content-center is-flex-direction-column">

    <h3 class="title is-3 mt-5 mb-5 ml-auto mr-auto">Here are the stats !</h3>

    <div class="columns">

      <div class="card column is-one-third m-5">
        <div class="card-header">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="@/assets/icon.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <h4 class="title is-4"> How many time were you croissanted ? </h4>
            </div>
          </div>
        </div>
        <div class="card-content has-text-centered">
          <div v-if="this.scoreboard.length>0" class="is-flex is-flex-direction-column">
          <span>
            {{ this.scoreboard.length }} times in total ! 🏆
          </span>

            <span v-if="this.scoreboardLastMonth.length>0">
          and {{ this.scoreboardLastMonth.length }} times in the last month ! 🏆
        </span>
            <span v-else> and never last month ! 🥐</span>
          </div>
          <span v-else>You were NEVER croissanted ! 🥐</span>
        </div>
      </div>

      <div class="card column is-one-third m-5">
        <div class="card-header">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="@/assets/icon.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <h4 class="title is-4">How is your promotion doing ? </h4>
            </div>
          </div>
        </div>
        <div class="card-content has-text-centered">
          <div v-if="this.scoreboardPromotion.length>0" class="is-flex is-flex-direction-column">
          <span>
            {{ this.scoreboardPromotion.length }} people were once croissanted ! 🏆
          </span>

            <div class="mt-2" v-for="(croissanted, index) in this.scoreboardPromotion" :key="croissanted.id">

              <span v-if="index === 0">🥇</span>
              <span v-if="index === 1">🥈</span>
              <span v-if="index === 2">🥉</span>
              <span>{{ croissanted.firstname }} was croissanted {{ croissanted.croissanted.length }} times !</span>
            </div>
          </div>
          <span v-else>No one was croissanted here... 🥐</span>
        </div>
      </div>

      <div class="card column is-one-third m-5">
        <div class="card-header">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="@/assets/icon.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <h4 class="title is-4">What about the global scoreboard ? </h4>
            </div>
          </div>
        </div>
        <div class="card-content has-text-centered">
          <div v-if="this.scoreboardGlobal.length>0" class="is-flex is-flex-direction-column">
          <span>
            {{ this.scoreboardGlobal.length }} people were once croissanted ! 🏆
          </span>

            <div class="mt-2" v-for="(croissanted, index) in this.scoreboardGlobal" :key="croissanted.id">

              <span v-if="index === 0">🥇</span>
              <span v-if="index === 1">🥈</span>
              <span v-if="index === 2">🥉</span>
              <span>{{ croissanted.firstname }} was croissanted {{ croissanted._count['studentId'] }} times !</span>
            </div>
          </div>
          <span v-else>No one was croissanted here... 🥐</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "statsComponent",
  props: {
    studentId: String,
    promotionId: String
  },
  data() {
    return {
      scoreboard: [],
      scoreboardLastMonth: [],
      scoreboardPromotion: [],
      scoreboardGlobal: []
    }
  },
  mounted() {
    this.fetchScore()
    this.fetchScoreboardPromotion()
    this.fetchScoreboardGlobal()
  },
  methods: {
    fetchScore() {
      fetch("/api/croissanted/" + this.studentId + "/student",
          {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          })
          .catch(err => {
            console.error(err)
          })
          .then(resp => resp.json())
          .then(json => {
            this.scoreboard = json

            for (const score of json) {
              if (score.date > new Date(new Date().setMonth(new Date().getMonth() - 1))) {
                this.scoreboardLastMonth.push(score)
              }
            }
          })
    },

    fetchScoreboardPromotion() {
      fetch("/api/promotion/" + this.promotionId + "/croissanted",
          {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          })
          .catch(err => {
            console.error(err)
          })
          .then(resp => resp.json())
          .then(json => {
            this.scoreboardPromotion = json[0]['student']
            for (const [index, student] of this.scoreboardPromotion.entries()) {
              if (student.croissanted.length === 0) delete this.scoreboardPromotion[index]
            }
            this.scoreboardPromotion = this.scoreboardPromotion.flat()
            this.scoreboardPromotion = this.scoreboardPromotion.sort((a, b) => {
              return b.croissanted.length - a.croissanted.length
            })

            this.scoreboardPromotion = this.scoreboardPromotion.slice(0, 3)
          })

    },

    fetchScoreboardGlobal() {
      fetch("/api/croissanted/scoreboard",
          {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          })
          .catch(err => {
            console.error(err)
          })
          .then(resp => resp.json())
          .then(json => {
            const fetches = []
            this.scoreboardGlobal = json
            for (const student of this.scoreboardGlobal) {
              fetches.push("/api/student/" + student.studentId)
            }
            Promise.all(fetches.map(url =>
            fetch(url, {
                  mode: 'cors',
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                  },
                })
                .catch(err => {
                  console.error(err)
                })
                .then(resp => resp.json())
                .then(json => {
                  for (const student of this.scoreboardGlobal) {
                    if (student.studentId === json.id) {
                      student.firstname = json.firstname
                    }
                  }
                })
            ))

            this.scoreboardGlobal = this.scoreboardGlobal.slice(0, 3)
          })
    }
  },
}
</script>

<style scoped>

.card {
  width: 30%;
}
</style>
