<script>
import AnimatedSection from '../components/AnimatedSection.vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import Slider from '../components/Slider.vue';
import AppChiSiamo from './AppChiSiamo.vue';
import AppIstruttori from './AppIstruttori.vue';
import AppSchedule from './AppSchedule.vue';
import AppSedi from './AppSedi.vue';


export default {
  name: 'AppHome',

  components: {
    AnimatedSection,
    AppHeader,
    AppSchedule,
    AppIstruttori,
    AppSedi,
    Slider,
    AppFooter,
    AppChiSiamo,
  }
}
</script>

<template>
  
  <main>

     <!--HERO Principale-->
    <section>
      <AppHeader class="header"></AppHeader> 
        <div class="hero-img">

          <div class="ms-intro">
            <h1>Benvenuti nella wcra</h1>
            <p>Team di Brazilian Jiu-Jitsu guidato dal Maestro Paolo Girone, 
              cintura nera terzo grado formato sotto la guida del leggendario e influente Octavio Couto
            </p>
          </div>
        </div>
    </section>


    <!--Presentazione video-->

    <AnimatedSection>
     <AppChiSiamo></AppChiSiamo>
    </AnimatedSection>

    <!--Corsi e orari-->
    <AnimatedSection>
      <AppSchedule></AppSchedule> 
    </AnimatedSection>

    <!--Schede Istruttori-->
    <AnimatedSection>
     <AppIstruttori></AppIstruttori>
    </AnimatedSection>

    <!--Mappa delle sedi-->
    <AnimatedSection>
      <AppSedi></AppSedi>
    </AnimatedSection>

  </main>
       
        
        <AnimatedSection>
          <AppFooter></AppFooter>
        </AnimatedSection>
        
</template>

<style scoped lang="scss">



video{
  border-radius: 10px;
}

.logo-header{
  right:0;
  width: 80px;
}

.hero-img {
  height: 100vh;
  background-image: url('../assets/images/mica.jpg');
  background-size: cover;
  background-position:center;
  box-shadow: inset 0 50px 300px rgba(0, 0, 0, 1);
  
}

.ms-intro {
  color: white;
  width: 50%;  
  position: absolute;
  bottom: 20%;
  right: 0;
  z-index: 201;
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
@media (min-width: 200px) and (max-width: 320px) {
  .ms-intro{
    font-size: 12px;
  }

}

// Smartphone
@media (min-width: 321px) and (max-width: 400px) {
  .description{
    font-size: 12px;
  }

  .ms-intro{
    font-size:12px
  }
  .logo-header{
  right:0;
  width: 50px;
}

}

// Tablet
@media (min-width: 401px) and (max-width: 768px) {
  .description{
    font-size: 16px;
  }

  .ms-intro{
    font-size:14px
  }

}

// Small laptop
@media (min-width: 769px) and (max-width: 992px) {
  .description{
    font-size: 22px;
  }
}

// Large laptop and desktop
@media (min-width: 993px) and (max-width: 1200px) {

}

// Extra large screens
@media (min-width: 1201px) {
 
}


</style>
