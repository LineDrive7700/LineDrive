<template>
	<Panel>
        <slot>
            <v-toolbar flat dense class="gray darken-3">
                <v-toolbar-title>Book your Availability</v-toolbar-title>
            </v-toolbar>

			<h4> Hello Mr. {{this.$store.state.user.name}} </h4>
			<h5> Please select the date and slots when you are available for coaching </h5>
			<v-select v-model="selectLocation" :items="items" item-text="Location" item-value="id" label="Select the location" return-item-value single-line></v-select>
			<div hidden><v-text-field v-model="selectLocation" name="location" label="Location" disabled hidden></v-text-field>
			</div>
			<v-layout v-if="selectLocation">
				<v-flex xs4>
					<v-date-picker ref="selectDate" v-model="selectDate" full-width></v-date-picker>
				</v-flex>
				<v-flex xs8>
					<v-layout>
						<v-flex xs6>
							<v-btn class="blue darken-3" dark  @click="viewSelected">View Booked Availability</v-btn>
							<div v-if="hiddenDelete">
								<h4> Current Availability</h4>
								<v-data-table :headers="headers" :items="slots" :search="search" v-model="selected" item-key="id" select-all class="elevation-1">
									<template slot="items" slot-scope="props">
										<v-tooltip bottom>
											<span slot="activator">
											{{ props.header.text }}
											</span>
											<span>
											{{ props.header.text }}
											</span>
										</v-tooltip>
									</template>
									<template slot="items" :disabled="props.item.booked_status" slot-scope="props">
										<td>
											<v-checkbox  :disabled="props.item.booked_status" v-model="props.selected" primary></v-checkbox>
										</td>
										<td class="text-xs-left">{{ props.item.selectDate }}</td>
										<td class="text-xs-left">{{ availableSlot[props.item.slotsId].Slots }}</td>
									</template>
								</v-data-table>
								<v-btn class="blue darken-3" dark  @click="removeSelected">Remove the Availability</v-btn>
							</div>
						</v-flex>
						<v-flex xs6>
							<v-btn class="blue darken-3" dark  @click="bookSelected">Book Timings</v-btn>
							<v-select :items="availableSlot" item-text="Slots" item-value="SlotsId" v-model="selectAvailability" label="Select your availability" multiple chips></v-select>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
			<div class="error" v-html="error"></div>
            <div class="success" v-html="success"></div>
        </slot>
	</Panel>
</template>
<script>
import Panel from '@/components/Panel'
import SelectedDates from './../services/SelectedDates'
import CalendarView from "vue-simple-calendar"
import CalendarMathMixin from "vue-simple-calendar/dist/calendar-math-mixin.js"
import LocationService from './../services/LocationService'
import Slotsservice from './../services/SlotsService'

require("vue-simple-calendar/dist/static/css/default.css")
require("vue-simple-calendar/dist/static/css/holidays-us.css")

export default {

	components: {
		CalendarView,
		Panel
	},
	mixins: [CalendarMathMixin],
	data() {
		return {
			hiddenDelete: '',
			search: '',
        	selected: [],
			headers: [
				{ text: 'Date', value: 'selectDate' },
				{ text: 'Slots', value: 'slotsId' }
				],
			/* Show the current month, and give it some fake events to show */
			selectAvailability: [],
			removeSlots:[],
			selectDate: null,
			slots: null,
			error: null,
			success: null,
			selectLocation: null,
			email:"",
			location:"",
			items: [],
			availableSlot:[],
			
		}
	},
	computed: {
	
	},
	
	async mounted() {
		this.items = (await LocationService.index()).data,
		this.availableSlot = (await Slotsservice.index()).data
	},
	
	
	methods: {
		async viewSelected(){
          try{
			  console.log("hi "+ this.selectAvailability+" "+this.selectDate+ " "+this.selectLocation+ " "+this.$store.state.user.email)
              this.error=null;
              this.success=null;    
              //alert(this.title+ " Hi")       
            this.slots = (await SelectedDates.index({
				email: this.$store.state.user.email,
				selectDate: this.selectDate,
				locationId: this.selectLocation,
			}	
			)).data
			this.success = "Please find the slots"
			this.hiddenDelete = "true"
          }catch(error){
              this.error = error.response.data.error;
          }
	  },
	  async removeSelected(){
          try{
              this.error=null;
              this.success=null;    
              console.log(this.selected)       
            const response = (await SelectedDates.delete({
				user: this.$store.state.user.email,
				selected:this.selected
			}	
			))
			this.slots = (await SelectedDates.index({
				email: this.$store.state.user.email,
				selectDate: this.selectDate,
				locationId: this.selectLocation,
			}	
			)).data
			this.success = "Slots are successfully deleted"
          }catch(error){
              this.error = error.response.data.error;
		  }
	  },
	  async bookSelected(){
          try{
			  console.log("hi "+ this.selectAvailability+" "+this.selectDate+ " "+this.selectLocation+ " "+this.$store.state.user.email)
              this.error=null;
              this.success=null;    
              //alert(this.title+ " Hi")       
            const response = await SelectedDates.post({
				email: this.$store.state.user.email,
				selectDate: this.selectDate,
				locationId: this.selectLocation,
				selectAvailability: this.selectAvailability
			})
			this.success = "Booked the slots"
			
          }catch(error){
              this.error = error.response.data.error;
          }
      }
	},
}
</script>

<style>
html,
body {
	height: 100%;
	margin: 0;
	background-color: #f7fcff;
}

#app {
	display: flex;
	flex-direction: row;
	font-family: Calibri, sans-serif;
	width: 95vw;
	min-width: 30rem;
	max-width: 100rem;
	min-height: 40rem;
	margin-left: auto;
	margin-right: auto;
}

.disabled{
	color:black;
	background-color: black;
}


</style>
