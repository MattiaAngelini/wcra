<script>
export default {
  name: 'Gallery',

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
    // ai click cambio carosello + animazione.
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
  <section class="mt-5 pb-5 mb-5">
    <div class="d-flex justify-content-center">
      <div>
        <span class="title-section">GALLERY</span>
        <div class="d-flex">
          <div class="container-belts">
            <div class="belt1"></div>
            <div class="belt2"></div>
            <div class="belt3"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="ms-container fade-in delay">
      <!-- Carosello immagini -->
      <div class="p-1 d-flex justify-content-center">
        <div class="d-flex align-items-center">
          <i @click="prevCarousel()" class="fa-solid fa-caret-left p-3"></i>
        </div>

        <div class="d-md-flex">
          <div><img class="mt-4" :class="{'fade-in': animate, 'delay-1': animate}" :srcset="carousel[activeCarousel].image1" alt=""></div>
          <div><img class="mt-4" :class="{'fade-in': animate, 'delay-2': animate}" :srcset="carousel[activeCarousel].image2" alt=""></div>
          <div><img class="mt-4" :class="{'fade-in': animate, 'delay-3': animate}" :srcset="carousel[activeCarousel].image3" alt=""></div>
        </div>

        <div class="d-flex align-items-center">
          <i @click="nextCarousel()" class="fa-solid fa-caret-right p-3"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use './src/assets/styles/partials/variables.scss' as *;
@use './src/assets/styles/partials/animations.scss' as *;



section {
  background-color: $secondary-color;
  border: 14px solid black;
}

.ms-container {
  img {
    
    box-shadow: 3px 6px 7px rgba(0, 0, 0, 1);
    width: 100%;
    max-width: 550px;
  }

  i {
    
    cursor: pointer;
  }
}

</style>
