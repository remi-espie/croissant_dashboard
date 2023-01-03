<template>
  <div class="box" :key="this.scheduleExists"
       :style="{height : this.$refs.schedule ? this.$refs.schedule[1 - this.translate / 20 - 1].clientHeight + 'px' : 'min-content'}">
    <div v-for="course in this.courses" :key="course.uid" class="has-text-centered courses" ref="schedule"
         :style="{height: 'min-content', transform: 'translateX(' + this.translate + 'vw)'}">
      <course-component :course="course"></course-component>
    </div>

  </div>
</template>

<script>
import ical from 'ical'
import CourseComponent from "@/components/courseComponent.vue";

export default {
  name: "scheduleComponent",
  components: {CourseComponent},
  props: {
    url_schedule: String
  },
  data() {
    return {
      scheduleExists: false,
      courses: [],
      translate: 0,
      test: 0,
      interval: Number,
      globalInterval: Number
    }
  },
  mounted() {
    this.fetchCalendar()
    this.globalInterval = setInterval(() => {
      this.fetchCalendar()
    }, 3600000)
  },
  unmounted() {
    if (this.interval) clearInterval(this.interval)
    if (this.globalInterval()) clearInterval(this.globalInterval())
  },
  methods: {
    fetchCalendar() {
      this.courses = []
      fetch(this.url_schedule, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'text/calendar'
        },
      })
          .catch(err => {
            console.log(err)
            this.scheduleExists = false
          })
          .then(resp => {
            console.log(resp)
            if (resp.status !== 200) {
              this.scheduleExists = false
              return Promise.reject(resp.status)
            }
            return resp
          })
          .then(resp => resp.text())
          .then((resp) => {
                this.parseCalendar(resp)
                this.scheduleExists = true
              }
          )
    },

    parseCalendar(calendar) {
      const schedule = ical.parseICS(calendar)
      const today = new Date(Date.now())
      let nextCourse = []
      for (const k in schedule) {
        const event = schedule[k]
        if (event.type === 'VEVENT') {
          if (event.start >= today) {
            nextCourse.push(event)
          }
        }
      }
      nextCourse = nextCourse.sort((a, b) => {
        return a.start - b.start
      })
      nextCourse = nextCourse.slice(0, 5)

      for (const nextCourseElement of nextCourse) {
        let description = nextCourseElement.description.split("\n")
        for (const [index, value] of description.entries()) {
          if (value === "") delete description[index]
          else if (value === "A valider") delete description[index]
        }
        description = description.flat()
        description.pop()
        nextCourseElement.description = description
      }

      this.courses = nextCourse

      setTimeout(() => this.scheduleExists = true, 10)

      this.interval = setInterval(this.animate, 10000)
    },

    animate() {
      if (this.translate <= -20 * (this.courses.length - 1)) this.translate = 0;
      else this.translate -= 20
    },
  }
}
</script>

<style scoped>

.box {
  width: 20vw;
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 0;
  overflow: hidden;
  display: flex;
  transition: height 0.5s;
}

.box * {
  transition: all 0.5s ease-in-out;
}
</style>
