<template>
  <v-footer height="auto">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-row><img src="./../assets/img/linedrive.png" alt="linedrivelogo"></b-row>
          <b-row>210 Central Expressway S.</b-row>
          <b-row>Suite 60</b-row>
          <b-row>Allen, Tx 75013</b-row>
        </b-col>
        <b-col>
          <b-row><h4>Sitemap</h4></b-row>
          <b-row><b-link href="home"><b>Home</b></b-link></b-row>
          <b-row><b-link href="home"><b>Training Options</b></b-link></b-row>
          <b-row><b-link href="home"><b>Memberships</b></b-link></b-row>
          <b-row><b-link href="home"><b>Walk-Ins</b></b-link></b-row>
          <b-row><b-link href="home"><b>About Us</b></b-link></b-row>
          <b-row><b-link href="home"><b>The Line Drive Approach</b></b-link></b-row>
          <b-row><b-link href="home"><b>Line Drive Technology</b></b-link></b-row>
          <b-row><b-link href="home"><b>Line Drive Coaches</b></b-link></b-row>
        </b-col>
        <b-col>
          <b-row><h4> </h4></b-row>
          <br>
          <b-row><b-link href="home"><b>Locations</b></b-link></b-row>
          <b-row><b-link href="home"><b>Allen (Coming Soon)</b></b-link></b-row>
          <b-row><b-link href="home"><b>FAQ</b></b-link></b-row>
          <b-row><b-link href="home"><b>Testimonials</b></b-link></b-row>
          <b-row><b-link href="home"><b>Schedule a Session</b></b-link></b-row>
          <b-row><b-link href="home"><b>Privacy Policy</b></b-link></b-row>
          <b-row><b-link href="home"><b>Press</b></b-link></b-row>
        </b-col>
        <b-col>
          <google-map />
        </b-col>
      </b-row>
    </b-container>
    
  </v-footer>
</template>

<script>
import GoogleMap from "./GoogleMap";
export default {
  name: 'Footer',
  components: {
    GoogleMap
  },
  data () {
    return {
    }
  },
  computed: {
      color () {
        switch (this.e2) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      }
    }
}
</script>
