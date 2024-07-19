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

.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
}

// ANIMATION SLIDER
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 2s forwards;
}

@for $i from 0 through 20 {
  .delay-#{$i} {
    animation-delay: #{$i * 0.1}s;
  }
}
</style>
