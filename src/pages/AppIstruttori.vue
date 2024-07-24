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
    <section class="istruttori container d-flex justify-content-center flex-wrap gap-3 mt-5 mb-5">
     
      <div class="ms-card">
        <img src="../assets/images/istruttore-fac-simile.jpg" alt="">
        <div class="p-3">
          <div class="row">
            <div class="col-8">
              <h4>Paolo Girone</h4>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <div class="belt1"></div>
              <div class="belt2"></div>
              <div class="belt3"></div>
            </div>
          </div>
          <b><h5>Professore</h5></b>
          <p>Cintura nera terzo grado, fondatore della wcra e insegnante nei corsi intermedi.</p>
        </div>
      </div>

      <div class="ms-card">
        <img src="../assets/images/istruttore-fac-simile.jpg" alt="">
        <div class="p-3">
          <div class="row">
            <div class="col-8">
              <h4>Michelle Nicolini</h4>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <div class="belt1"></div>
              <div class="belt2"></div>
              <div class="belt3"></div>
            </div>
          </div>
          <b><h5>Professore</h5></b>
          <p>Cintura nera terzo grado, atleta professionista di calibro mondiale, x8 volte campionessa del mondo, gioiello della wcra e insegnante nei nostri corsi femminili.</p>
        </div>
      </div>

       <div class="ms-card">
        <img src="../assets/images/istruttore-fac-simile.jpg" alt="">
        <div class="p-3">
          <div class="row">
            <div class="col-8">
              <h4>Michele Saliani</h4>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <div class="belt1"></div>
              <div class="belt2"></div>
              <div class="belt3"></div>
            </div>
          </div>
          <b><h5>Maestro</h5></b>
          <p>Cintura nera primo grado, ex atleta professionista e insegnante degli agonisti.</p>
        </div>
      </div>
      
      <div class="ms-card">
        <img src="../assets/images/istruttore-fac-simile.jpg" alt="">
        <div class="p-3">
          <div class="row">
            <div class="col-8">
              <h4>Giorgio Saliani</h4>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <div class="belt1"></div>
              <div class="belt2"></div>
              <div class="belt3"></div>
            </div>
          </div>
          <b><h5>Maestro</h5></b>
          <p>Cintura nera, lottatore di elevata esperienza e insieme a suo fratello Michele prepara atleti agonisti.</p>
        </div>
      </div>
    
      <div class="ms-card">
        <img src="../assets/images/istruttore-fac-simile.jpg" alt="">
        <div class="p-3">
          <div class="row">
            <div class="col-8">
              <h4>Michele Zannoni</h4>
            </div>
            <div class="col-3 d-flex justify-content-end brown-belt">
              <div class="belt1 belt-brown"></div>
              <div class="belt2 stripe-black"></div>
              <div class="belt3  belt-brown"></div>
            </div>
          </div>
          <b><h5>Istruttore</h5></b>
          <p>Cintura marrone secondo grado, tra gli atleti più talentuosi del team e insegnante dei corsi per bambini.</p>
        </div>
      </div>
      <div class="ms-card">
        <img src="../assets/images/istruttore-fac-simile.jpg" alt="">
        <div class="p-3">
          <div class="row">
            <div class="col-8">
              <h4> Mattia Angelini</h4>
            </div>
            <div class="col-3 d-flex justify-content-end purple-belt">
              <div class="belt1 belt-purple"></div>
              <div class="belt2 stripe-black"></div>
              <div class="belt3 belt-purple"></div>
            </div>
          </div>
          <b><h5>Istruttore</h5></b>
          <p>Cintura viola, atleta agonista e insegnante nei corsi basic per principianti.</p>
        </div>
      </div>
      <div class="ms-card">
        <img src="../assets/images/istruttore-fac-simile.jpg" alt="">
        <div class="p-3">
          <div class="row">
            <div class="col-8">
              <h4>Vito Lippolis</h4>
            </div>
            <div class="col-3 d-flex justify-content-end purple-belt">
              <div class="belt1 belt-purple"></div>
              <div class="belt2 stripe-black"></div>
              <div class="belt3 belt-purple"></div>
            </div>
          </div>
          <b><h5>Istruttore</h5></b>
          <p>Cintura viola, atleta agonista e insegnante nei corsi basic per principianti.</p>
        </div>
      </div>

      <div class="ms-card">
        <img src="../assets/images/istruttore-fac-simile.jpg" alt="">
        <div class="p-3">
          <div class="row">
            <div class="col-8">
              <h4>Danilo</h4>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <div class="belt1  belt-brown"></div>
              <div class="belt2 stripe-black"></div>
              <div class="belt3  belt-brown"></div>
            </div>
          </div>
          <b><h5>Maestro MMA</h5></b>
          <p>Cintura marrone bjj e cintura nera KickBoxing, maestro nei corsi di MMA.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use './src/assets/styles/partials/variables.scss' as *;

.ms-container {
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
    max-width: 400px;
    line-height: 36px;

    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    .belt-brown{
      background-color: rgba(129, 34, 34, 0.748);
    }
   .belt-purple {
      background-color: purple;
    }
    .stripe-black{
      background-color: black;
    }
  }

}
</style>
