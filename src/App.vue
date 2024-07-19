<script>
import AnimatedSection from './components/AnimatedSection.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AnimatedSection,
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AnimatedSection>
    <AppHeader class="header"></AppHeader>
    <router-view class="fade-in delay"></router-view>
    <AppFooter></AppFooter>
  </AnimatedSection>
</template>

<style lang="scss">
@use './src/assets/styles/generic.scss' as *;
@use './src/assets/styles/partials/animations.scss' as *;


.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
}

</style>
