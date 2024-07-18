<script>

export default {
  name: 'HeroImage',
}
</script>

<template>
      <!--HERO Principale-->
      <section>
        <div class="hero-img">
          <div class="ms-intro">
            <h1>Benvenuti nella wcra</h1>
            <p>Team di Brazilian Jiu-Jitsu guidato dal Maestro Paolo Girone, 
              cintura nera terzo grado formato sotto la guida del leggendario e influente Octavio Couto
            </p>
          </div>
        </div>
    </section>
   
</template>

<style scoped lang="scss">
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
  z-index: 990;
}



</style>
