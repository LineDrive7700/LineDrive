<template>
    <gmap-map
      :center="center"
      :zoom="9"
      style="width:100%;  height: 240px;"
    >
    <gmap-marker
        :position = "center"
        :clickable="true"
         @click="directionsTab"
    ></gmap-marker>
    </gmap-map>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 33.099571, lng: -96.680534 },
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
   directionsTab: function() {
       window.open
       ("https://www.google.com/maps/dir//Line+Drive,+210+Central+Expy+S+%2360,+Allen,+TX+75013/@33.0995683,-96.6827127,17z", "_blank");
   }
  }
};
</script>