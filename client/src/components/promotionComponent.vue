<template>

  <router-link :to="'/dashboard/' + id">
    <div class="card">
      <div class="content">
        <p>{{name}}</p>
        <p>{{year}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "promotionComponent",
  props: {
    id: String,
    name:String,
    year: Number
  }
}
</script>

<style scoped>

</style>