<template>
  <div>
    <login-final title="Member"></login-final>
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
