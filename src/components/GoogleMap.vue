<script>
export default {
  name: 'Map',
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = L.map('map').setView([40.8076, 16.9077], 8);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const activities = [
      { name: 'Bari - Sede Centrale - Angiulli Fitness Gym- Via Domenico Cotugno, 10.', lat: 41.107841, lng: 16.855708 },
      { name: 'Brindisi - Via Lucio Strabone, 42 - Invictus Fight Lab', lat: 40.632912, lng: 17.940716 },
      { name: 'Lecce - Via Luciano Spagna, 92, Galatone - Kali and Fitness Academy', lat: 40.153215, lng: 18.053722 },
      { name: 'Taranto - Viale Europa, 204, Talsano - Centro sportivo Bellevue', lat: 40.417510, lng: 17.297227 },
      { name: 'Fasano - Via dell\'Agricoltura, 109 - Sport Project', lat: 40.842365, lng: 17.365296 },
      { name: 'Latiano - Contrada Romatizza, Zona P.i.p. - Revolution Club Latiano', lat: 40.558932, lng: 17.711510 },
      { name: 'Scanzano - Via Kennedy, Scanzano Jonico, MT 22 - Asd Dojo Fit Club', lat: 40.274967, lng: 16.681812 },
      { name: 'Santeramo in Colle - Via Abruzzo - Molise, 32 - Fighting Team Lassandro', lat: 40.791260, lng: 16.773144 },
    ];

      activities.forEach(activity => {
        const marker = L.marker([activity.lat, activity.lng]).addTo(map);
        marker.bindPopup(`<b>${activity.name}</b>`);
        if (activity.name.includes('Bari')) {
          marker.openPopup();
        }
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
  z-index: 800;
}
</style>
