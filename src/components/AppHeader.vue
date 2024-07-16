<script>
export default {
  name: 'AppHeader',
}
</script>

<template>
  
  <section>
   
    <div class="gap-5 d-none d-md-flex">
      <router-link :to="{ name: 'home' }"><b>HOME</b></router-link>
      <router-link :to="{ name: 'schedule' }"><b>CORSI E ORARI</b></router-link>  
      <router-link :to="{ name: 'istruttori' }"><b>ISTRUTTORI</b></router-link>
      <router-link :to="{ name: 'competition' }"><b>COMPETITION</b></router-link>
      <router-link :to="{ name: 'sedi' }"><b>SEDI</b></router-link>
    </div>

    <i class="fa-solid fa-bars d-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"></i>

    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
      <div class="offcanvas-header">
        <div>
          <img class="logo" src="../assets/images/wcra-logo.png" alt="">
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      
      <div class="offcanvas-body " data-bs-dismiss="offcanvas">
      <div>
      <div class="">
        <div>
          <router-link :to="{ name: 'home' }"><b>HOME</b></router-link>
        </div>
        <div>
          <router-link :to="{ name: 'schedule' }"><b>CORSI E ORARI</b></router-link>  

        </div>

        <div>
          <router-link :to="{ name: 'istruttori' }"><b>ISTRUTTORI</b></router-link>

        </div>

        <div>
          <router-link :to="{ name: 'competition' }"><b>COMPETITION</b></router-link>

        </div>
        
       <div>
        <router-link :to="{ name: 'sedi' }"><b>SEDI</b></router-link>
       </div>
        
       
      </div>
        <div>
          
        </div>
      </div>
      </div>
    </div>

  </section>
 
</template>

<style scoped lang="scss">

a{
  text-decoration: none;
  color: black;
}

  i {
    font-size: 30px;
    border: 2px solid white;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    color: white;
    text-decoration: none;
  }

  .logo{
    width: 50px;
  }

.offcanvas{
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0));
  border: none;
}

.btn-close{
  color: white;
}


// Smartphone
@media (min-width: 768px)  {
  a{
    color: white;
    
  }

 
}


 

</style>