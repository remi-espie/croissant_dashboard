<template>
  <div class="has-text-centered schedule"
       :style="{height: this.hours ? (this.hours[this.hours.length - 1] - this.hours[0]) / 60 / 60 / 1000 * 4 + 4.5 + 'em' : '0em'}"
  >
    <p class="timeday">{{ course.start.toLocaleDateString('en-GB') }}</p>
    <hr>
    <div class="hours">
      <p v-for="hour in courseHours" :key="hour"
         class="hourstamp timestamp" :style="{ marginTop: (hour - hours[0])/60/60/1000 * 4.5 + 'em' }">
        {{
          hour.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
          })
        }}
      </p>
      <p class="hourstamp timestamp hour"
         :style="{ marginTop: (today - hours[0])/60/60/1000 * 4.5 + 'em' }" v-if="today >= hours[0]">
        {{
          today.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
          })
        }}
      </p>
      <p class="hourstamp" v-for="(hour, index) in hours" :key="hour"
         :style="{marginTop: hours[index-1] ? '3em' : '0em', visibility: hour.getTime() === courseHours[0].getTime() || hour.getTime() === courseHours[1].getTime() ? 'hidden': ''}"
      >
        {{
          hour.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
          })
        }}</p>
    </div>
    <div class="course"
         :style="{marginTop: 'calc(' + (courseHours[0] - hours[0])/60/60/1000 * 4.5 + 'em + 14px)', height: (courseHours[1] - courseHours[0])/60/60/1000 * 4.5  + 'em'}"
    >
      <h6 class="title is-6">{{ course.summary }}</h6>
      <h6 class="subtitle is-6" v-for="description in course.description" :key="description">{{ description }}</h6>
      <h6 class="subtitle is-6">{{ course.location }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "courseComponent",
  props: {
    course: {}
  },
  data() {
    return {
      hours: [],
      courseHours: [],
      today: new Date(Date.now()),
      interval: Number
    }
  },
  mounted() {
    this.timeBetween()
    this.interval = setInterval(() => {
      this.today = new Date(Date.now())
    }, 60000)
  },
  unmounted() {
    if (this.interval) clearInterval(this.interval)
  },
  methods: {
    timeBetween() {
      const start = new Date(this.course.start)
      start.setMinutes(0)
      this.hours.push(start)
      while (this.hours.at(this.hours.length - 1) < this.course.end) {
        this.hours.push(new Date(this.hours[this.hours.length - 1].getTime() + 60 * 60 * 1000))
      }
      this.courseHours.push(this.course.start)
      this.courseHours.push(this.course.end)

      this.hours.sort((a, b) => {
        return a - b
      })
    }
  }
}
</script>

<style scoped>

.hours {
  position: absolute;
  z-index: -1;
}

.hourstamp {
  position: relative;
  text-align: start !important;
  left: 0.5em;
  overflow: hidden;
  width: calc(20vw - 1em);
}

.hourstamp:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin-right: -100%;
  margin-left: 0.5em;
  border-top: 0.1em solid lightgray;
}

.timestamp {
  position: absolute;
}

.timestamp:after {
  border-top: 0.2em solid black;
}

.hour {
  background-color: #821982;
  color: red;
}

.hour:after {
  border-top: 0.2em solid red;
}

.course {
  margin-left: 3.35em;
  background-color: rgba(255, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 0.5em;
}

.schedule .subtitle {
  margin-bottom: 0;
}

.schedule hr {
  margin: 0;
}

.schedule {
  width: 20vw;
}

</style>
