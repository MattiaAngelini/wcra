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
      <!--link header su img principale-->
        <AppHeader class="header"></AppHeader>
  
        <!--HERO Principale-->
        <section >
            <div class="hero-img">
                <img class="" src="../assets/images/mica.jpg" alt="MicaGalvao">
            </div>
        
          <div class="ms-intro">
            <h1>Benvenuti nella wcra</h1>

            <p>Team di Brazilian Jiu-Jitsu guidato dal Maestro Paolo Girone, 
              cintura nera terzo grado formato sotto la guida del leggendario e influente Octavio Couto.
              Siamo il punto di riferimento per questo sport nel Sud Italia con sedi a Bari, Fasano, Brindisi e Lecce.
            </p>
          </div>
          
          
          <!--DESCRIZIONE IN HOMEPAGE-->
          <div class="container p-4">
            <h3>Dal 2005 faro del Brazilian Jiu-Jitsu in Puglia e nel sud Italia</h3>
            <div class=" container-info d-flex justify-content-center mt-4">
              
              <div  class="description">   
                
                <div>Lorem ipsum dolor sit amet consectetur  adipisii adipisiium iusto necessitatibus officia adipisci. Iste praesentium sunt nihil fugit maxime um iusto necessitatibus officia adipisci. Iste praesentium sunt nihil fugit maxime  adipisiium iusto necessitatibus officia adipisci. Iste praesentium sunt nihil fugit maxime  adipisiium iusto necessitatibus officia adipisci. Iste praesentium sunt nihil fugit maxime voluptatum rerum.</div>
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

.hero-img {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 100;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 20%;
  }
    &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    z-index: 150; 
  }

}

.header{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 200;
  padding: 1%;
}

.ms-intro {
  color: white;
  width: 50%;  
  padding: 1%;
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





</style>
