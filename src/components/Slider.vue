<script>
export default {
  name: 'AppIstruttori',

  data() {
    return {
      carousel: [
        {
          image1: '../src/assets/images/cover-orari.jpg',
          image2: '../src/assets/images/mica.jpg',
          image3: '../src/assets/images/cover-orari.jpg'
        },
        {
          image1: '../src/assets/images/mica.jpg',
          image2: '../src/assets/images/cover-orari.jpg',
          image3: '../src/assets/images/mica.jpg'
        },
        {
          image1: '../src/assets/images/cover-orari.jpg',
          image2: '../src/assets/images/mica.jpg',
          image3: '../src/assets/images/cover-orari.jpg'
        },
        {
          image1: '../src/assets/images/mica.jpg',
          image2: '../src/assets/images/cover-orari.jpg',
          image3: '../src/assets/images/mica.jpg'
        },
        {
          image1: '../src/assets/images/cover-orari.jpg',
          image2: '../src/assets/images/mica.jpg',
          image3: '../src/assets/images/cover-orari.jpg'
        },
        {
          image1: '../src/assets/images/mica.jpg',
          image2: '../src/assets/images/cover-orari.jpg',
          image3: '../src/assets/images/mica.jpg'
        },
        {
          image1: '../src/assets/images/cover-orari.jpg',
          image2: '../src/assets/images/mica.jpg',
          image3: '../src/assets/images/cover-orari.jpg'
        },
        {
          image1: '../src/assets/images/mica.jpg',
          image2: '../src/assets/images/cover-orari.jpg',
          image3: '../src/assets/images/mica.jpg'
        },
        {
          image1: '../src/assets/images/cover-orari.jpg',
          image2: '../src/assets/images/mica.jpg',
          image3: '../src/assets/images/cover-orari.jpg'
        },
        {
          image1: '../src/assets/images/mica.jpg',
          image2: '../src/assets/images/cover-orari.jpg',
          image3: '../src/assets/images/mica.jpg'
        },
        {
          image1: '../src/assets/images/cover-orari.jpg',
          image2: '../src/assets/images/mica.jpg',
          image3: '../src/assets/images/cover-orari.jpg'
        },
        {
          image1: '../src/assets/images/mica.jpg',
          image2: '../src/assets/images/cover-orari.jpg',
          image3: '../src/assets/images/mica.jpg'
        },
      ],
      activeCarousel: 0,
      animate: false,
    };
  },

  methods: {
    //ai click cambio carosello + animazione.
    nextCarousel() {
      this.animate = false; 
      setTimeout(() => {
        this.activeCarousel = (this.activeCarousel + 1);
        if (this.activeCarousel === this.carousel.length) {
        this.activeCarousel = 0;
      }
        this.animate = true; 
      }, 20); 
    },

    prevCarousel() {
      this.animate = false; 
      setTimeout(() => {
        this.activeCarousel = (this.activeCarousel - 1);
       if (this.activeCarousel < 0) {
        this.activeCarousel = this.carousel.length - 1;
      }
        this.animate = true; 
      }, 20); 
    }
  },
};
</script>

<template>

    <div class="container p-2"> 
      <div class="fade-in delay- d-flex gap-1 justify-content-between align-items-center">

        <button @click="prevCarousel()"><-</button>
        <!--Carosello-->
        <img :class="{'fade-in': animate, 'delay-1': animate}" :src="carousel[activeCarousel].image1" alt="">
        <img :class="{'fade-in': animate, 'delay-2': animate}" :src="carousel[activeCarousel].image2" alt="">
        <img :class="{'fade-in': animate, 'delay-3': animate}" :src="carousel[activeCarousel].image3" alt="">

        <button @click="nextCarousel()"> -> </button>

      </div>
    </div>
 
</template>

<style scoped lang="scss">
img { width: 400px;}


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
