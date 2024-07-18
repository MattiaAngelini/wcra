<script>
export default {
  name: 'AppHeader',
}
</script>

<template>
  <header>

    <section class="link-header d-flex justify-content-between align-items-center">
      
      <!--LOGHI SOCIAL-->
      <div class="d-md-flex d-none gap-3">
        <i>X</i><i>X</i><i>X</i><i>X</i><i>X</i>
      </div>
       
      <!--LINK HEADER-->
      <div class="d-md-flex d-none gap-3 align-items-center justify-content-center">
        <router-link :to="{ name: 'home' }"><b>HOME</b></router-link>
        <router-link :to="{ name: 'schedule' }"><b>CORSI E ORARI</b></router-link>
        <router-link :to="{ name: 'istruttori' }"><b>ISTRUTTORI</b></router-link>
        <router-link :to="{ name: 'sedi' }"><b>SEDI</b></router-link>
      </div>
      
      <!--LOGO DESKTOP-->
      <div class="logo d-none d-md-block">
        <img class="img-fluid rounded-circle" src="../assets/images/wcra-logo.png" alt="">
      </div>

      <!--HAMBURGER MOBILE-->
      <div class="hamburger-logo-container d-flex d-md-none justify-content-between align-items-center">
        <div class="hamburger">
          <i class="fa-solid fa-bars" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"></i>
        </div>
       
        <!--LOGO MOBILE-->
        <div class="logo">
          <img class="img-fluid rounded-circle" src="../assets/images/wcra-logo.png" alt="">
        </div>
      </div>

    </section>

    <!--Hamburger Smartphone-->
    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
      <div class="offcanvas-header">
        <div>
          <h3><b>W.C.R.A.</b></h3>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body " data-bs-dismiss="offcanvas">
        <div class="d-flex flex-column gap-4">
          <div>
            <router-link :to="{ name: 'home' }"><b>Home</b></router-link>
          </div>
          <div>
            <router-link :to="{ name: 'schedule' }"><b>Corsi e orari</b></router-link>
          </div>
          <div>
            <router-link :to="{ name: 'istruttori' }"><b>Istruttori</b></router-link>
          </div>
          <div>
            <router-link :to="{ name: 'sedi' }"><b>Dove trovarci</b></router-link>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">

header {
  height: 10vh;
  background-color: grey;

  .link-header {
    height: 100%;
    padding: 0 50px 0 50px;
  }

  a, i {
    text-decoration: none;
    color: white;
  }

  .logo {
    width: 50px;
  }

  .offcanvas {
    width: 50%;
  }

  .btn-close {
    color: white;
  }

  .hamburger {
    height: 100%;
    font-size: 30px;
  }

  .hamburger-logo-container {
    width: 100%;
  }
}

</style>