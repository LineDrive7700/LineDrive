<template>
    <div>
        <v-toolbar  v-if="isHidden" flat dense class="gray darken-3">
                <v-toolbar-title>Credit Card Information</v-toolbar-title>
        </v-toolbar>
        <v-btn v-if="!isHidden" class="blue darken-3" dark style='float: left;' v-on:click="isHidden=true">Add Credit Card</v-btn>
        <v-form v-if="isHidden">
            <v-text-field mask="#### - #### - #### - ####" v-model="creditcardnumber" :rules="cardnumberrules" label="Credit Card Number"></v-text-field>
            <v-text-field mask="##/####" v-model="expirydate" :rules="expirydaterules" label="Expiry Date(MM/YYYY)"></v-text-field>
            <v-text-field v-model="cardholdername" label="Name On Card"></v-text-field>
            <v-text-field v-model="cardholderaddress" label="Billing Address"></v-text-field>
            <v-text-field mask="#####" v-model="cardholderzipcode" label="Billing ZipCode"></v-text-field>
            <v-btn class="blue darken-3" dark style='float: left;' v-on:click="isHidden=false">Save</v-btn> 
            <v-btn class="blue darken-3" dark style='float: left;' v-on:click="isHidden=false">Cancel</v-btn><br>
        </v-form>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
   components:{
      Panel
  },
    data () {
        return {
        isHidden:false
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
