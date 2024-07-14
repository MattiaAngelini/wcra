<script>

export default {
  name: 'AppSchedule',

}
</script>

<template>

<div class="wrap">

  <div class="container">
    <h1>CORSI E ORARi</h1>

    <section class="calendar row p-2">
        <div class="col-lg col-md-3 col-12 mb-3">
          <h5 class="text-center">LUNEDI</h5>
          <div class="ms-container-course">
            <div class="ms-clock">11:00 - 12:00</div>
            <div class="ms-badge">intermedio</div>
          </div>
          <div class="ms-container-course">
            <div class="ms-clock">19:00 - 21:00</div>
            <div class="ms-badge">intermedio</div>
          </div>
        </div>
        <div class="col-lg col-md-3 col-12 mb-3">
          <h5 class="text-center">MARTEDI</h5>
          <div class="ms-container-course">
            <div class="ms-clock">13:00 - 15:00</div>
            <div class="ms-badge">intermedio</div>
          </div>
          <div class="ms-container-course">
            <div class="ms-clock">19:00 - 20:15</div>
            <div class="ms-badge">Basic</div>
          </div>
        </div>
        <div class="col-lg col-md-3 col-12 mb-3">
          <h5 class="text-center">MERCOLEDI</h5>
          <div class="ms-container-course">
            <div class="ms-clock">11:00 - 12:00</div>
            <div class="ms-badge">No-Gi</div>
          </div>
          <div class="ms-container-course">
            <div class="ms-clock">19:00 - 21:00</div>
            <div class="ms-badge">No-Gi</div>
          </div>
        </div>
        <div class="col-lg col-md-3 col-12 mb-3">
          <h5 class="text-center">GIOVEDI</h5>
          <div class="ms-container-course">
            <div class="ms-clock">13:00 - 15:00</div>
            <div class="ms-badge">intermedio</div>
          </div>
          <div class="ms-container-course">
            <div class="ms-clock">19:00 - 20:15</div>
            <div class="ms-badge">Basic</div>
          </div>
        </div>
        <div class="col-lg col-md-3 col-12 mb-3">
          <h5 class="text-center">VENERDI</h5>
          <div class="ms-container-course">
            <div class="ms-clock">11:00 - 12:00</div>
            <div class="ms-badge">intermedio</div>
          </div>
          <div class="ms-container-course">
            <div class="ms-clock">19:00 - 21:00</div>
            <div class="ms-badge">intermedio</div>
          </div>
        </div>
        <div class="col-lg col-md-3 col-12 mb-3">
          <h5 class="text-center">SABATO</h5>
          <div class="ms-container-course">
            <div class="ms-clock">15:00 - 17:00</div>
            <div class="ms-badge">OPEN-MAT</div>
          </div>
        </div>
        <div class="col-lg col-md-3 col-12 mb-3">
          <h5 class="text-center">DOMENICA</h5>
          <div class="ms-container-course">
            <div class="ms-clock">CHIUSO</div>
          </div>
        </div>
      </section>

  

   

  </div>

  

</div>
  
 

</template>

<style scoped lang="scss">

h1{color: white;}

.wrap {
  background-image: url('/src/assets/images/cover-orari.jpg');
  height: 100vh;
}


.calendar {
  background-color: black;
  opacity: 0.85;
  border-radius: 20px;
  color: white;
  min-height: 50vh;
  
    .ms-container-course{
      width: 100%;
      border: 3px solid white;
      border-radius: 10px;
      padding: 6px;
    }
}




</style>
