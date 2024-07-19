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
  <div class="d-flex justify-content-center mt-5">
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

  <section class="d-flex align-items-center mt-5 mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <h1>Trova la sede più vicina a te</h1>
          <p>Il team WCRA è molto attivo in Puglia con diverse sedi ecc. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Asperiores non consequatur sint! Sapiente veritatis officia ducimus, a
            <div>
              <b>BARI</b> - Sede Centrale - Angiulli Fitness Gym, Via Domenico Cotugno 10.
            </div>
            <div>
              <b>BARI</b> - Sede Centrale - Angiulli Fitness Gym, Via Domenico Cotugno 10.
            </div>
            <div>
              <b>BARI</b> - Sede Centrale - Angiulli Fitness Gym, Via Domenico Cotugno 10.
            </div>
            <div>
              <b>BARI</b> - Sede Centrale - Angiulli Fitness Gym, Via Domenico Cotugno 10.
            </div>
            <div>
              <b>BARI</b> - Sede Centrale - Angiulli Fitness Gym, Via Domenico Cotugno 10.
            </div>
          </p>
        </div>

        <div class="container-map col-12 offset-md-1 col-md-8">
          <GoogleMap class="ms-map" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  min-height: 80vh;

  .ms-map {
    border-radius: 20px;
    box-shadow: 1px 6px 7px rgb(56, 28, 116);
  }
}
</style>
