<script>
import AnimatedSection from '../components/AnimatedSection.vue';
import Gallery from '../components/Gallery.vue';
import AppChiSiamo from './AppChiSiamo.vue';
import AppIstruttori from './AppIstruttori.vue';
import AppSchedule from './AppSchedule.vue';
import AppSedi from './AppSedi.vue';
import HeroImage from '../components/HeroImage.vue';

export default {
  name: 'AppHome',

  components: {
    AnimatedSection,
    AppSchedule,
    AppIstruttori,
    AppSedi,
    Gallery,
    AppChiSiamo,
    HeroImage
  }
};
</script>

<template>
  <main>
    <AnimatedSection>
      <HeroImage></HeroImage>
    </AnimatedSection>
   
    <!-- Presentazione video -->
    <AnimatedSection>
      <AppChiSiamo></AppChiSiamo>
    </AnimatedSection>
    
    <AnimatedSection>
      <Gallery></Gallery>
    </AnimatedSection>
    
    <!-- Corsi e orari -->
    <AnimatedSection>
      <AppSchedule></AppSchedule> 
    </AnimatedSection>

    <!-- Schede Istruttori -->
    <AnimatedSection>
      <AppIstruttori></AppIstruttori>
    </AnimatedSection>

    <!-- Mappa delle sedi -->
    <AnimatedSection>
      <AppSedi></AppSedi>
    </AnimatedSection>
  </main>
</template>

<style scoped lang="scss">
@use './src/assets/styles/partials/mediaqueries.scss' as *;


  video {
    border-radius: 10px;
  }

  .logo-header {
    right: 0;
    width: 80px;
  }

</style>
