<template>
   <div class="panel">
        <br><br>
        <v-layout justify-center>
            <v-flex>
                <div class="white elevation-2">
                     <slot>
                    </slot>
                </div>
            </v-flex>
        </v-layout>
        <br><br>
        <v-layout justify-center>
            <v-flex>
                <div class="white elevation-2">
                    <slot name="secondForm">
                    
                    </slot>
                </div>
            </v-flex>
        </v-layout>
        <br><br><hr>
        <br><br>
        <v-layout justify-center>
            <v-flex>
                <div class="white elevation-2">
                    <slot name="thirdForm">
                    
                    </slot>
                </div>
            </v-flex>
        </v-layout>
        <br><br><hr>
   </div>
</template>

<script>
import AuthenticationService from './../services/AuthenticationService'
export default {
 props:[
     'title',
 ]
}
</script>


<style scoped>
 .input-group--text-field input{
  border-bottom: 0.5px solid black;
}
</style>