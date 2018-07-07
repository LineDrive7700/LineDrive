<template>
    <Panel title="Forgot Password">
        <slot>
            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    <v-select v-model="select" :items="items" :rules="selectRules" item-text="item" item-value="item" label="Select" return-item-value single-line></v-select>
                    <div hidden><v-text-field v-model="select" name="question" label="Question" disabled hidden></v-text-field>
                    </div><v-text-field v-model="answer" label="Answer" required></v-text-field>
                    <v-text-field v-model="password" name="password" label="Enter New Password" type="password"></v-text-field>
                    <div class="error" v-html="error"></div>
                    <div class="success" v-html="success"></div>
                    <v-btn class="blue darken-3" dark :disabled="!valid"  @click="forgotPassCoach">Change Password</v-btn><br>
                    <b-link href="#/loginCoach"><b>Already have an account? Sign In</b></b-link>
                </v-form>
            </v-card-text>
        </slot>
    </Panel>
</template>

<script>
import AuthenticationService from './../services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
    components:{
      Panel
  },
    data(){
        return{
            email: "",
            password: "",
            error: null,
            success: null,
            answer: null,
            valid: true,
            select: null,
            selectRules: [
                v => !!v || 'Please select a valid question to recover the password',
            ],
            emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
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
    methods:{
      async forgotPassCoach(){
          try{
              this.error=null;
              this.success=null;            
            const response = await AuthenticationService.forgotPassCoach({
                email: this.email,
                password: this.password,
                select: this.select,
                answer: this.answer,
            })
            this.success= "You have successfully changed the password";
          }catch(error){
              this.error = error.response.data.error;
          }
          console.log(response.data)
      },
    }

}
</script>


<style scoped>
 .input-group--text-field input{
  border-bottom: 0.5px solid black;
}
</style>