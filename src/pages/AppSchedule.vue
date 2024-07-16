<script>

export default {
  name: 'AppSchedule',

}
</script>

<template>

<div class="wrap d-flex justify-content-center align-items-center flex-wrap">

  <div class="container calendar p-3 m-3">
    
    <div class="d-lg-flex justify-content-evenly p-2">
      <div class="day-week">LUNEDI
        <div>11:00 - 12:00 <span class="intermedio">intermedio</span></div>
        <div>11:00 - 12:00 <span class="femminile">femminile</span></div>
        <div>11:00 - 12:00 <span class="basic">basic</span></div>
        <div>_________</div>
      </div>

      <div class="day-week p-2">MARTEDI
        <div>11:00 - 12:00 <span class="intermedio">intermedio</span></div>
        <div>11:00 - 12:00 <span class="femminile">femminile</span></div>
        <div>11:00 - 12:00 <span class="basic">basic</span></div>
        <div>_________</div>
      </div> 
    </div>

    <div class="d-lg-flex justify-content-evenly">
      <div class="day-week p-2">MERCOLEDI
        <div>11:00 - 12:00 <span class="intermedio">intermedio</span></div>
        <div>11:00 - 12:00 <span class="femminile">femminile</span></div>
        <div>11:00 - 12:00 <span class="basic">basic</span></div>
        <div>_________</div>
      </div>
      <div class="day-week p-2">GIOVEDI
        <div>11:00 - 12:00 <span class="intermedio">intermedio</span></div>
        <div>11:00 - 12:00 <span class="femminile">femminile</span></div>
        <div>11:00 - 12:00 <span class="basic">basic</span></div>
        <div>_________</div>
      </div> 
    </div>

    <div class="d-lg-flex justify-content-evenly ">
      <div class="day-week p-2">VENERDI   
        <div>11:00 - 12:00 <span class="intermedio">intermedio</span></div>
        <div>11:00 - 12:00 <span class="femminile">femminile</span></div>
        <div>11:00 - 12:00 <span class="basic">basic</span></div>
        <div>_________</div>
        

      </div>

      <div class="weekend p-2">SABATO
        <div>Open-Mat</div>
        <div class="mb-2">_________</div>
      
        
        <div class="weekend ">DOMENICA</div>
        <div>CHIUSO</div>
      </div> 

    </div>
      
    

    

   

  </div>
</div>

  
</template>

<style scoped lang="scss">

h1{color: white;}

.wrap {
  background-image: url('/src/assets/images/cover-orari.jpg');
  min-height: 100vh;
}

.calendar {
  background-color: black;
  opacity: 0.85;
  border-radius: 20px;
  color: white;
  width: 70%;
  min-height: 80%;

    .day-week, .weekend {
    min-height: 20%;
    font-weight: 800;
    min-width: 60%;
    margin: auto;
    }

    .day-week div:nth-child(1),
    .day-week div:nth-child(2),
    .day-week div:nth-child(3) {
        font-weight: 800;
        padding: 6px 0 6px 0;
        
        
    }

    .basic, .intermedio, .femminile{
      margin-left: 10px;
      border: 1px solid white;
    }

    .basic{
      color: green;
    }

    .intermedio {
      color: orange;

    }
    
    .femminile {
      color: purple;

    }

}




</style>
