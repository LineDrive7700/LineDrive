<template>
  <div id="app">
    <v-app>
    <header-final/>
      <main>
        <v-container fluid>
           <router-view></router-view>
        </v-container>
      </main>
      <footer-final/>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    'header-final': Header,
    'footer-final': Footer,
  },
  data () {
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
