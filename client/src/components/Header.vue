<template>
<b-navbar toggleable="md" type="light" variant="faded">
    <v-toolbar id="tool" fixed class="white" dark>
      <v-toolbar-title class="mr-6">
        <b-navbar-brand href="#/"><img id="logo" src="./../assets/img/linedrive.png" alt="linedrivelogo"></b-navbar-brand>
      </v-toolbar-title>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#/home"><b>HOME</b></b-nav-item>

            <b-nav-item-dropdown text="<b>TRAINING OPTIONS" right>
              <b-dropdown-item v-for="(value,key) in Training" :value="key" :href="value"><b>{{key}}</b></b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="<b>ABOUT US" right>
              <b-dropdown-item v-for="(value,key) in AboutUS" :value="key" :href="value"><b>{{key}}</b></b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="<b>LOCATIONS</b>" right>
              <b-dropdown-item v-for="(value,key) in Locations" :value="key" :href="value"><b>{{key}}</b></b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="<b>SCHEDULE A SESSION</b>" right>
              <b-dropdown-item v-for="(value,key) in Schedule" :value="key" :href="value"><b>{{key}}</b></b-dropdown-item>
            </b-nav-item-dropdown>
            
            <b-nav-item-dropdown v-if="$store.state.isUserLoggedIn" right>
              <template slot="button-content">
                <em><b>{{username}}</b></em>
              </template>
              <b-dropdown-item small>
                <v-btn small @click="PROFILE">PROFILE</v-btn><br>
                <v-btn small @click="SIGNOUT">SIGNOUT</v-btn><br>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        
      </b-collapse>
  </v-toolbar>
</b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      Schedule: {
        "MEMBERS":"#/loginMember" ,
        "WALK-NS":"#/walk-ns",
        "COACHES":"#/loginCoach",
      },
      AboutUS:{
        "THE LINE DRIVE APPROACH":"#/",
        "LINE DRIVE TECHNOLOGY":"#/",
        "LINE DRIVE COACHES":"#/",
        "FAQ":"#/",
        "TESTIMONIALS":"#/",
      },
      Locations:{
        "ALLEN":"#/"
      },
      Training:{
        "MEMBERSHIPS":"#/",
        "WALK-NS":"#/"
      },
      UserProfile:{
        "PROFILE":"PROFILE",
        "SIGNOUT":"SIGNOUT"
      },
      USER: null,
      // username: '',
    }

  },
  
  methods : {
    SIGNOUT(){
            this.$router.push('/')
            this.$store.dispatch('setToken',null)
            this.$store.dispatch('setUser',null)
        },
    PROFILE(){
      this.$router.push('/profile')
    }

  },

  computed : {
    username: function(){ 
        return this.$store.state.user.name;
    },
  }
}
</script>

<style>
#logo{
  padding-top: 30px;
  padding-left: 40px;
  height: 100px;
  width:200px;
}
#tool{
  height: 90px;
}
.links{
  color: blue !important;
}
</style>
