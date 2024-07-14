<script>
import AppHeader from '../components/AppHeader.vue';

export default {
  name: 'AppHome',

  components: {
    AppHeader
  }
}
</script>

<template>

    <div>
      <!--link header su img principale-->
        <AppHeader class="header"></AppHeader>
  
        <div>
            <div class="hero-img">
                <img class="" src="../assets/images/mica.jpg" alt="MicaGalvao">
            </div>
        
          
          <div class="ms-intro">
            <h1>Benvenuti nella wcra</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam provident, et voluptates est harum in inventore ut officia? In, unde minima! Culpa consequuntur atque inventore consectetur quo maxime sunt dolores.</p>
          </div>
        
        </div>
         
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
    width: 40%;  
    padding: 1%;
    position: absolute;
    bottom: 30%;
    right: 0;
    z-index: 201;

}

</style>
