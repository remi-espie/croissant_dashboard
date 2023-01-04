<template>
  <div class="box m-0 is-flex is-flex-direction-column is-justify-content-space-between p-2"
       v-if="scoreboardLocalExists || scoreboardGlobalExists">
    <div class="is-flex is-flex-direction-row is-justify-content-space-around">
      <span v-if="scoreboardLocalExists" class="has-text-weight-bold">Local scoreboard :</span>
      <span v-if="scoreboardGlobalExists" class="has-text-weight-bold">Global scoreboard :</span>
    </div>
    <div class="is-flex is-flex-direction-row is-justify-content-space-evenly">
      <div class="is-flex is-flex-direction-row is-justify-content-space-around scoreboard verticalAlign"
           v-if="scoreboardLocalExists">
        <div v-for="(scored, index) in scoreboardLocal" :key="scored.id">
          <span v-if="index === 0">🥇</span>
          <span v-if="index === 1">🥈</span>
          <span v-if="index === 2">🥉</span>
          {{ scored.firstname }} : {{ scored.croissanted.length }}
        </div>
      </div>
      <span v-if="scoreboardLocalExists && scoreboardGlobalExists" class="verticalAlign">|</span>
      <div class="is-flex is-flex-direction-row is-justify-content-space-around scoreboard verticalAlign"
           v-if="scoreboardGlobalExists">
        <div v-for="(scored, index) in scoreboardGlobal" :key="scored.id">
          <span v-if="index === 0">🥇</span>
          <span v-if="index === 1">🥈</span>
          <span v-if="index === 2">🥉</span>
          {{ scored.student.firstname }} : {{ scored._count.studentId }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scoreboardComponent",
  data() {
    return {
      scoreboardLocalExists: false,
      scoreboardGlobalExists: false,
      scoreboardGlobal: [],
      scoreboardLocal: [],
      intervalLocal: Number,
      intervalGlobal: Number
    }
  },
  props: {
    id: String
  },
  mounted() {
    this.fetchScoreboard("/api/promotion/" + this.id + "/croissanted/all", this.parseScoreboardLocal)
    this.fetchScoreboard("/api/croissanted/scoreboard", this.parseScoreboardGlobal)

    this.intervalLocal = setInterval(() => this.fetchScoreboard("/api/promotion/" + this.id + "/croissanted/all", this.parseScoreboardLocal), 10000)
    this.intervalGlobal = setInterval(() =>  this.fetchScoreboard("/api/croissanted/scoreboard", this.parseScoreboardGlobal), 10000)
  },
  unmounted() {
    clearInterval(this.intervalLocal)
    clearInterval(this.intervalGlobal)
  },
  methods: {
    fetchScoreboard(url, callback) {
      fetch(url, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
          .catch(err => {
            console.log(err)
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
            callback(json)
          })
    },

    parseScoreboardLocal(json) {
      json = json[0]['student']
      for (const [index, jsonElement] of json.entries()) {
        if (jsonElement.croissanted.length === 0) delete json[index]
      }
      json = json.flat()
      json.sort((a, b) => {
        return b.croissanted.length - a.croissanted.length
      })

      json.slice(0, 3)

      if (json.length !== 0) {
        this.scoreboardLocal = json
        this.scoreboardLocalExists = true
      }
      else this.scoreboardLocalExists = false
    },

    async parseScoreboardGlobal(json) {
      let fetches = []
      json = json.slice(0, 3)
      for (const jsonElement of json) {
        fetches.push("/api/student/" + jsonElement.studentId)
      }

      await Promise.all(fetches.map(url => fetch(url)))
          .catch(err => console.log(err))
          .then(responses => Promise.all(responses.map(res => res.text())))
          .then(resp => {
            resp = resp.slice(0, 3)
            for (const [index, jsonElement] of resp.entries()) {
              json[index]['student'] = JSON.parse(jsonElement)
            }
          })

      if (json.length !== 0) {
        this.scoreboardGlobal = json
        this.scoreboardGlobalExists = true
      }
      else this.scoreboardGlobalExists = false
    },

  }
}
</script>

<style scoped>

.box {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 50vw;
  height: 65px;
}

.scoreboard {
  width: 45%;
}

.verticalAlign {
  height: min-content;
  margin: auto 0;
}

</style>
