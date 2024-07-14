<script>
export default {
  name: 'AppHeader',
}
</script>

<template>
  
  <section class="d-flex gap-5">
    <router-link :to="{ name: 'home' }">HOME</router-link>
    <router-link :to="{ name: 'schedule' }">CORSI E ORARI</router-link>  
    <router-link :to="{ name: 'istruttori' }">ISTRUTTORI</router-link>
    <router-link :to="{ name: 'competition' }">COMPETITION</router-link>
    <router-link :to="{ name: 'sedi' }">SEDI</router-link>
  </section>

</template>

<style scoped lang="scss">

  a{
    color: white;
    text-decoration: none;
  }

</style>