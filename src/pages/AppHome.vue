<script>
import AppHeader from '../components/AppHeader.vue';
import Slider from '../components/Slider.vue';
import AppCompetition from './AppCompetition.vue';
import AppIstruttori from './AppIstruttori.vue';
import AppSchedule from './AppSchedule.vue';
import AppSedi from './AppSedi.vue';

export default {
  name: 'AppHome',

  components: {
    AppHeader,
    AppSchedule,
    AppIstruttori,
    AppCompetition,
    AppSedi,
    Slider
  }
}
</script>

<template>
    <div>
      
        <!--HERO Principale-->
        <section >

          <div class="hero-img">
            <div class="d-flex justify-content-between align-items-center ms-3">
              <AppHeader class="header"></AppHeader>
              <img class="logo-header rounded-circle m-3" src="../assets/images/wcra-logo.png" alt="">
            </div>
           <div class="ms-intro">
              <h1>Benvenuti nella wcra</h1>
              <p>Team di Brazilian Jiu-Jitsu guidato dal Maestro Paolo Girone, 
                cintura nera terzo grado formato sotto la guida del leggendario e influente Octavio Couto.
                
              </p>
            </div>
          </div>
          
          <!--DESCRIZIONE IN HOMEPAGE-->
          <div class="container p-2 mt-5 mb-5">
            
            <div class="container-info d-flex justify-content-center">
              
              <div  class="description text-center mt-5"> 
                <h3>Dal 2005 faro del Brazilian Jiu-Jitsu in Puglia e nel sud Italia</h3>  
                    <div> praesentium sunt nihil fugit maxime  adipisiium iusto necessitatibus officia adipisci. Iste praesentium sunt nihil fugit maxime  adipisiium iusto necessitatibus officia adipisci. Iste praesentium sunt nihil fugit maxime voluptatum rerum.</div>
                    <div class="d-flex justify-content-center">
                      <img class="mestre mt-5 d-none d-md-none d-lg-block" src="../assets/images/mica.jpg" alt="">
                    </div>
              </div>
            
              <Slider  class="slider"></Slider>
           
            </div>
            
          </div>

        </section>

        <!--Corsi e orari-->
        <AppSchedule></AppSchedule>

        <!--Schede Istruttori-->
        <AppIstruttori></AppIstruttori>

        <!--Competizioni UIJJ e altre-->
        <AppCompetition></AppCompetition>

        <!--Mappa delle sedi-->
        <AppSedi></AppSedi>
         
    </div>

</template>

<style scoped lang="scss">


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

.container-info{
 
    .description{
      width: 50%;
    }

    .slider{
      width: 50%;
    }
}

.mestre{
  width:200px;
  height: 400px;
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
