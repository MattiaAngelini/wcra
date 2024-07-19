<script>
export default {
  name: 'AppIstruttori',
};
</script>

<template>
  <div class="ms-container">
    <div class="d-flex justify-content-center mt-5">
      <div>
        <span class="title-section">I NOSTRI ISTRUTTORI</span>
        <div class="d-flex">
          <div class="container-belts">
            <div class="belt1"></div>
            <div class="belt2"></div>
            <div class="belt3"></div>
          </div>
        </div>
      </div>
    </div>
    <section class="istruttori container d-flex justify-content-center flex-wrap gap-5 mt-5 mb-5">
      <div class="ms-card">
        <img src="../assets/images/mica.jpg" alt="">
        <div class="p-3">
          <h4>Paolo Girone</h4>
          <div>Professore</div>
          <p>Cintura nera terzo grado, fondatore della wcra e insegnante nei corsi intermedi</p>
        </div>
      </div>
      <div class="ms-card">
        <img src="../assets/images/mica.jpg" alt="">
        <div class="p-3">
          <h4>Paolo Girone</h4>
          <div>Professore</div>
          <p>Cintura nera terzo grado, fondatore della wcra e insegnante nei corsi intermedi</p>
        </div>
      </div>
      <div class="ms-card">
        <img src="../assets/images/mica.jpg" alt="">
        <div class="p-3">
          <h4>Paolo Girone</h4>
          <div>Professore</div>
          <p>Cintura nera terzo grado, fondatore della wcra e insegnante nei corsi intermedi</p>
        </div>
      </div>
      <div class="ms-card">
        <img src="../assets/images/mica.jpg" alt="">
        <div class="p-3">
          <h4>Paolo Girone</h4>
          <div>Professore</div>
          <p>Cintura nera terzo grado, fondatore della wcra e insegnante nei corsi intermedi</p>
        </div>
      </div>
      <div class="ms-card">
        <img src="../assets/images/mica.jpg" alt="">
        <div class="p-3">
          <h4>Paolo Girone</h4>
          <div>Professore</div>
          <p>Cintura nera terzo grado, fondatore della wcra e insegnante nei corsi intermedi</p>
        </div>
      </div>
      <div class="ms-card">
        <img src="../assets/images/mica.jpg" alt="">
        <div class="p-3">
          <h4>Paolo Girone</h4>
          <div>Professore</div>
          <p>Cintura nera terzo grado, fondatore della wcra e insegnante nei corsi intermedi</p>
        </div>
      </div>
      <div class="ms-card">
        <img src="../assets/images/mica.jpg" alt="">
        <div class="p-3">
          <h4>Paolo Girone</h4>
          <div>Professore</div>
          <p>Cintura nera terzo grado, fondatore della wcra e insegnante nei corsi intermedi</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use './src/assets/styles/partials/variables.scss' as *;

.ms-container{
  background-color: $secondary-color;
  padding: 40px 0 40px 0;
}


.istruttori {
  min-height: 100vh;

  .ms-card {
    border: 2px solid black;
    border-top: none;
    border-radius: 10px;
    background-color: $main-color;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 1);
    color: white;
    font-size: 20px;
    width: 100%;
    max-width: 300px;
  
    img {
      width: 100%;
      border-radius: 10px 10px 0 0;     
    }
  }
}
</style>
