<script>
export default {
  name: 'AppChiSiamo',
};
</script>

<template>

  <div class="d-flex justify-content-center mt-5">
    <div>
      <span class="title-section">CHI SIAMO</span>
      <div class="d-flex">
        <div class="container-belts">
          <div class="belt1"></div>
          <div class="belt2"></div>
          <div class="belt3"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-5 d-lg-flex gap-4">         
    <div class="description text-center mt-4 p-3"> 
      <h1>Dal 2005 faro del Brazilian Jiu-Jitsu in Puglia e nel sud Italia</h1>  
      <div> "Il team WCRA è uno dei più competitivi in Italia, attivo nelle principali competizioni e costantemente classificati tra i primi dieci team dell'Unione Italiana Jiu Jitsu (UIJJ),
           ci distinguiamo per il nostro impegno e i risultati ottenuti a livello nazionale e internazionale.</div>         
      <img class="img-fluid" src="../assets/images/lotta.png" alt="">
    </div>
    
    <div class="video-wrapper">
      <video class="background-video" controls>
        <div class="prova">ciao ciao</div>
        <source src="../assets/images/video.mp4" type="video/mp4">
        Il tuo browser non supporta il tag video.
      </video>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './src/assets/styles/partials/mediaqueries.scss' as *;
@use './src/assets/styles/generic.scss' as *;

.description {

  h1{
    font-size: 24px;
    font-weight: 800;
  }

  * {
    font-weight: 600;
    line-height: 30px;
  }
 
}
.video-wrapper {
  position: relative;
  width: 100%;
  padding-top: 50%;
}

video {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 1);
}

// MEDIA QUERIES

</style>
