<script>

export default {
  name: 'AppChiSiamo',

}
</script>

<template>

       
            <!--DESCRIZIONE IN HOMEPAGE-->
          <div class="container p-2 mt-5 mb-5 d-lg-flex gap-4">
            
              <div  class="description text-center mt-5 p-3"> 
                <h3>Dal 2005 faro del Brazilian Jiu-Jitsu in Puglia e nel sud Italia</h3>  
                <div> COMPETIZIONI, UIJJ, IBJJF ECC E FOTO COMPETIZIONI praesentium sunt nihil fugit maxime  adipisiium iusto necessitatibus officia adipisci. Iste praesentium sunt nihil fugit maxime  adipisiium iusto necessitatibus officia adipisci. Iste praesentium sunt nihil fugit maxime voluptatum rerum.</div>         
              
                <img class="img-fluid" src="../assets/images/lotta.png" alt="">
             </div>
            
              <div class="video-wrapper">
                  <video class=" background-video" controls>
                  <div class="prova">ciao ciao</div>
                  <source src="../assets/images/video.mp4" type="video/mp4">
                    Il tuo browser non supporta il tag video.
                </video>
              </div>

          </div>

</template>

<style scoped lang="scss">



.video-wrapper {
    position: relative;
    width: 100%;
    padding-top: 50%;
}

video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 1);
    
}



// MEDIA QUERIES

// Very small devices (e.g., smartphones with screens smaller than 340px)
@media (min-width: 200px) and (max-width: 320px) {


  

}

// Smartphone
@media (min-width: 321px) and (max-width: 400px) {


}



// Tablet
@media (min-width: 401px) and (max-width: 768px) {



 
  
}

// Small laptop
@media (min-width: 769px) and (max-width: 992px) {

}

// Large laptop and desktop
@media (min-width: 993px) and (max-width: 1200px) {

}

// Extra large screens
@media (min-width: 1201px) {
 
}




</style>
