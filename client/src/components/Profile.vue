<template>
    <Panel>
        <slot>
            <v-toolbar flat dense class="gray darken-3">
                <v-toolbar-title>{{title}} Profile</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="name" :rules="nameRules" :counter="30" label="Name" required></v-text-field>
                    <v-text-field v-model="contact" label="Contact" :rules="contactRules" required></v-text-field>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" disabled></v-text-field>
                    <v-select v-model="select" :items="items" :rules="selectRules" item-text="item" item-value="item" label="Select" return-item-value single-line></v-select>
                    <div hidden><v-text-field v-model="select" name="question" label="Question" disabled hidden></v-text-field>
                    </div>
                    <v-text-field v-model="answer" :rules="answerRules" label="Answer" required></v-text-field>
                    <v-text-field v-model="password" name="password" label="Please Enter your Password to save the changes" type="password" required></v-text-field>
                    <credit-card v-if="title==='Member'"></credit-card>
                    <div class="error" v-html="error"></div>
                    <div class="success" v-html="success"></div>
                    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
                    <v-btn class="blue darken-3" dark :disabled="!valid"  @click="saveChanges">Save changes</v-btn>
                </v-form>
            </v-card-text>
        </slot>
    </Panel>
</template>

<script>
import AuthenticationService from './../services/AuthenticationService'
import Panel from '@/components/Panel'
import UserProfile from "./../services/UserProfile"
import CreditCard from "./../alerts/CreditCard"
export default {
   name: 'Profile',
  data () {
    return {

        password: null,
        
        contact : this.$store.state.user.contact,
        answer : this.$store.state.user.answer,
        email : this.$store.state.user.email,
        select : this.$store.state.user.select,
        title : this.$store.state.user.role,
        error: null,
        success: null,
        valid: true,
        spacer:160,
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
      Panel,
      CreditCard
  },
  methods:{
      async saveChanges(){
          try{
              //alert("Hello "+this.email+" "+this.password+" "+this.contact )
              this.error=null;
              this.success=null;  

            const response = await AuthenticationService.profile({
                email: this.email,
                password: this.password,
                name: this.name,
                contact: this.contact,
                select: this.select,
                answer: this.answer,
                checkbox: this.checkbox,
            })
            alert("Updated")
            this.success= "You have successfully changed the details"+this.name;
            
          }catch(error){
              this.error=error.response.data.error;
          }
      },
  },

  computed: {
      name: function() {
          return this.$store.state.user.name;
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
