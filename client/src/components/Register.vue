<template>
    <Panel>
        <slot>
            <v-toolbar flat dense class="gray darken-3">
                <v-toolbar-title>{{title}} Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form ref="form" v-model="valid" @submit.stop.prevent="'registerCoach'||'registerMember'">
                    <v-text-field v-model="name" :rules="nameRules" :counter="30" label="Name" required></v-text-field>
                    <v-text-field v-model="contact" label="Contact" :rules="contactRules" required></v-text-field>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    <v-text-field v-model="password" name="password" label="Password" type="password" required></v-text-field>
                    <v-select v-model="select" :items="items" :rules="selectRules" item-text="item" item-value="item" label="Select" return-item-value single-line></v-select>
                    <div hidden><v-text-field v-model="select" name="question" label="Question" disabled hidden></v-text-field>
                    </div>
                    
                    <v-text-field v-model="answer" :rules="answerRules" label="Answer" required></v-text-field>
                    <v-text-field v-model="code" v-if="title==='Coach'" label="Authentication Code" required type="password"></v-text-field>
                    <div class="error" v-html="error"></div>
                    <div class="success" v-html="success"></div>
                    <v-checkbox v-model="checkbox" required :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
                    <v-btn  v-if="title==='Coach'" class="blue darken-3" dark :disabled="!valid"  @click="registerCoach">Register Coach</v-btn>
                    <v-btn  v-if="title==='Member'" class="blue darken-3" dark :disabled="!valid"  @click="registerMember">Register Member</v-btn>
                    <v-btn class="blue darken-3" dark  @click="clear">Clear</v-btn><br>
                    <b-link v-if="title==='Coach'" href="#/loginCoach"><b>Already have an Account? Sign In</b></b-link>
                    <b-link v-if="title==='Member'" href="#/loginMember"><b>Already have an Account? Sign In</b></b-link>
                </v-form>
            </v-card-text>
        </slot>
    </Panel>
</template>

<script>
import AuthenticationService from './../services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
   name: 'Register',
    props:[
        'title'
    ],
  data () {
    return {
        role: "",
        email: "",
        password: "qwertyui",
        contact: "1111111111",
        error: null,
        success: null,
        answer: "asdf",
        valid: true,
        name: "Manish",
        select: "",
        spacer:160,
        code: "",
        selectRules: [
                v => !!v || 'Please select a valid question to recover the password',
            ],
        answerRules: [
                v => !!v || 'Please type the answer to recover the password',
            ],
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 30) || 'Name must be less than 10 characters'
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        contactRules: [
            v => !!v || 'Contact is required',
            v => /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(v) || 'Contact must be valid'
        ],
        items: [
            {item: 'What is the name of city in which you were born?'},
            {item: 'What is the name of your childhood friend'},
            {item: 'What is the name of your first crush?'},
            {item: 'What is the color of your car?'}
        ],
        checkbox: false
    }
  },
  components:{
      Panel
  },
  methods:{
      async registerCoach(){
          try{
              this.error=null;
              this.success=null;    
              //alert(this.title+ " Hi")       
            const response = await AuthenticationService.registerCoach({
                email: this.email,
                password: this.password,
                name: this.name,
                contact: this.contact,
                select: this.select,
                answer: this.answer,
                code: this.code,
                checkbox: this.checkbox,
                role: this.title,
            })
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('set',response.data.user)
            alert("You have successfully registered "+response.data.user.name+". Please login to continue.")
            this.$router.push("loginCoach")
           
          }catch(error){
              this.error = error.response.data.error;
          }
      },
      async registerMember(){
          try{
              this.error=null;
              this.success=null;          
            const response = await AuthenticationService.registerMember({
                email: this.email,
                password: this.password,
                name: this.name,
                contact: this.contact,
                select: this.select,
                answer: this.answer,
                code: "abc@123",
                checkbox: this.checkbox,
                role: this.title,
            })
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('set',response.data.user)
            alert("You have successfully registered "+response.data.user.name+". Please login to continue.")
            this.$router.push("loginMember")
           
          }catch(error){
              this.error = error.response.data.error;
          }
      },
      
      clear () {
        this.$refs.form.reset()
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
    color:red
}
</style>
