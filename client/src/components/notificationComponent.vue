<template>
  <div :class="(sentMessage !== '' ? 'visible' : '') + ' invisible container is-flex is-justify-content-space-evenly'">
    <div :class="(sent === 201 || sent === 200 ? 'is-success' : 'is-danger') + ' notification'"> {{ sentMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "notificationComponent",
  props: {
    sent: Number,
    sentMessage: String
  },
}
</script>

<style scoped>
.invisible {
  opacity: 0;
  transform: translateY(1em);
  transition: all 0.25s;
}

.visible {
  opacity: 1;
  transition: all 0.25s;
}
</style>
