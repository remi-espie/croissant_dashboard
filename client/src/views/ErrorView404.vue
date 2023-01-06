<template>
  <header>
    <div class="is-center is-block-mobile is-flex-tablet is-flex-direction-row is-justify-content-center">
      <div class="m-5 is-flex is-align-items-center is-justify-content-center">
        <img alt="Croissant logo" class="image is-128x128" src="@/assets/icon.png"/>
      </div>
      <h1 class="title is-1 is-align-items-center is-justify-content-center is-flex m-5 has-text-centered">Croissant Dashboard !</h1>
    </div>
  </header>
  <main class="center is-fullwidth is-flex is-flex-direction-column m-auto">


    <h2 class="title is-2 has-text-centered">Error 404 : Page not found !</h2>

    <h3 class="title is-3 has-text-centered">
      <router-link to="/">Home</router-link>
    </h3>
  </main>
</template>

<script>
export default {
  name: "ErrorView404"
}
</script>

<style scoped>

</style>
