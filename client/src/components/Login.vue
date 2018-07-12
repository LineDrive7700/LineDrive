<template>
    <Panel>
        <slot>
            <v-toolbar flat dense class="gray darken-3">
                <v-toolbar-title>{{title}} Login</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
                <v-text-field label="Email" v-model="email"></v-text-field>
                <v-text-field label="Password" v-model="password" type="password"></v-text-field>
                <br>
                <div class="success" v-html="success"></div>
                <div class="error" v-html="error"></div>
                <v-btn v-if="title==='Coach'" class="blue darken-3" @click="loginCoach" dark>Login Coach</v-btn><v-spacer></v-spacer>
                <b-link v-if="title==='Coach'" href="#/registerCoach"><b>Sign Up</b></b-link><v-spacer></v-spacer>
                <b-link v-if="title==='Coach'" href="#/forgotPassCoach"><b>Forgot Password</b></b-link>
                <v-btn v-if="title==='Member'" class="blue darken-3" @click="loginMember" dark>Login</v-btn><br>
                <b-link v-if="title==='Member'" href="#/registerMember"><b>Sign Up</b></b-link><v-spacer></v-spacer>
                <b-link v-if="title==='Member'" href="#/forgotPassMember"><b>Forgot Password</b></b-link>
            </div>
        </slot>
    </Panel>
</template>

<script>
import AuthenticationService from './../services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
    props:[
        'title'
    ],
  data () {
    return {
        role: "",
        email: "mx930@utdallas.edu",
        password: "qwertyui",
        error: null,
        success:""
    }
  },
  components:{
      Panel
  },
  methods:{
      navigateTo(route){
      this.$router.push(route)
    },
      async loginCoach(){
          try{
                this.error=null;
                this.success=null;
                const response = await AuthenticationService.loginCoach({
                    email: this.email,
                    password: this.password,
                    role: this.title
                })
                this.success= "You have successfully logged-in.";
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser',response.data.user)
                this.$router.push({name :'Profile',params :{id : this.$store.state.user.email }})
                console.log('Token transferred')

          }catch(error){
              this.error = error.response.data.error;
          }
      },
      async loginMember(){
          try{
                this.error=null;
                this.success=null;
                const response = await AuthenticationService.loginMember({
                    email: this.email,
                    password: this.password
                })
                this.success= "You have successfully logged-in.";
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser',response.data.user)
                this.$router.push({name :'Profile',params :{id : this.$store.state.user.email }})
                console.log('Token transferred')

          }catch(error){
              this.error = error.response.data.error;
          }
      },
  }
}
</script>


<style scoped>
 .input-group--text-field input{
  border-bottom: 0.5px solid black;
}
</style>