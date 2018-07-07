<template>
  <div>
    <login-final title="Coach"></login-final>
    <router-view/>
  </div>
</template>

<script>
import Login from './../components/Login'
export default {
  components: {
    'login-final': Login
  }
}
</script>

<style>

</style>
