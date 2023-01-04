<template>

  <router-link :to="'/dashboard/' + name">
    <div class="card m-4 p-4">
        <p class="card-header-title is-centered">{{name}}</p>
      <div class="card-image">
        <figure class="image is-16by9 ">
        <img class="is-128x128" :src="src" :alt="'Class picture of ' + name">
        </figure>
      </div>
      <div class="card-footer">
        <p class="m-auto">{{year}}</p>
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
    year: Number,
    src: String
  }
}
</script>

<style scoped>

</style>