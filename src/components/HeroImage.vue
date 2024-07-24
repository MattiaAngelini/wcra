<script>
export default {
  name: 'HeroImage',
};
</script>

<template>
  <!-- HERO Principale -->
  <section>
    <div class="ms-container">
      <video class="hero-video" autoplay muted loop>
        <source src="../assets/images/lezione-2.mp4" type="video/mp4">
        Il tuo browser non supporta il tag video.
      </video>
      <div class="ms-wrap"></div>
      <div class="ms-intro">
        <h1>BENVENUTI NELLA W.C.R.A.</h1>
        <p>Team di Brazilian Jiu-Jitsu guidato dal Maestro Paolo Girone, 
          cintura nera terzo grado formato sotto la guida del leggendario e influente Octavio Couto
        </p>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">

.ms-container {
  height: 100vh;
  position: relative;
  
  .hero-video {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .ms-wrap {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2); 
    z-index: 10; 
  }

  .ms-intro {
    color: white;
    position: absolute;
    bottom: 20%;
    right: 0;
    z-index: 20; 
    width: 45%;

    h1 {
      font-weight: 800;
    }
  }
}


</style>
