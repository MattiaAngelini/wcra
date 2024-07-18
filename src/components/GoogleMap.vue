
  <script>
  export default {
    name: 'Map',
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const map = L.map('map').setView([41.10784126548125, 16.855708054387836], 12);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
  
        const activities = [
          { name: 'Bari - Sede Centrale - Angiulli Fitness Gym- Via Domenico Cotugno, 10.', lat: 41.10784126548125, lng: 16.855708054387836 },
        //   { name: 'Attività 2', lat: 45.448384, lng: 10.981622 },
          // Aggiungi altre attività qui
        ];
  
        activities.forEach(activity => {
          const marker = L.marker([activity.lat, activity.lng]).addTo(map);
          marker.bindPopup(`<b>${activity.name}</b>`).openPopup();
        });
      }
    }
  };
  </script>

  <template>
    <div id="map"></div>
  </template>
  
  
  <style>
  #map {
   height: 500px;
   width: 100%;
   
  }
  </style>