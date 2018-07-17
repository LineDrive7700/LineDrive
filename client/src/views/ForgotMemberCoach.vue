<template>
  <div>
    <forgotPassCoach-final title="Member"></forgotPassCoach-final>
    <router-view/>
  </div>
</template>

<script>
import ForgotPassCoach from './../components/ForgotPassCoach'
export default {
  name: 'ForgotPassCoach',
  components: {
    'forgotPassCoach-final': ForgotPassCoach
  }
}
</script>

<style>

</style>
