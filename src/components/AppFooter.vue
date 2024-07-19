<script>
export default {
  name: 'AppFooter',
};
</script>

<template>
  <footer class="footer">   
    <div class="p-5">
      <div class="row">
        <div class="col-12 col-md-3 offset-md-1 mt-4">
          <h3>WCRA-TEAM.IT</h3>
          <img class="rounded-circle mt-3" src="../assets/images/wcra-logo.png" alt="">
        </div>
        
        <div class="col-12 col-md-3 offset-md-1 d-flex flex-column gap-1 mt-4">
          <h3>CONTATTI</h3>
          <div>Numero:345345345</div>
          <div>e-mail: asddaoasdjapo@gmail.com</div>
          <div>SociaL x x x x</div>
          <div>Indirizzo: Via Domenico Cotugno,70124 Bari.</div>
        </div>

        <div class="col-12 col-md-3 offset-md-1 d-flex flex-column gap-1 mt-4">
          <h3>ORARI APERTURA</h3>
          <div>Lunedi: 09:00/22:00</div>
          <div>Martedi: 09:00/22:00</div>
          <div>Mercoledi: 09:00/22:00</div>
          <div>Giovedi: 09:00/22:00</div>
          <div>Venerdi: 09:00/22:00</div>
          <div>Sabato: 09:00/18:00</div>
          <div>Domenica: CHIUSO</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use './src/assets/styles/partials/variables.scss' as *;

.footer {
  background-color: $main-color;
  color: white;
  min-height: 60vh;

  img {
    width: 180px;
  }
}
</style>
