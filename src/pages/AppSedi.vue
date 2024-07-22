<script>
import GoogleMap from '../components/GoogleMap.vue';
export default {
  name: 'AppSedi',

  components: {
    GoogleMap
  }
};
</script>

<template>
  <div class="d-flex justify-content-center mt-3">
    <div>
      <span class="title-section">DOVE TROVARCI</span>
      <div class="d-flex">
        <div class="container-belts">
          <div class="belt1"></div>
          <div class="belt2"></div>
          <div class="belt3"></div>
        </div>
      </div>
    </div>
  </div>

  <section class="d-flex align-items-center mt-2 mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5 p-3">
          <h1>Trova la sede più vicina a te</h1>
          <p>Il team W.C.R.A. è molto attivo in Puglia e nel sud Italia e le nostre sedi collaborano strettamente come un unica grande squadra. 
             Scopri la sede più vicina a te:</p>
            <div>
              <b>BARI</b> - Sede Centrale - Angiulli Fitness Gym, Via Domenico Cotugno, 10
            </div>
            <div>
              <b>BRINDISI</b> - Via Lucio Strabone, 42 - Invictus Fight Lab
            </div>
            <div>
              <b>LECCE</b> - Via Luciano Spagna, 92, Galatone - Kali and Fitness Academy
            </div>
            <div>
              <b>TARANTO</b> - Viale Europa, 204,Talsano - Centro sportivo Bellevue
            </div>
            <div>
              <b>FASANO</b> - Via dell'Agricoltura, 109 - Sport Project
            </div>
            <div>
              <b>LATIANO</b> - Contrada Romatizza, Zona P.i.p. - Revolution Club Latiano
            </div>
            <div>
              <b>SCANZANO</b> - Via Kennedy, Scanzano Jonico, MT 22 - Asd Dojo Fit Club
            </div>
            <div>
              <b>SANTERAMO IN COLLE</b> -  Via Abruzzo - Molise, 32 - Fighting Team Lassandro
            </div>
          
        </div>

        <div class="container-map col-12 col-md-7 p-3">
          <GoogleMap class="ms-map" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  min-height: 80vh;
  font-size: 16px;

  .ms-map {
    border-radius: 20px;
    box-shadow: 1px 6px 7px rgb(56, 28, 116);
  }
}
</style>
