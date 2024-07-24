<script>
export default {
  name: 'Gallery',

  data() {
    return {
      carousel: [
        {
          image1: '../src/assets/images/cover-orari.jpg',
          image2: '../src/assets/images/mica.jpg',
          image3: '../src/assets/images/cover-orari.jpg',
          id: '1'
        },
        {
          image1: '../src/assets/images/mica.jpg',
          image2: '../src/assets/images/cover-orari.jpg',
          image3: '../src/assets/images/mica.jpg',
          id:2
        },
        {
          image1: '../src/assets/images/cover-orari.jpg',
          image2: '../src/assets/images/mica.jpg',
          image3: '../src/assets/images/cover-orari.jpg',
          id:3
        },
        {
          image1: '../src/assets/images/mica.jpg',
          image2: '../src/assets/images/cover-orari.jpg',
          image3: '../src/assets/images/mica.jpg',
          id: 4
        },
        {
          image1: '../src/assets/images/cover-orari.jpg',
          image2: '../src/assets/images/mica.jpg',
          image3: '../src/assets/images/cover-orari.jpg',
          id:5
        },
        {
          image1: '../src/assets/images/mica.jpg',
          image2: '../src/assets/images/cover-orari.jpg',
          image3: '../src/assets/images/mica.jpg',
          id:6
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
    },
   
  },
};
</script>

<template>
  <section class="pb-5">
    <div class="d-flex justify-content-center mb-4 mt-4">
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
      <div class="d-flex justify-content-center">
        
        <div>
          <div class="d-md-flex">
            <div><img :class="{'slide-in-right': animate, 'slide-delay-1': animate}" :srcset="carousel[activeCarousel].image1" alt=""></div>
            <div><img :class="{'slide-in-right': animate, 'slide-delay-2': animate}" :srcset="carousel[activeCarousel].image2" alt=""></div>
            <div><img :class="{'slide-in-right': animate, 'slide-delay-3': animate}" :srcset="carousel[activeCarousel].image3" alt=""></div>
          </div>
           
          <div class="d-flex justify-content-center align-items-center mt-4 gap-3">
              <div class="d-flex">
                <i @click="prevCarousel()" class="fa-solid fa-caret-left"></i>
             </div>

                <div class="ms-pagination" v-for="(item, index) in carousel" :class="{'circle': true, 'active': index === activeCarousel}">
                    <div>{{ item.id }}</div>
                </div>

                <div class="d-flex">
                <i @click="nextCarousel()" class="fa-solid fa-caret-right"></i>
              </div>
          
          </div>
        </div>
    
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use './src/assets/styles/partials/variables.scss' as *;
@use './src/assets/styles/partials/animations.scss' as *;


.ms-pagination{
  font-weight: 600;
  
}

.active {
 background-color: rgb(132, 20, 20);
 color: white;
 padding: 0px 6px 0 6px;
 font-weight: 700;
}

section {
  background-color: $secondary-color;
  border: 4px solid black;
  height: 100%;
}

.ms-container {
  img {
    width: 100%;
    height: 500px;
    max-width: 100%;
  }

  i {
    font-size: 30px;
    cursor: pointer;
  }
}


// Very small devices (e.g., smartphones with screens smaller than 340px)
@media (max-width: 320px) {
  .ms-container {
    img {
      height: 180px;
    }
  }
}

// Smartphone
@media (min-width: 321px) and (max-width: 400px) {
  .ms-container {
    img {
      height: 200px;
    }
  }
}

// Small tablets and large smartphones (portrait mode)
@media (min-width: 401px) and (max-width: 600px) {
  .ms-container {
    img {
      height: 300px;
    }
  }
}

// Tablets (portrait mode)
@media (min-width: 601px) and (max-width: 768px) {
  .ms-container {
    img {
      height: 350px;
    }
  }
}

// Small laptops and tablets (landscape mode)
@media (min-width: 769px) and (max-width: 1024px) {
  .ms-container {
    img {
      height: 450px;
    }
  }
}

// Large laptops and desktops
@media (min-width: 1025px) {
  .ms-container {
    img {
      height: 500px;
    }
  }
}

</style>
