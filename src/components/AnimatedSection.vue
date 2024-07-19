<script>
export default {
  name: 'AnimatedSection',
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    });

    observer.observe(this.$refs.section);
  },
};
</script>

<template>
  <section :class="{ visible: isVisible }" ref="section">
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

section.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
