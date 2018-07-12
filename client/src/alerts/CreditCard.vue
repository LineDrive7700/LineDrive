<template>
    <v-dialog v-model="dialog" persistent max-width="500px">
        
        <v-btn v-if="!isHidden" slot="activator" color="primary" dark>Add Credit Card</v-btn>
        <v-card>
        <v-card-title>
          <span class="headline">Credit Card Information</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout v-model="valid" lazy-validation wrap>
                <v-flex xs12>
                    <v-text-field mask="#### - #### - #### - ####" v-model="creditcardnumber" :rules="cardnumberrules" label="Credit Card Number" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field mask="##/####" v-model="expirydate" :rules="expirydaterules" label="Expiry Date(MM/YYYY)"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field v-model="cardholdername" label="Name On Card" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field v-model="cardholderaddress" label="Billing Address"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field mask="#####" v-model="cardholderzipcode" label="Billing ZipCode"></v-text-field>
                </v-flex>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat :disabled="!valid" @click.native="SaveCreditCard">Save</v-btn>
                <div class="error" v-html="error">Hello</div>
                <div class="success" v-html="success">HelloSuccess</div>
            </v-layout>
          </v-container>
        </v-card-text>
        </v-card>
        
    </v-dialog>
</template>

<script>
import Panel from '@/components/Panel'
import CreditCardService from './../services/CreditCardService'
export default {
   components:{
      Panel
  },
    data () {
        return {
        email:"",
        valid: true,
        isHidden:false,
        dialog: false,
        success:null,
        error:null,
        creditcardnumber:"1234567890123456",
        expirydate:"123456",
        cardholdername: "Manish Biyani",
        cardholderaddress:"7825 Chattam",
        cardholderzipcode:"75252",
        cardnumberrules: [
        v => (v && v.length === 16 )|| "Card Number must be 16 digits"],
        expirydaterules: [
        v => (v && v.length === 6 )|| "Card Number must be 16 digits"],
        
        }
    },
    methods:{
        async SaveCreditCard(){
          try{
              //alert("Hello "+this.email+" "+this.password+" "+this.contact )
              this.error=null;
              this.success=null; 

            const response = await CreditCardService.post({
                email: this.username,
                CreditCardNumber: this.creditcardnumber,
                CreditCardExpiry: this.expirydate,
                CreditCardName:this.cardholdername,
                CreditCardAddress:this.cardholderaddress,
                CreditCardZip:this.cardholderzipcode
            })
            alert("Updated")
            this.success= "You have successfully added the credit card"+this.username;
            this.dialog = false;
            
          }catch(error){
              this.error=error.response.data.error;
          }
      },
    },
    computed:{
        username: function(){ 
            return this.$store.state.user.email;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
    color:red
}
</style>
