<template>
  <div>
    <register-final title="Coach"></register-final>
    <router-view/>
  </div>
</template>

<script>
import Register from './../components/Register'
export default {
  components: {
    'register-final': Register
  }
}
</script>

<style>

</style>
