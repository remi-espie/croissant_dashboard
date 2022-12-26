<template>
  <div class="has-text-centered courses">
    <p class="timeday">{{ course.start.toLocaleDateString('en-GB') }}</p>
    <hr>
    <div class="hours">
      <p class="hourstamp" v-for="(hour, index) in hours" :key="hour"
         :class="{timestamp: hour.getTime() === course.start.getTime() || hour.getTime() === course.end.getTime() }"
         :style="{marginTop: (hour - hours[index-1])/60/60/1000 + 'em' }"
      > {{
          hour.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
          })
        }}</p>
    </div>
    <div class="course" ref="course">
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
      hours: []
    }
  },
  mounted() {
    this.timeBetween()
  },
  methods: {
    timeBetween() {
      const start = new Date(this.course.start)
      start.setMinutes(0)
      this.hours.push(start)
      while (this.hours.at(this.hours.length - 1) < this.course.end) {
        this.hours.push(new Date(this.hours[this.hours.length - 1].getTime() + 60 * 60 * 1000))
      }
      this.hours.push(this.course.start)
      this.hours.push(this.course.end)

      this.hours.sort((a, b) => {
        return a - b
      })

      if (this.hours[0].getTime() === this.course.start.getTime()) this.hours.shift()
      if (this.hours[this.hours.length - 1].getTime() === this.hours[this.hours.length - 2].getTime()) this.hours.pop()

      this.$refs.course.style.height = (this.hours[this.hours.length - 1] - this.hours[0]) / 60 / 60 / 1000 * 4 + 2 + "em";

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
  background-color: white;
  padding-right: 10px;
  text-align: start !important;
  left: 5px;
  overflow: hidden;
  width: 15vw;
}

.hourstamp:after {
  content: "";
  display: inline-block;
  height: 0.7em;
  vertical-align: bottom;
  width: 100%;
  margin-right: -100%;
  margin-left: 10px;
}

.hourstamp:after {
  border-top: 1px solid lightgray;
}

.timestamp:after {
  border-top: 1px solid black;
}

.course {
  margin-left: 3em;
}

.courses .subtitle {
  margin-bottom: 0;
}

.courses hr {
  margin: 0;
}

</style>