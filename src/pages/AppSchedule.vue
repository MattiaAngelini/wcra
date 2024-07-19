<script>
export default {
  name: 'AppSchedule',
};
</script>

<template>
  <section class="wrap p-5">
    <div class="container">
      <div class="row">


        <!-- Descrizione corsi -->
        <div class="col-lg-3">

          <div class="d-flex justify-content-center mt-2">
            <div>
              <div class="ms-title text-center">CORSI E ORARI</div>
              <div class="d-flex">
                <div class="container-belts p-2">
                  <div class="belt1"></div>
                  <div class="belt2"></div>
                  <div class="belt3"></div>
                </div>
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad facilis quis illo error assumenda earum cumque asperiores debitis vel quas, odio soluta explicabo iste, ipsam in iusto officiis labore.</p>
        </div>

        <!-- Sched orari -->
        <div class="calendar d-flex justify-content-center offset-lg-1 col-lg-8 text-center">

          <div class="row">

              <div class="col-12 col-md-6">
                  <div class="day-week">
                    <b><h3>LUNEDI</h3></b>
                    <div>11:00 - 12:00 <span class="intermedio">Intermedio</span></div>
                    <div>11:00 - 12:00 <span class="femminile">Only Women</span></div>
                    <div>11:00 - 12:00 <span class="basic">Basic</span></div>
                  </div>

                  <div class="day-week">
                    <b><h3>MARTEDI'</h3></b>
                    <div>11:00 - 12:00 <span class="intermedio">Intermedio</span></div>
                    <div>11:00 - 12:00 <span class="femminile">Only Women</span></div>
                    <div>11:00 - 12:00 <span class="basic">Basic</span></div>
                  </div>

                  <div class="day-week">
                    <b><h3>MERCOLEDI'</h3></b>
                    <div>11:00 - 12:00 <span class="intermedio">Intermedio</span></div>
                    <div>11:00 - 12:00 <span class="femminile">Only Women</span></div>
                    <div>11:00 - 12:00 <span class="basic">Basic</span></div>
                  </div>
              </div>
            

              <div class="col-12 col-md-6">
                  <div class="day-week">
                    <b><h3>GIOVEDI'</h3></b>
                    <div>11:00 - 12:00 <span class="intermedio">Intermedio</span></div>
                    <div>11:00 - 12:00 <span class="femminile">Only Women</span></div>
                    <div>11:00 - 12:00 <span class="basic">Basic</span></div>
                  </div>

                  <div class="day-week">
                    <b><h3>VENERDI'</h3></b>
                    <div>11:00 - 12:00 <span class="intermedio">Intermedio</span></div>
                    <div>11:00 - 12:00 <span class="femminile">Only Women</span></div>
                    <div>11:00 - 12:00 <span class="basic">Basic</span></div>
                  </div>

                  <div class="day-week">
                    <b><h3>SABATO</h3></b>
                    <div>15:00 - 17:00 <span class="basic">Open Mat</span></div>
                  </div>
              </div>    
              
              <div class="weekend mt-3 mb-5">
                <b><h3>DOMENICA</h3></b>
                <div><b>CHIUSO</b></div>
              </div>
          
         </div>       
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use './src/assets/styles/partials/mediaqueries.scss' as *;
@use './src/assets/styles/generic.scss' as *;

.ms-title{
  font-size: 26px;
  color: white;
  font-weight: 700;
}

p {
  color: white;
  font-size: 18px;
}
h3 {
  font-weight: 700;
}

.wrap {
  background-image: url('/src/assets/images/cover-orari.jpg');
  min-height: 100vh;
}

.calendar {
  background-color: black;
  opacity: 0.85;
  border-radius: 20px;
  color: white;
  min-height: 80%;
  padding: 40px;

  .day-week{
    min-height: 10%;
    font-weight: 800;
    min-width: 60%;
    line-height: 40px;
    margin-top: 20px;
  }

  .day-week div.weekend div:first-child {
    font-weight: 800;
  }
  .day-week div, .weekend div:first-child {
    text-align: left;
    font-weight: 800;
    
  }

  .basic, .intermedio, .femminile {
    border-radius: 4px;
    padding: 3px;
    text-align: center;
  }

  .basic {
    background-color: green;
  }

  .intermedio {
    background-color: rgb(35, 22, 78);
  }

  .femminile {
    background-color: rgb(79, 30, 79);
  }
}



</style>
