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

    <div class=""> 

      <div class="ms-container fade-in delay mt-4">

        <!--Carosello immagini-->
        <div class="p-1 d-flex">

          <div class="d-flex align-items-center ">
          <i @click="prevCarousel()" class="fa-solid fa-caret-left p-3"></i>
          </div>
            
          <div class="d-flex gap-3">
            <img class="img-fluid"  :class="{'fade-in': animate, 'delay-1': animate}" :srcset="carousel[activeCarousel].image1" alt="">
            <img  :class="{'fade-in': animate, 'delay-2': animate}" :srcset="carousel[activeCarousel].image2" alt="">
            <img  :class="{'fade-in': animate, 'delay-3': animate}" :srcset="carousel[activeCarousel].image3" alt="">
          </div>

          <div class="d-flex align-items-center">
            <i @click="nextCarousel()" class="fa-solid fa-caret-right p-3"></i>
          </div>
      
        </div>
   
     
      </div>
    </div>
 
</template>

<style scoped lang="scss">

.ms-container{

    img { 
    border-radius: 10px;
    box-shadow: 3px 6px 7px rgba(0, 0, 0, 1);
  }

  i{
    font-size: 1.4rem;
    cursor: pointer;
   
  }
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

// MEDIA QUERIES

// Very small devices (e.g., smartphones with screens smaller than 340px)
@media (max-width: 340px) {
    .ms-container {
        img {
            width: 100px;
        }
      
    }
}

// Smartphone
@media (min-width: 341px) and (max-width: 576px) {
    .ms-container {
      padding: 10px;
        img {
            width: 60px;
        }
    }
}

// Tablet
@media (min-width: 577px) and (max-width: 768px) {
    .ms-container {
        img {
            width: 160px;
        }
    }
}

// Small laptop
@media (min-width: 769px) and (max-width: 992px) {
    .ms-container {
        img {
            width: 200px;
        }
    }
}

// Large laptop and desktop
@media (min-width: 993px) and (max-width: 1200px) {
    .ms-container {
        img {
            width: 300px;
        }
    }
}

// Extra large screens
@media (min-width: 1201px) {
    .ms-container {
        img {
            width: 400px;
        }
    }
}

</style>
